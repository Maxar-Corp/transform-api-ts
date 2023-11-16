/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
import type { FunctionDescriptorOutputValue } from './FunctionDescriptorOutputValue.js';
import {
    FunctionDescriptorOutputValueFromJSON,
    FunctionDescriptorOutputValueFromJSONTyped,
    FunctionDescriptorOutputValueToJSON,
} from './FunctionDescriptorOutputValue.js';
import type { ParameterDescriptor } from './ParameterDescriptor.js';
import {
    ParameterDescriptorFromJSON,
    ParameterDescriptorFromJSONTyped,
    ParameterDescriptorToJSON,
} from './ParameterDescriptor.js';

/**
 * describes a function
 * @export
 * @interface FunctionDescriptor
 */
export interface FunctionDescriptor {
    /**
     * The name of the function.
     * @type {string}
     * @memberof FunctionDescriptor
     */
    name: string;
    /**
     * A description of what the function does.
     * @type {string}
     * @memberof FunctionDescriptor
     */
    description: string;
    /**
     * The name of the vendor who implemented the operator.
     * @type {string}
     * @memberof FunctionDescriptor
     */
    vendor: string;
    /**
     * The function version.
     * @type {string}
     * @memberof FunctionDescriptor
     */
    version: string;
    /**
     * A map of input parameters used by the function keyed by the name of the parameter.
     * @type {{ [key: string]: ParameterDescriptor; }}
     * @memberof FunctionDescriptor
     */
    parameters: { [key: string]: ParameterDescriptor; };
    /**
     * A reference to external documentation about the function, if available.
     * @type {string}
     * @memberof FunctionDescriptor
     */
    documentation?: string;
    /**
     * 
     * @type {FunctionDescriptorOutputValue}
     * @memberof FunctionDescriptor
     */
    outputValue: FunctionDescriptorOutputValue;
}

/**
 * Check if a given object implements the FunctionDescriptor interface.
 */
export function instanceOfFunctionDescriptor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "vendor" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "parameters" in value;
    isInstance = isInstance && "outputValue" in value;

    return isInstance;
}

export function FunctionDescriptorFromJSON(json: any): FunctionDescriptor {
    return FunctionDescriptorFromJSONTyped(json, false);
}

export function FunctionDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'vendor': json['vendor'],
        'version': json['version'],
        'parameters': (mapValues(json['parameters'], ParameterDescriptorFromJSON)),
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'outputValue': FunctionDescriptorOutputValueFromJSON(json['outputValue']),
    };
}

export function FunctionDescriptorToJSON(value?: FunctionDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'vendor': value.vendor,
        'version': value.version,
        'parameters': (mapValues(value.parameters, ParameterDescriptorToJSON)),
        'documentation': value.documentation,
        'outputValue': FunctionDescriptorOutputValueToJSON(value.outputValue),
    };
}

