/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
import type { HistogramRecord } from './HistogramRecord.js';
import {
    HistogramRecordFromJSON,
    HistogramRecordFromJSONTyped,
    HistogramRecordToJSON,
} from './HistogramRecord.js';
import type { ImageBand } from './ImageBand.js';
import {
    ImageBandFromJSON,
    ImageBandFromJSONTyped,
    ImageBandToJSON,
} from './ImageBand.js';

/**
 * A histogram of a rendered image.
 * @export
 * @interface Histogram
 */
export interface Histogram {
    /**
     * 
     * @type {Array<ImageBand>}
     * @memberof Histogram
     */
    bands?: Array<ImageBand>;
    /**
     * per band histogram values
     * @type {{ [key: string]: HistogramRecord; }}
     * @memberof Histogram
     */
    histograms?: { [key: string]: HistogramRecord; };
}

/**
 * Check if a given object implements the Histogram interface.
 */
export function instanceOfHistogram(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistogramFromJSON(json: any): Histogram {
    return HistogramFromJSONTyped(json, false);
}

export function HistogramFromJSONTyped(json: any, ignoreDiscriminator: boolean): Histogram {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bands': !exists(json, 'bands') ? undefined : ((json['bands'] as Array<any>).map(ImageBandFromJSON)),
        'histograms': !exists(json, 'histograms') ? undefined : (mapValues(json['histograms'], HistogramRecordFromJSON)),
    };
}

export function HistogramToJSON(value?: Histogram | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bands': value.bands === undefined ? undefined : ((value.bands as Array<any>).map(ImageBandToJSON)),
        'histograms': value.histograms === undefined ? undefined : (mapValues(value.histograms, HistogramRecordToJSON)),
    };
}

