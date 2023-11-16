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
exports.RangedValueToJSON = exports.RangedValueFromJSONTyped = exports.RangedValueFromJSON = exports.instanceOfRangedValue = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RangedValue interface.
 */
function instanceOfRangedValue(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRangedValue = instanceOfRangedValue;
function RangedValueFromJSON(json) {
    return RangedValueFromJSONTyped(json, false);
}
exports.RangedValueFromJSON = RangedValueFromJSON;
function RangedValueFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'min': !(0, runtime_1.exists)(json, 'min') ? undefined : json['min'],
        'max': !(0, runtime_1.exists)(json, 'max') ? undefined : json['max'],
        'mean': !(0, runtime_1.exists)(json, 'mean') ? undefined : json['mean'],
    };
}
exports.RangedValueFromJSONTyped = RangedValueFromJSONTyped;
function RangedValueToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'min': value.min,
        'max': value.max,
        'mean': value.mean,
    };
}
exports.RangedValueToJSON = RangedValueToJSON;
//# sourceMappingURL=RangedValue.js.map