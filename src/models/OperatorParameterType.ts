/* tslint:disable */
/* eslint-disable */

import { exists } from '../runtime.js';
/**
 * 
 * @export
 * @interface OperatorParameterType
 */
export interface OperatorParameterType {
    /**
     * The name of the type.
     * @type {string}
     * @memberof OperatorParameterType
     */
    name?: string;
    /**
     * A description of the type.
     * @type {string}
     * @memberof OperatorParameterType
     */
    description?: string;
    /**
     * The JSONSchema for the type
     * @type {{ [key: string]: any; }}
     * @memberof OperatorParameterType
     */
    schema?: { [key: string]: any; };
}

/**
 * Check if a given object implements the OperatorParameterType interface.
 */
export function instanceOfOperatorParameterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OperatorParameterTypeFromJSON(json: any): OperatorParameterType {
    return OperatorParameterTypeFromJSONTyped(json, false);
}

export function OperatorParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperatorParameterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
    };
}

export function OperatorParameterTypeToJSON(value?: OperatorParameterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'schema': value.schema,
    };
}

