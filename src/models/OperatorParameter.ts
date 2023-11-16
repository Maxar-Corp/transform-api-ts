/* tslint:disable */
/* eslint-disable */

import { exists, } from '../runtime.js';
import type { OperatorParameterType } from './OperatorParameterType.js';
import {
    OperatorParameterTypeFromJSON,
    OperatorParameterTypeFromJSONTyped,
    OperatorParameterTypeToJSON,
} from './OperatorParameterType.js';

/**
 * A map of parameters used by the operator keyed by the name of the parameter.
 * @export
 * @interface OperatorParameter
 */
export interface OperatorParameter {
    /**
     * A description of the parameter.
     * @type {string}
     * @memberof OperatorParameter
     */
    description?: string;
    /**
     * 
     * @type {OperatorParameterType}
     * @memberof OperatorParameter
     */
    type?: OperatorParameterType;
}

/**
 * Check if a given object implements the OperatorParameter interface.
 */
export function instanceOfOperatorParameter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OperatorParameterFromJSON(json: any): OperatorParameter {
    return OperatorParameterFromJSONTyped(json, false);
}

export function OperatorParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperatorParameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : OperatorParameterTypeFromJSON(json['type']),
    };
}

export function OperatorParameterToJSON(value?: OperatorParameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'type': OperatorParameterTypeToJSON(value.type),
    };
}

