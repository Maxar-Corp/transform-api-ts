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
exports.EvalScriptResponseToJSON = exports.EvalScriptResponseFromJSONTyped = exports.EvalScriptResponseFromJSON = exports.instanceOfEvalScriptResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the EvalScriptResponse interface.
 */
function instanceOfEvalScriptResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEvalScriptResponse = instanceOfEvalScriptResponse;
function EvalScriptResponseFromJSON(json) {
    return EvalScriptResponseFromJSONTyped(json, false);
}
exports.EvalScriptResponseFromJSON = EvalScriptResponseFromJSON;
function EvalScriptResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': !(0, runtime_1.exists)(json, 'result') ? undefined : json['result'],
        'response': !(0, runtime_1.exists)(json, 'response') ? undefined : json['response'],
        'error': !(0, runtime_1.exists)(json, 'error') ? undefined : json['error'],
    };
}
exports.EvalScriptResponseFromJSONTyped = EvalScriptResponseFromJSONTyped;
function EvalScriptResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': value.result,
        'response': value.response,
        'error': value.error,
    };
}
exports.EvalScriptResponseToJSON = EvalScriptResponseToJSON;
//# sourceMappingURL=EvalScriptResponse.js.map