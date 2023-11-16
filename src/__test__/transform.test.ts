import assert from 'node:assert';
import { before, describe, it } from 'node:test';
import {TransformApi} from "../apis/index.js";
import {Configuration} from "../runtime.js";

function getToken(){
    const token = process.env.UAA_TOKEN;
    if (typeof token==='undefined' || token === null) throw Error('No token found. Try setting env var UAA_TOKEN before running tests');
    return token;
}

function nearInt(actual: number, expected: number, delta: number) : boolean {
    return actual < expected + delta && actual > expected - delta;
}

describe('TransformAPI', () => {
    let api: TransformApi;
    before(() => {
        const config = new Configuration({accessToken: getToken()});
        api = new TransformApi(config);
    });
    it('Get list of functions should pass', async () => {
        await assert.doesNotReject(api.getFunctionList(), 'get function list failed');
        assert((await api.getFunctionList()).length > 85, 'get function list failed')
    });

    it('get script', async () => {
        const scriptBody = await api.getScript({ id: 'ortho-image' });
        assert(scriptBody.length > 5000, 'get script failed');
    });

    it('Store script', async () => {
        const script_contents = `def main()
constantOp1 = IPE:call("Operator:Constant", {"bandValues":[10,20,30], "width":1024f, "height":1024f});
constantOp2 = IPE:call("Operator:Constant", {"bandValues":[50,60,70], "width":1024f, "height":1024f});
//return multiple RenderedOps as a List - no need for the Switch operator, and DeleteMeSoon
return [constantOp1, constantOp2];
end`
        const scriptResponse = await api.storeScript({ body: script_contents });
        assert(scriptResponse.id === 'd79207417dce0b322278db2deda72cbfdb60e8d09cd685ac67c4d36a5f76d0e5', 'store script failed');
    });

    it('test script eval', async () => {
        const script_contents = `def main()
constantOp1 = IPE:call("Operator:Constant", {"bandValues":[10,20,30], "width":1024f, "height":1024f});
constantOp2 = IPE:call("Operator:Constant", {"bandValues":[50,60,70], "width":1024f, "height":1024f});
//return multiple RenderedOps as a List - no need for the Switch operator, and DeleteMeSoon
return [constantOp1, constantOp2];
end`
        const scriptResponse = await api.storeScript({ body: script_contents });

        const evalResponse = await api.evalScript({ id: scriptResponse.id, function: 'main', p: null });
        assert(evalResponse.result[0] === 'ConstantOp', 'eval script failed');
        assert(evalResponse.result[1] === 'ConstantOp', 'eval script failed');
    });

    it('test script eval success with error', async () => {
        const script_contents = `def main()
print("The create call below is malformed!");
constantOp = IPE:call("Operator:Constant", {"INCORRECT_PARAM_NAME":[10,20,30], "width":1024f, "height":1024f});
return constantOp;
end`
        const scriptResponse = await api.storeScript({ body: script_contents });
        const evalResponse = await api.evalScript({ id: scriptResponse.id, function: 'main', p: null });
        assert(typeof evalResponse.result === 'undefined', 'eval script failed');
        assert(evalResponse.error?.includes('IPEScriptException'), 'eval script failed');
    });

    it('test getScriptGeotiff_header', async () => {
        const geotiffInfo = await api.getScriptGeotiffInfo({ id: 'ortho-image', function: 'ortho', p: ["collect_identifier=\"10400100655F5400\"", "crs=\"EPSG:4326\"", "bands=\"red,green,blue\""] });
        assert.equal(geotiffInfo.acceptRanges, 'bytes', 'accept-ranges is not correct');
        assert.equal(geotiffInfo.contentType, 'image/tiff', 'content-type is not correct');
        assert(nearInt(geotiffInfo.contentLength, 492545192, 500), 'content-length is not correct');
        assert(nearInt(geotiffInfo.xTiffHeaderLength, 42152, 256), 'x-tiff-header-length is not correct');
        assert(nearInt(geotiffInfo.xTiffNominalTileByteCount, 196608, 256), 'x-tiff-nominal-tile-byte-count is not correct');
    });


    it('test getScriptMetadata', async () => {
        const metadata = await api.getScriptMetadata({ id: 'ortho-image', function: 'ortho', p: ["collect_identifier=\"10400100655F5400\"", "crs=\"EPSG:4326\"", "bands=\"red,green,blue\""] });
        assert.equal(metadata.bands?.join(','), 'red,green,blue', 'bands is not correct');
        assert(metadata.imageMetadata !== null, 'image metadata is missing');
        assert(metadata.sourceMetadata !== null, 'source metadata is missing');
        assert(metadata.spatialTransform!!.spatialReferenceSystemIdentifier === "EPSG:4326", 'epsg code not correct');
        //assert(typeof metadata.imageStatistics !== 'undefined', 'image stats are missing');
        //assert(typeof metadata.histogram !== 'undefined', 'histogram is missing');
    });

    it('test getScriptGeotiff_data', async () => {
        const blob = await api.getScriptGeotiff({ range: 'bytes=0-1523064', id: 'ortho-image', function: 'ortho', p: ["collect_identifier=\"10400100655F5400\"", "crs=\"EPSG:4326\"", "bands=\"red,green,blue\""] });
        assert(blob.size === 1523065, 'geotiff range read returned incorrect number of bytes');
    });

});
