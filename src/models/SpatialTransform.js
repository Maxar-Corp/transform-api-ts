"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialTransformToJSON = exports.SpatialTransformFromJSONTyped = exports.SpatialTransformFromJSON = exports.instanceOfSpatialTransform = void 0;
const SpatialTransformType_1 = require("./SpatialTransformType");
const Affine_1 = require("./Affine");
/**
 * Check if a given object implements the SpatialTransform interface.
 */
function instanceOfSpatialTransform(value) {
    let isInstance = true;
    isInstance = isInstance && "spatialReferenceSystemType" in value;
    isInstance = isInstance && "spatialReferenceSystemIdentifier" in value;
    isInstance = isInstance && "affine" in value;
    return isInstance;
}
exports.instanceOfSpatialTransform = instanceOfSpatialTransform;
function SpatialTransformFromJSON(json) {
    return SpatialTransformFromJSONTyped(json, false);
}
exports.SpatialTransformFromJSON = SpatialTransformFromJSON;
function SpatialTransformFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'spatialReferenceSystemType': (0, SpatialTransformType_1.SpatialTransformTypeFromJSON)(json['spatialReferenceSystemType']),
        'spatialReferenceSystemIdentifier': json['spatialReferenceSystemIdentifier'],
        'affine': (0, Affine_1.AffineFromJSON)(json['affine']),
    };
}
exports.SpatialTransformFromJSONTyped = SpatialTransformFromJSONTyped;
function SpatialTransformToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'spatialReferenceSystemType': (0, SpatialTransformType_1.SpatialTransformTypeToJSON)(value.spatialReferenceSystemType),
        'spatialReferenceSystemIdentifier': value.spatialReferenceSystemIdentifier,
        'affine': (0, Affine_1.AffineToJSON)(value.affine),
    };
}
exports.SpatialTransformToJSON = SpatialTransformToJSON;
//# sourceMappingURL=SpatialTransform.js.map