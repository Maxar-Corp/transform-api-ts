"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Transform API
 * TODO
 *
 * The version of the OpenAPI document: 1.0
 * Contact: someone@maxar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBandToJSON = exports.ImageBandFromJSONTyped = exports.ImageBandFromJSON = exports.ImageBand = void 0;
/**
 *
 * @export
 */
exports.ImageBand = {
    Pan: 'pan',
    Blue: 'blue',
    Green: 'green',
    Red: 'red',
    Nir1: 'nir1',
    Coastal: 'coastal',
    Yellow: 'yellow',
    RedEdge: 'red_edge',
    RedEdge1: 'red_edge1',
    RedEdge2: 'red_edge2',
    Nir2: 'nir2',
    S1: 's1',
    S2: 's2',
    S3: 's3',
    S4: 's4',
    S5: 's5',
    S6: 's6',
    S7: 's7',
    S8: 's8',
    Dem: 'dem',
    Alpha: 'alpha',
    Undefined: 'undefined'
};
function ImageBandFromJSON(json) {
    return ImageBandFromJSONTyped(json, false);
}
exports.ImageBandFromJSON = ImageBandFromJSON;
function ImageBandFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ImageBandFromJSONTyped = ImageBandFromJSONTyped;
function ImageBandToJSON(value) {
    return value;
}
exports.ImageBandToJSON = ImageBandToJSON;
//# sourceMappingURL=ImageBand.js.map