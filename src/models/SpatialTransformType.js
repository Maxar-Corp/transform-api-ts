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
exports.SpatialTransformTypeToJSON = exports.SpatialTransformTypeFromJSONTyped = exports.SpatialTransformTypeFromJSON = exports.SpatialTransformType = void 0;
/**
 *
 * @export
 */
exports.SpatialTransformType = {
    Epsg: 'EPSG',
    Ideal: 'IDEAL',
    Undefined: 'UNDEFINED'
};
function SpatialTransformTypeFromJSON(json) {
    return SpatialTransformTypeFromJSONTyped(json, false);
}
exports.SpatialTransformTypeFromJSON = SpatialTransformTypeFromJSON;
function SpatialTransformTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SpatialTransformTypeFromJSONTyped = SpatialTransformTypeFromJSONTyped;
function SpatialTransformTypeToJSON(value) {
    return value;
}
exports.SpatialTransformTypeToJSON = SpatialTransformTypeToJSON;
//# sourceMappingURL=SpatialTransformType.js.map