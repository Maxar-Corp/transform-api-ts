import type { ImageBands } from './ImageBands';
import type { Histogram } from './Histogram';
import type { ImageMetadata } from './ImageMetadata';
import type { ImageStatistics } from './ImageStatistics';
import type { SourceMetadata } from './SourceMetadata';
import type { SpatialTransform } from './SpatialTransform';
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
    imageMetadata?: ImageMetadata;
    /**
     *
     * @type {SpatialTransform}
     * @memberof UnifiedMetadata
     */
    spatialTransform?: SpatialTransform;
    /**
     *
     * @type {SourceMetadata}
     * @memberof UnifiedMetadata
     */
    sourceMetadata?: SourceMetadata;
    /**
     *
     * @type {ImageBands}
     * @memberof UnifiedMetadata
     */
    bands?: ImageBands;
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
export declare function instanceOfUnifiedMetadata(value: object): boolean;
export declare function UnifiedMetadataFromJSON(json: any): UnifiedMetadata;
export declare function UnifiedMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedMetadata;
export declare function UnifiedMetadataToJSON(value?: UnifiedMetadata | null): any;
