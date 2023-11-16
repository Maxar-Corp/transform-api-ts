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
 * 
 * @export
 * @interface FunctionDescriptorOutputValue
 */
export interface FunctionDescriptorOutputValue {
    /**
     * A description of the parameter.
     * @type {string}
     * @memberof FunctionDescriptorOutputValue
     */
    description?: string;
    /**
     * 
     * @type {OperatorParameterType}
     * @memberof FunctionDescriptorOutputValue
     */
    type?: OperatorParameterType;
}

/**
 * Check if a given object implements the FunctionDescriptorOutputValue interface.
 */
export function instanceOfFunctionDescriptorOutputValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionDescriptorOutputValueFromJSON(json: any): FunctionDescriptorOutputValue {
    return FunctionDescriptorOutputValueFromJSONTyped(json, false);
}

export function FunctionDescriptorOutputValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionDescriptorOutputValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : OperatorParameterTypeFromJSON(json['type']),
    };
}

export function FunctionDescriptorOutputValueToJSON(value?: FunctionDescriptorOutputValue | null): any {
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

