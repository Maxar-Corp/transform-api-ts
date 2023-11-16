/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime.js';
import type {
  EvalScriptResponse,
  FunctionDescriptor,
  StoreScriptResponse,
  TransformProblem,
  UnifiedMetadata,
} from '../models/index.js';
import {
    EvalScriptResponseFromJSON,
    EvalScriptResponseToJSON,
    FunctionDescriptorFromJSON,
    FunctionDescriptorToJSON,
    StoreScriptResponseFromJSON,
    StoreScriptResponseToJSON,
    TransformProblemFromJSON,
    TransformProblemToJSON,
    UnifiedMetadataFromJSON,
    UnifiedMetadataToJSON,
} from '../models/index.js';
import {GeotiffInfo} from "../runtime.js";

export interface EvalScriptRequest {
    id: string;
    function: string;
    p?: Array<string> | null;
}

export interface GetScriptRequest {
    id: string;
}

export interface GetScriptGeotiffRequest {
    range: string;
    id: string;
    function: string;
    prefetch?: boolean;
    p?: Array<string> | null;
}

export interface GetScriptGeotiffInfoRequest {
    id: string;
    function: string;
    prefetch?: boolean;
    p?: Array<string> | null;
}

export interface GetScriptMetadataRequest {
    id: string;
    function: string;
    p?: Array<string> | null;
    key?: string | null;
}

export interface StoreScriptRequest {
    body: string;
}

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface TransformApiInterface
 */
export interface TransformApiInterface {
    /**
     * Get the results from executing and evaluating a script via a script id, parameters, and an function name.
     * @summary Execute and evaluate a script
     * @param {string} id Script ID
     * @param {string} function The function to process
     * @param {Array<string>} [p] The function parameters if required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    evalScriptRaw(requestParameters: EvalScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EvalScriptResponse>>;

    /**
     * Get the results from executing and evaluating a script via a script id, parameters, and an function name.
     * Execute and evaluate a script
     */
    evalScript(requestParameters: EvalScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EvalScriptResponse>;

    /**
     * Get a list of all domain functions available to IPEScript.
     * @summary Get a list of all domain function.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    getFunctionListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FunctionDescriptor>>>;

    /**
     * Get a list of all domain functions available to IPEScript.
     * Get a list of all domain function.
     */
    getFunctionList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FunctionDescriptor>>;

    /**
     * 
     * @summary Get a script given a script id.
     * @param {string} id Graph ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    getScriptRaw(requestParameters: GetScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Get a script given a script id.
     */
    getScript(requestParameters: GetScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * @summary Get a byte range from a virtual GeoTIFF from a script function
     * @param {string} range Range request in bytes
     * @param {string} id Script ID
     * @param {string} function The function to process
     * @param {boolean} [prefetch] prefetching true or false.  default is true
     * @param {Array<string>} [p] The function parameters if required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    getScriptGeotiffRaw(requestParameters: GetScriptGeotiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>>;

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    getScriptGeotiff(requestParameters: GetScriptGeotiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>;

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * @summary Get a byte range from a virtual GeoTIFF from a script function
     * @param {string} range Range request in bytes
     * @param {string} id Script ID
     * @param {string} function The function to process
     * @param {boolean} [prefetch] prefetching true or false.  default is true
     * @param {Array<string>} [p] The function parameters if required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    getScriptGeotiffInfoRaw(requestParameters: GetScriptGeotiffInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.GeotiffInfo>;

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    getScriptGeotiffInfo(requestParameters: GetScriptGeotiffInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeotiffInfo>;

    /**
     * Get metadata about an image given a script id, parameters, and an function name.
     * @summary Get image metadata
     * @param {string} id Script ID
     * @param {string} function The function to process
     * @param {Array<string>} [p] The function parameters if required
     * @param {string} [key] Metadata attribute key to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    getScriptMetadataRaw(requestParameters: GetScriptMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnifiedMetadata>>;

    /**
     * Get metadata about an image given a script id, parameters, and an function name.
     * Get image metadata
     */
    getScriptMetadata(requestParameters: GetScriptMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnifiedMetadata>;

    /**
     * Store the script. The generated unique \"id\" is returned. Make sure to save the \"id\" returned for the resulting script to use when referencing this script. Scripts are NOT editable and any changes, when posted, will cause a new script \"id\" to be generated. 
     * @summary Store script
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransformApiInterface
     */
    storeScriptRaw(requestParameters: StoreScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StoreScriptResponse>>;

    /**
     * Store the script. The generated unique \"id\" is returned. Make sure to save the \"id\" returned for the resulting script to use when referencing this script. Scripts are NOT editable and any changes, when posted, will cause a new script \"id\" to be generated. 
     * Store script
     */
    storeScript(requestParameters: StoreScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StoreScriptResponse>;

}

/**
 * 
 */
export class TransformApi extends runtime.BaseAPI implements TransformApiInterface {

    /**
     * Get the results from executing and evaluating a script via a script id, parameters, and an function name.
     * Execute and evaluate a script
     */
    async evalScriptRaw(requestParameters: EvalScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EvalScriptResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling evalScript.');
        }

        if (requestParameters.function === null || requestParameters.function === undefined) {
            throw new runtime.RequiredError('function','Required parameter requestParameters.function was null or undefined when calling evalScript.');
        }

        const queryParameters: any = {};

        if (requestParameters.function !== undefined) {
            queryParameters['function'] = requestParameters.function;
        }

        if (requestParameters.p) {
            queryParameters['p'] = requestParameters.p;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe/{id}/eval`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EvalScriptResponseFromJSON(jsonValue));
    }

    /**
     * Get the results from executing and evaluating a script via a script id, parameters, and an function name.
     * Execute and evaluate a script
     */
    async evalScript(requestParameters: EvalScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EvalScriptResponse> {
        const response = await this.evalScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all domain functions available to IPEScript.
     * Get a list of all domain function.
     */
    async getFunctionListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FunctionDescriptor>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/function`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FunctionDescriptorFromJSON));
    }

    /**
     * Get a list of all domain functions available to IPEScript.
     * Get a list of all domain function.
     */
    async getFunctionList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FunctionDescriptor>> {
        const response = await this.getFunctionListRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a script given a script id.
     */
    async getScriptRaw(requestParameters: GetScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getScript.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response);
    }

    /**
     * Get a script given a script id.
     */
    async getScript(requestParameters: GetScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getScriptRaw(requestParameters, initOverrides);
        return response.value();
    }

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    async getScriptGeotiffInfoRaw(requestParameters: GetScriptGeotiffInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeotiffInfo> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getScriptGeotiff.');
        }

        if (requestParameters.function === null || requestParameters.function === undefined) {
            throw new runtime.RequiredError('function','Required parameter requestParameters.function was null or undefined when calling getScriptGeotiff.');
        }

        const queryParameters: any = {};

        if (requestParameters.function !== undefined) {
            queryParameters['function'] = requestParameters.function;
        }

        if (requestParameters.prefetch !== undefined) {
            queryParameters['prefetch'] = requestParameters.prefetch;
        }

        if (requestParameters.p) {
            queryParameters['p'] = requestParameters.p;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe/{id}/geotiff`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'HEAD',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        const headers = response.headers;
        const acceptRanges = headers.get('accept-ranges')!;
        const contentType = headers.get('content-type')!;
        const contentLength = +(headers.get('content-length')!);
        const xTiffHeaderLength  = +(headers.get('x-tiff-header-length')!);
        const xTiffNominalTileByteCount  = +(headers.get('x-tiff-nominal-tile-byte-count')!);
        return {
            acceptRanges,
            contentType,
            contentLength,
            xTiffHeaderLength,
            xTiffNominalTileByteCount
        }
    }

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    async getScriptGeotiffInfo(requestParameters: GetScriptGeotiffInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeotiffInfo> {
        const response = await this.getScriptGeotiffInfoRaw(requestParameters, initOverrides);
        return response;
    }

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    async getScriptGeotiffRaw(requestParameters: GetScriptGeotiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.range === null || requestParameters.range === undefined) {
            throw new runtime.RequiredError('range','Required parameter requestParameters.range was null or undefined when calling getScriptGeotiff.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getScriptGeotiff.');
        }

        if (requestParameters.function === null || requestParameters.function === undefined) {
            throw new runtime.RequiredError('function','Required parameter requestParameters.function was null or undefined when calling getScriptGeotiff.');
        }

        const queryParameters: any = {};

        if (requestParameters.function !== undefined) {
            queryParameters['function'] = requestParameters.function;
        }

        if (requestParameters.prefetch !== undefined) {
            queryParameters['prefetch'] = requestParameters.prefetch;
        }

        if (requestParameters.p) {
            queryParameters['p'] = requestParameters.p;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.range !== undefined && requestParameters.range !== null) {
            headerParameters['range'] = String(requestParameters.range);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe/{id}/geotiff`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Support virtual image as GeoTIFF given a script id, function name, script parameters (provided as url query parameters), and a valid byte range. The entire dataset represented by the script, function and parameters is presented as a geotiff and this method allows a user to read a portion of the virtual GeoTIFF. See [Byte Serving](https://en.wikipedia.org/wiki/Byte_serving).
     * Get a byte range from a virtual GeoTIFF from a script function
     */
    async getScriptGeotiff(requestParameters: GetScriptGeotiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.getScriptGeotiffRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get metadata about an image given a script id, parameters, and an function name.
     * Get image metadata
     */
    async getScriptMetadataRaw(requestParameters: GetScriptMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnifiedMetadata>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getScriptMetadata.');
        }

        if (requestParameters.function === null || requestParameters.function === undefined) {
            throw new runtime.RequiredError('function','Required parameter requestParameters.function was null or undefined when calling getScriptMetadata.');
        }

        const queryParameters: any = {};

        if (requestParameters.function !== undefined) {
            queryParameters['function'] = requestParameters.function;
        }

        if (requestParameters.p) {
            queryParameters['p'] = requestParameters.p;
        }

        if (requestParameters.key !== undefined) {
            queryParameters['key'] = requestParameters.key;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe/{id}/metadata`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UnifiedMetadataFromJSON(jsonValue));
    }

    /**
     * Get metadata about an image given a script id, parameters, and an function name.
     * Get image metadata
     */
    async getScriptMetadata(requestParameters: GetScriptMetadataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnifiedMetadata> {
        const response = await this.getScriptMetadataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Store the script. The generated unique \"id\" is returned. Make sure to save the \"id\" returned for the resulting script to use when referencing this script. Scripts are NOT editable and any changes, when posted, will cause a new script \"id\" to be generated. 
     * Store script
     */
    async storeScriptRaw(requestParameters: StoreScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StoreScriptResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling storeScript.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = `Bearer ${this.configuration.accessToken}`;
        }

        const response = await this.request({
            path: `/v1/ipe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StoreScriptResponseFromJSON(jsonValue));
    }

    /**
     * Store the script. The generated unique \"id\" is returned. Make sure to save the \"id\" returned for the resulting script to use when referencing this script. Scripts are NOT editable and any changes, when posted, will cause a new script \"id\" to be generated. 
     * Store script
     */
    async storeScript(requestParameters: StoreScriptRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StoreScriptResponse> {
        const response = await this.storeScriptRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
