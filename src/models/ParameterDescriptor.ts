/* tslint:disable */
/* eslint-disable */

import { exists } from '../runtime.js';
import type { OperatorParameterType } from './OperatorParameterType.js';
import {
    OperatorParameterTypeFromJSON,
    OperatorParameterTypeFromJSONTyped,
    OperatorParameterTypeToJSON,
} from './OperatorParameterType.js';

/**
 * A description of a parameter used by the operator/function.
 * @export
 * @interface ParameterDescriptor
 */
export interface ParameterDescriptor {
    /**
     * Default value.
     * @type {any}
     * @memberof ParameterDescriptor
     */
    _default?: any | null;
    /**
     * Required or not
     * @type {boolean}
     * @memberof ParameterDescriptor
     */
    required?: boolean;
    /**
     * A description of the parameter.
     * @type {string}
     * @memberof ParameterDescriptor
     */
    description?: string;
    /**
     * 
     * @type {OperatorParameterType}
     * @memberof ParameterDescriptor
     */
    type?: OperatorParameterType;
}

/**
 * Check if a given object implements the ParameterDescriptor interface.
 */
export function instanceOfParameterDescriptor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ParameterDescriptorFromJSON(json: any): ParameterDescriptor {
    return ParameterDescriptorFromJSONTyped(json, false);
}

export function ParameterDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : OperatorParameterTypeFromJSON(json['type']),
    };
}

export function ParameterDescriptorToJSON(value?: ParameterDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default': value._default,
        'required': value.required,
        'description': value.description,
        'type': OperatorParameterTypeToJSON(value.type),
    };
}

