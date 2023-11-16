/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface Affine
 */
export interface Affine {
    /**
     * The scale factor in the x direction (one of the 6 affine transform parameters).
     * @type {number}
     * @memberof Affine
     */
    scaleX: number;
    /**
     * The scale factor in the y direction (one of the 6 affine transform parameters).
     * @type {number}
     * @memberof Affine
     */
    scaleY: number;
    /**
     * The translation factor in the x direction (one of the 6 affine transform parameters).
     * @type {number}
     * @memberof Affine
     */
    translateX: number;
    /**
     * The translation factor in the y direction (one of the 6 affine transform parameters).
     * @type {number}
     * @memberof Affine
     */
    translateY: number;
    /**
     * The shear factor in the x direction (one of the 6 affine transform parameters).  Note that this parameter is usually 0 since geospatial images do not usually have rotation once rectified to a map projection.
     * @type {number}
     * @memberof Affine
     */
    shearX: number;
    /**
     * The shear factor in the y direction (one of the 6 affine transform parameters).  Note that this parameter is usually 0 since geospatial images do not usually have rotation once rectified to a map projection.
     * @type {number}
     * @memberof Affine
     */
    shearY: number;
}

/**
 * Check if a given object implements the Affine interface.
 */
export function instanceOfAffine(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "scaleX" in value;
    isInstance = isInstance && "scaleY" in value;
    isInstance = isInstance && "translateX" in value;
    isInstance = isInstance && "translateY" in value;
    isInstance = isInstance && "shearX" in value;
    isInstance = isInstance && "shearY" in value;

    return isInstance;
}

export function AffineFromJSON(json: any): Affine {
    return AffineFromJSONTyped(json, false);
}

export function AffineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Affine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scaleX': json['scaleX'],
        'scaleY': json['scaleY'],
        'translateX': json['translateX'],
        'translateY': json['translateY'],
        'shearX': json['shearX'],
        'shearY': json['shearY'],
    };
}

export function AffineToJSON(value?: Affine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scaleX': value.scaleX,
        'scaleY': value.scaleY,
        'translateX': value.translateX,
        'translateY': value.translateY,
        'shearX': value.shearX,
        'shearY': value.shearY,
    };
}

