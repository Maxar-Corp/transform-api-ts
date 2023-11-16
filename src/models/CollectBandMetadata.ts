/* tslint:disable */
/* eslint-disable */


import { exists } from '../runtime.js';
import type { ImageBand } from './ImageBand.js';
import {
    ImageBandFromJSON,
    ImageBandFromJSONTyped,
    ImageBandToJSON,
} from './ImageBand.js';

/**
 * 
 * @export
 * @interface CollectBandMetadata
 */
export interface CollectBandMetadata {
    /**
     * 
     * @type {number}
     * @memberof CollectBandMetadata
     */
    absoluteCalibrationFactor?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandMetadata
     */
    effectiveBandwidth?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandMetadata
     */
    spectralMidpoint?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandMetadata
     */
    tdiLevel?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandMetadata
     */
    noDataValue?: number;
    /**
     * 
     * @type {ImageBand}
     * @memberof CollectBandMetadata
     */
    bandAlias?: ImageBand;
}

/**
 * Check if a given object implements the CollectBandMetadata interface.
 */
export function instanceOfCollectBandMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectBandMetadataFromJSON(json: any): CollectBandMetadata {
    return CollectBandMetadataFromJSONTyped(json, false);
}

export function CollectBandMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectBandMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'absoluteCalibrationFactor': !exists(json, 'absoluteCalibrationFactor') ? undefined : json['absoluteCalibrationFactor'],
        'effectiveBandwidth': !exists(json, 'effectiveBandwidth') ? undefined : json['effectiveBandwidth'],
        'spectralMidpoint': !exists(json, 'spectralMidpoint') ? undefined : json['spectralMidpoint'],
        'tdiLevel': !exists(json, 'tdiLevel') ? undefined : json['tdiLevel'],
        'noDataValue': !exists(json, 'noDataValue') ? undefined : json['noDataValue'],
        'bandAlias': !exists(json, 'bandAlias') ? undefined : ImageBandFromJSON(json['bandAlias']),
    };
}

export function CollectBandMetadataToJSON(value?: CollectBandMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'absoluteCalibrationFactor': value.absoluteCalibrationFactor,
        'effectiveBandwidth': value.effectiveBandwidth,
        'spectralMidpoint': value.spectralMidpoint,
        'tdiLevel': value.tdiLevel,
        'noDataValue': value.noDataValue,
        'bandAlias': ImageBandToJSON(value.bandAlias),
    };
}

