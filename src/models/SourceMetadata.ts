/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
import type { AcquisitionScanDirection } from './AcquisitionScanDirection.js';
import {
    AcquisitionScanDirectionFromJSON,
    AcquisitionScanDirectionFromJSONTyped,
    AcquisitionScanDirectionToJSON,
} from './AcquisitionScanDirection.js';
import type { CollectBandMetadata } from './CollectBandMetadata.js';
import {
    CollectBandMetadataFromJSON,
    CollectBandMetadataFromJSONTyped,
    CollectBandMetadataToJSON,
} from './CollectBandMetadata.js';
import type { CollectBandsetMetadata } from './CollectBandsetMetadata.js';
import {
    CollectBandsetMetadataFromJSON,
    CollectBandsetMetadataFromJSONTyped,
    CollectBandsetMetadataToJSON,
} from './CollectBandsetMetadata.js';
import type { RangedValue } from './RangedValue.js';
import {
    RangedValueFromJSON,
    RangedValueFromJSONTyped,
    RangedValueToJSON,
} from './RangedValue.js';
import type { VehicleName } from './VehicleName.js';
import {
    VehicleNameFromJSON,
    VehicleNameFromJSONTyped,
    VehicleNameToJSON,
} from './VehicleName.js';

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
    bandMetadata?: { [key: string]: CollectBandMetadata; };
    /**
     * 
     * @type {{ [key: string]: CollectBandsetMetadata; }}
     * @memberof SourceMetadata
     */
    bandsetMetadata?: { [key: string]: CollectBandsetMetadata; };
}

/**
 * Check if a given object implements the SourceMetadata interface.
 */
export function instanceOfSourceMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageBoundsWGS84" in value;

    return isInstance;
}

export function SourceMetadataFromJSON(json: any): SourceMetadata {
    return SourceMetadataFromJSONTyped(json, false);
}

export function SourceMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'collectId': !exists(json, 'collectId') ? undefined : json['collectId'],
        'imageBoundsWGS84': json['imageBoundsWGS84'],
        'vehicleName': !exists(json, 'vehicleName') ? undefined : VehicleNameFromJSON(json['vehicleName']),
        'vendorName': !exists(json, 'vendorName') ? undefined : json['vendorName'],
        'vendorDatasetIdentifier': !exists(json, 'vendorDatasetIdentifier') ? undefined : json['vendorDatasetIdentifier'],
        'firstLineTime': !exists(json, 'firstLineTime') ? undefined : json['firstLineTime'],
        'scanDirection': !exists(json, 'scanDirection') ? undefined : AcquisitionScanDirectionFromJSON(json['scanDirection']),
        'dsaOrderMirrorFlag': !exists(json, 'dsaOrderMirrorFlag') ? undefined : json['dsaOrderMirrorFlag'],
        'theoreticalLowDN': !exists(json, 'theoreticalLowDN') ? undefined : json['theoreticalLowDN'],
        'theoreticalHighDN': !exists(json, 'theoreticalHighDN') ? undefined : json['theoreticalHighDN'],
        'sunAzimuth': !exists(json, 'sunAzimuth') ? undefined : RangedValueFromJSON(json['sunAzimuth']),
        'sunElevation': !exists(json, 'sunElevation') ? undefined : RangedValueFromJSON(json['sunElevation']),
        'satelliteAzimuth': !exists(json, 'satelliteAzimuth') ? undefined : RangedValueFromJSON(json['satelliteAzimuth']),
        'targetAzimuth': !exists(json, 'targetAzimuth') ? undefined : RangedValueFromJSON(json['targetAzimuth']),
        'satelliteElevation': !exists(json, 'satelliteElevation') ? undefined : RangedValueFromJSON(json['satelliteElevation']),
        'offNadirAngle': !exists(json, 'offNadirAngle') ? undefined : RangedValueFromJSON(json['offNadirAngle']),
        'cloudCover': !exists(json, 'cloudCover') ? undefined : json['cloudCover'],
        'bandMetadata': !exists(json, 'bandMetadata') ? undefined : (mapValues(json['bandMetadata'], CollectBandMetadataFromJSON)),
        'bandsetMetadata': !exists(json, 'bandsetMetadata') ? undefined : (mapValues(json['bandsetMetadata'], CollectBandsetMetadataFromJSON)),
    };
}

export function SourceMetadataToJSON(value?: SourceMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'collectId': value.collectId,
        'imageBoundsWGS84': value.imageBoundsWGS84,
        'vehicleName': VehicleNameToJSON(value.vehicleName),
        'vendorName': value.vendorName,
        'vendorDatasetIdentifier': value.vendorDatasetIdentifier,
        'firstLineTime': value.firstLineTime,
        'scanDirection': AcquisitionScanDirectionToJSON(value.scanDirection),
        'dsaOrderMirrorFlag': value.dsaOrderMirrorFlag,
        'theoreticalLowDN': value.theoreticalLowDN,
        'theoreticalHighDN': value.theoreticalHighDN,
        'sunAzimuth': RangedValueToJSON(value.sunAzimuth),
        'sunElevation': RangedValueToJSON(value.sunElevation),
        'satelliteAzimuth': RangedValueToJSON(value.satelliteAzimuth),
        'targetAzimuth': RangedValueToJSON(value.targetAzimuth),
        'satelliteElevation': RangedValueToJSON(value.satelliteElevation),
        'offNadirAngle': RangedValueToJSON(value.offNadirAngle),
        'cloudCover': value.cloudCover,
        'bandMetadata': value.bandMetadata === undefined ? undefined : (mapValues(value.bandMetadata, CollectBandMetadataToJSON)),
        'bandsetMetadata': value.bandsetMetadata === undefined ? undefined : (mapValues(value.bandsetMetadata, CollectBandsetMetadataToJSON)),
    };
}

