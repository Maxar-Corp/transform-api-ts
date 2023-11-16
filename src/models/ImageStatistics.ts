/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
import type { ImageStatisticsRecord } from './ImageStatisticsRecord.js';
import {
    ImageStatisticsRecordFromJSON,
    ImageStatisticsRecordFromJSONTyped,
    ImageStatisticsRecordToJSON,
} from './ImageStatisticsRecord.js';

/**
 * 
 * @export
 * @interface ImageStatistics
 */
export interface ImageStatistics {
    /**
     * per band image statistics
     * @type {{ [key: string]: ImageStatisticsRecord; }}
     * @memberof ImageStatistics
     */
    statistics?: { [key: string]: ImageStatisticsRecord; };
}

/**
 * Check if a given object implements the ImageStatistics interface.
 */
export function instanceOfImageStatistics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageStatisticsFromJSON(json: any): ImageStatistics {
    return ImageStatisticsFromJSONTyped(json, false);
}

export function ImageStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statistics': !exists(json, 'statistics') ? undefined : (mapValues(json['statistics'], ImageStatisticsRecordFromJSON)),
    };
}

export function ImageStatisticsToJSON(value?: ImageStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statistics': value.statistics === undefined ? undefined : (mapValues(value.statistics, ImageStatisticsRecordToJSON)),
    };
}

