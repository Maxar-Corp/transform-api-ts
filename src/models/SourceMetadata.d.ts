import type { AcquisitionScanDirection } from './AcquisitionScanDirection';
import type { CollectBandMetadata } from './CollectBandMetadata';
import type { CollectBandsetMetadata } from './CollectBandsetMetadata';
import type { RangedValue } from './RangedValue';
import type { VehicleName } from './VehicleName';
/**
 *
 * @export
 * @interface SourceMetadata
 */
export interface SourceMetadata {
    /**
     *
     * @type {string}
     * @memberof SourceMetadata
     */
    collectId?: string;
    /**
     *
     * @type {string}
     * @memberof SourceMetadata
     */
    imageBoundsWGS84: string;
    /**
     *
     * @type {VehicleName}
     * @memberof SourceMetadata
     */
    vehicleName?: VehicleName;
    /**
     *
     * @type {string}
     * @memberof SourceMetadata
     */
    vendorName?: string;
    /**
     *
     * @type {string}
     * @memberof SourceMetadata
     */
    vendorDatasetIdentifier?: string;
    /**
     *
     * @type {string}
     * @memberof SourceMetadata
     */
    firstLineTime?: string;
    /**
     *
     * @type {AcquisitionScanDirection}
     * @memberof SourceMetadata
     */
    scanDirection?: AcquisitionScanDirection;
    /**
     *
     * @type {boolean}
     * @memberof SourceMetadata
     */
    dsaOrderMirrorFlag?: boolean;
    /**
     *
     * @type {number}
     * @memberof SourceMetadata
     */
    theoreticalLowDN?: number;
    /**
     *
     * @type {number}
     * @memberof SourceMetadata
     */
    theoreticalHighDN?: number;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    sunAzimuth?: RangedValue;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    sunElevation?: RangedValue;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    satelliteAzimuth?: RangedValue;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    targetAzimuth?: RangedValue;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    satelliteElevation?: RangedValue;
    /**
     *
     * @type {RangedValue}
     * @memberof SourceMetadata
     */
    offNadirAngle?: RangedValue;
    /**
     *
     * @type {number}
     * @memberof SourceMetadata
     */
    cloudCover?: number;
    /**
     *
     * @type {{ [key: string]: CollectBandMetadata; }}
     * @memberof SourceMetadata
     */
    bandMetadata?: {
        [key: string]: CollectBandMetadata;
    };
    /**
     *
     * @type {{ [key: string]: CollectBandsetMetadata; }}
     * @memberof SourceMetadata
     */
    bandsetMetadata?: {
        [key: string]: CollectBandsetMetadata;
    };
}
/**
 * Check if a given object implements the SourceMetadata interface.
 */
export declare function instanceOfSourceMetadata(value: object): boolean;
export declare function SourceMetadataFromJSON(json: any): SourceMetadata;
export declare function SourceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceMetadata;
export declare function SourceMetadataToJSON(value?: SourceMetadata | null): any;
