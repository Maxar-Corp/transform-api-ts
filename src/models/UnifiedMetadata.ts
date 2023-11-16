/* tslint:disable */
/* eslint-disable */


import { exists } from '../runtime.js';
import type { ImageBands } from './ImageBands.js';
import {
    ImageBandsFromJSON,
    ImageBandsFromJSONTyped,
    ImageBandsToJSON,
} from './ImageBands.js';
import type { Histogram } from './Histogram.js';
import {
    HistogramFromJSON,
    HistogramFromJSONTyped,
    HistogramToJSON,
} from './Histogram.js';
import type { ImageMetadata } from './ImageMetadata.js';
import {
    ImageMetadataFromJSON,
    ImageMetadataFromJSONTyped,
    ImageMetadataToJSON,
} from './ImageMetadata.js';
import type { ImageStatistics } from './ImageStatistics.js';
import {
    ImageStatisticsFromJSON,
    ImageStatisticsFromJSONTyped,
    ImageStatisticsToJSON,
} from './ImageStatistics.js';
import type { SourceMetadata } from './SourceMetadata.js';
import {
    SourceMetadataFromJSON,
    SourceMetadataFromJSONTyped,
    SourceMetadataToJSON,
} from './SourceMetadata.js';
import type { SpatialTransform } from './SpatialTransform.js';
import {
    SpatialTransformFromJSON,
    SpatialTransformFromJSONTyped,
    SpatialTransformToJSON,
} from './SpatialTransform.js';

/**
 * A unified metadata object containing all known metadata for an image.
 * @export
 * @interface UnifiedMetadata
 */
export interface UnifiedMetadata {
    /**
     * 
     * @type {ImageMetadata}
     * @memberof UnifiedMetadata
     */
    imageMetadata: ImageMetadata;
    /**
     * 
     * @type {SpatialTransform}
     * @memberof UnifiedMetadata
     */
    spatialTransform: SpatialTransform;
    /**
     * 
     * @type {SourceMetadata}
     * @memberof UnifiedMetadata
     */
    sourceMetadata: SourceMetadata;
    /**
     * 
     * @type {ImageBands}
     * @memberof UnifiedMetadata
     */
    bands: ImageBands;
    /**
     * 
     * @type {Histogram}
     * @memberof UnifiedMetadata
     */
    histogram?: Histogram;
    /**
     * 
     * @type {ImageStatistics}
     * @memberof UnifiedMetadata
     */
    imageStatistics?: ImageStatistics;
}

/**
 * Check if a given object implements the UnifiedMetadata interface.
 */
export function instanceOfUnifiedMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UnifiedMetadataFromJSON(json: any): UnifiedMetadata {
    return UnifiedMetadataFromJSONTyped(json, false);
}

export function UnifiedMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageMetadata': ImageMetadataFromJSON(json['imageMetadata']),
        'spatialTransform': SpatialTransformFromJSON(json['spatialTransform']),
        'sourceMetadata':  SourceMetadataFromJSON(json['sourceMetadata']),
        'bands': ImageBandsFromJSON(json['bands']),
        'histogram': !exists(json, 'histogram') ? undefined : HistogramFromJSON(json['histogram']),
        'imageStatistics': !exists(json, 'imageStatistics') ? undefined : ImageStatisticsFromJSON(json['imageStatistics']),
    };
}

export function UnifiedMetadataToJSON(value?: UnifiedMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageMetadata': ImageMetadataToJSON(value.imageMetadata),
        'spatialTransform': SpatialTransformToJSON(value.spatialTransform),
        'sourceMetadata': SourceMetadataToJSON(value.sourceMetadata),
        'bands': ImageBandsToJSON(value.bands),
        'histogram': HistogramToJSON(value.histogram),
        'imageStatistics': ImageStatisticsToJSON(value.imageStatistics),
    };
}

