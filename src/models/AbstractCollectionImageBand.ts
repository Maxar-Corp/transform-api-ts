/* tslint:disable */
/* eslint-disable */

import { exists} from '../runtime.js';
/**
 * 
 * @export
 * @interface AbstractCollectionImageBand
 */
export interface AbstractCollectionImageBand {
    /**
     * 
     * @type {boolean}
     * @memberof AbstractCollectionImageBand
     */
    empty?: boolean;
}

/**
 * Check if a given object implements the AbstractCollectionImageBand interface.
 */
export function instanceOfAbstractCollectionImageBand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AbstractCollectionImageBandFromJSON(json: any): AbstractCollectionImageBand {
    return AbstractCollectionImageBandFromJSONTyped(json, false);
}

export function AbstractCollectionImageBandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractCollectionImageBand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
    };
}

export function AbstractCollectionImageBandToJSON(value?: AbstractCollectionImageBand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empty': value.empty,
    };
}

