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
exports.AbstractCollectionImageBandToJSON = exports.AbstractCollectionImageBandFromJSONTyped = exports.AbstractCollectionImageBandFromJSON = exports.instanceOfAbstractCollectionImageBand = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AbstractCollectionImageBand interface.
 */
function instanceOfAbstractCollectionImageBand(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAbstractCollectionImageBand = instanceOfAbstractCollectionImageBand;
function AbstractCollectionImageBandFromJSON(json) {
    return AbstractCollectionImageBandFromJSONTyped(json, false);
}
exports.AbstractCollectionImageBandFromJSON = AbstractCollectionImageBandFromJSON;
function AbstractCollectionImageBandFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'empty': !(0, runtime_1.exists)(json, 'empty') ? undefined : json['empty'],
    };
}
exports.AbstractCollectionImageBandFromJSONTyped = AbstractCollectionImageBandFromJSONTyped;
function AbstractCollectionImageBandToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'empty': value.empty,
    };
}
exports.AbstractCollectionImageBandToJSON = AbstractCollectionImageBandToJSON;
//# sourceMappingURL=AbstractCollectionImageBand.js.map