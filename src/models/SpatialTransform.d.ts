import type { SpatialTransformType } from './SpatialTransformType';
import type { Affine } from './Affine';
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
export declare function instanceOfSpatialTransform(value: object): boolean;
export declare function SpatialTransformFromJSON(json: any): SpatialTransform;
export declare function SpatialTransformFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpatialTransform;
export declare function SpatialTransformToJSON(value?: SpatialTransform | null): any;
