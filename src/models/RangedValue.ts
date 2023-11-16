/* tslint:disable */
/* eslint-disable */

import { exists } from '../runtime.js';
/**
 * 
 * @export
 * @interface RangedValue
 */
export interface RangedValue {
    /**
     * 
     * @type {number}
     * @memberof RangedValue
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof RangedValue
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof RangedValue
     */
    mean?: number;
}

/**
 * Check if a given object implements the RangedValue interface.
 */
export function instanceOfRangedValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RangedValueFromJSON(json: any): RangedValue {
    return RangedValueFromJSONTyped(json, false);
}

export function RangedValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): RangedValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'min': !exists(json, 'min') ? undefined : json['min'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'mean': !exists(json, 'mean') ? undefined : json['mean'],
    };
}

export function RangedValueToJSON(value?: RangedValue | null): any {
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

