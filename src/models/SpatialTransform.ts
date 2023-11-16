/* tslint:disable */
/* eslint-disable */


import type { SpatialTransformType } from './SpatialTransformType.js';
import {
    SpatialTransformTypeFromJSON,
    SpatialTransformTypeFromJSONTyped,
    SpatialTransformTypeToJSON,
} from './SpatialTransformType.js';
import type { Affine } from './Affine.js';
import {
    AffineFromJSON,
    AffineFromJSONTyped,
    AffineToJSON,
} from './Affine.js';

/**
 * Describes how image pixel coordinates relate to real world coordinates in some well-known spatial reference system.  The 6 Double values represent the 6 parameters in an affine transform which transform pixel coordinates into map coordinates.
 * @export
 * @interface SpatialTransform
 */
export interface SpatialTransform {
    /**
     * 
     * @type {SpatialTransformType}
     * @memberof SpatialTransform
     */
    spatialReferenceSystemType: SpatialTransformType;
    /**
     * The spatial reference system identifier expressed as a string corresponding to the spatialReferenceSystemType.
     * @type {string}
     * @memberof SpatialTransform
     */
    spatialReferenceSystemIdentifier: string;
    /**
     * 
     * @type {Affine}
     * @memberof SpatialTransform
     */
    affine: Affine;
}

/**
 * Check if a given object implements the SpatialTransform interface.
 */
export function instanceOfSpatialTransform(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spatialReferenceSystemType" in value;
    isInstance = isInstance && "spatialReferenceSystemIdentifier" in value;
    isInstance = isInstance && "affine" in value;

    return isInstance;
}

export function SpatialTransformFromJSON(json: any): SpatialTransform {
    return SpatialTransformFromJSONTyped(json, false);
}

export function SpatialTransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialTransform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spatialReferenceSystemType': SpatialTransformTypeFromJSON(json['spatialReferenceSystemType']),
        'spatialReferenceSystemIdentifier': json['spatialReferenceSystemIdentifier'],
        'affine': AffineFromJSON(json['affine']),
    };
}

export function SpatialTransformToJSON(value?: SpatialTransform | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spatialReferenceSystemType': SpatialTransformTypeToJSON(value.spatialReferenceSystemType),
        'spatialReferenceSystemIdentifier': value.spatialReferenceSystemIdentifier,
        'affine': AffineToJSON(value.affine),
    };
}

