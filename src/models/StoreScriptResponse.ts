/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface StoreScriptResponse
 */
export interface StoreScriptResponse {
    /**
     * The id of the script.
     * @type {string}
     * @memberof StoreScriptResponse
     */
    id: string;
}

/**
 * Check if a given object implements the StoreScriptResponse interface.
 */
export function instanceOfStoreScriptResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function StoreScriptResponseFromJSON(json: any): StoreScriptResponse {
    return StoreScriptResponseFromJSONTyped(json, false);
}

export function StoreScriptResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreScriptResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function StoreScriptResponseToJSON(value?: StoreScriptResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

