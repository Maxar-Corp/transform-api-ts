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
 * @interface CollectMetadata
 */
export interface CollectMetadata {
    /**
     * 
     * @type {string}
     * @memberof CollectMetadata
     */
    collectId?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectMetadata
     */
    imageBoundsWGS84: string;
    /**
     * 
     * @type {VehicleName}
     * @memberof CollectMetadata
     */
    vehicleName?: VehicleName;
    /**
     * 
     * @type {string}
     * @memberof CollectMetadata
     */
    vendorName?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectMetadata
     */
    vendorDatasetIdentifier?: string;
    /**
     * 
     * @type {string}
     * @memberof CollectMetadata
     */
    firstLineTime?: string;
    /**
     * 
     * @type {AcquisitionScanDirection}
     * @memberof CollectMetadata
     */
    scanDirection?: AcquisitionScanDirection;
    /**
     * 
     * @type {boolean}
     * @memberof CollectMetadata
     */
    dsaOrderMirrorFlag?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CollectMetadata
     */
    theoreticalLowDN?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectMetadata
     */
    theoreticalHighDN?: number;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    sunAzimuth?: RangedValue;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    sunElevation?: RangedValue;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    satelliteAzimuth?: RangedValue;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    targetAzimuth?: RangedValue;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    satelliteElevation?: RangedValue;
    /**
     * 
     * @type {RangedValue}
     * @memberof CollectMetadata
     */
    offNadirAngle?: RangedValue;
    /**
     * 
     * @type {number}
     * @memberof CollectMetadata
     */
    cloudCover?: number;
    /**
     * 
     * @type {{ [key: string]: CollectBandMetadata; }}
     * @memberof CollectMetadata
     */
    bandMetadata?: { [key: string]: CollectBandMetadata; };
    /**
     * 
     * @type {{ [key: string]: CollectBandsetMetadata; }}
     * @memberof CollectMetadata
     */
    bandsetMetadata?: { [key: string]: CollectBandsetMetadata; };
}

/**
 * Check if a given object implements the CollectMetadata interface.
 */
export function instanceOfCollectMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageBoundsWGS84" in value;

    return isInstance;
}

export function CollectMetadataFromJSON(json: any): CollectMetadata {
    return CollectMetadataFromJSONTyped(json, false);
}

export function CollectMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectMetadata {
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

export function CollectMetadataToJSON(value?: CollectMetadata | null): any {
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

