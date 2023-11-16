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
exports.StatusTypeToJSON = exports.StatusTypeFromJSONTyped = exports.StatusTypeFromJSON = exports.instanceOfStatusType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StatusType interface.
 */
function instanceOfStatusType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStatusType = instanceOfStatusType;
function StatusTypeFromJSON(json) {
    return StatusTypeFromJSONTyped(json, false);
}
exports.StatusTypeFromJSON = StatusTypeFromJSON;
function StatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statusCode': !(0, runtime_1.exists)(json, 'statusCode') ? undefined : json['statusCode'],
        'reasonPhrase': !(0, runtime_1.exists)(json, 'reasonPhrase') ? undefined : json['reasonPhrase'],
    };
}
exports.StatusTypeFromJSONTyped = StatusTypeFromJSONTyped;
function StatusTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'statusCode': value.statusCode,
        'reasonPhrase': value.reasonPhrase,
    };
}
exports.StatusTypeToJSON = StatusTypeToJSON;
//# sourceMappingURL=StatusType.js.map