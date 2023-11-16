/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface StatusType
 */
export interface StatusType {
    /**
     * 
     * @type {number}
     * @memberof StatusType
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof StatusType
     */
    reasonPhrase?: string;
}

/**
 * Check if a given object implements the StatusType interface.
 */
export function instanceOfStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatusTypeFromJSON(json: any): StatusType {
    return StatusTypeFromJSONTyped(json, false);
}

export function StatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'reasonPhrase': !exists(json, 'reasonPhrase') ? undefined : json['reasonPhrase'],
    };
}

export function StatusTypeToJSON(value?: StatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'reasonPhrase': value.reasonPhrase,
    };
}

