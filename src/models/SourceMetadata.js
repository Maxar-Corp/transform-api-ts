"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMetadataToJSON = exports.SourceMetadataFromJSONTyped = exports.SourceMetadataFromJSON = exports.instanceOfSourceMetadata = void 0;
const runtime_1 = require("../runtime");
const AcquisitionScanDirection_1 = require("./AcquisitionScanDirection");
const CollectBandMetadata_1 = require("./CollectBandMetadata");
const CollectBandsetMetadata_1 = require("./CollectBandsetMetadata");
const RangedValue_1 = require("./RangedValue");
const VehicleName_1 = require("./VehicleName");
/**
 * Check if a given object implements the SourceMetadata interface.
 */
function instanceOfSourceMetadata(value) {
    let isInstance = true;
    isInstance = isInstance && "imageBoundsWGS84" in value;
    return isInstance;
}
exports.instanceOfSourceMetadata = instanceOfSourceMetadata;
function SourceMetadataFromJSON(json) {
    return SourceMetadataFromJSONTyped(json, false);
}
exports.SourceMetadataFromJSON = SourceMetadataFromJSON;
function SourceMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collectId': !(0, runtime_1.exists)(json, 'collectId') ? undefined : json['collectId'],
        'imageBoundsWGS84': json['imageBoundsWGS84'],
        'vehicleName': !(0, runtime_1.exists)(json, 'vehicleName') ? undefined : (0, VehicleName_1.VehicleNameFromJSON)(json['vehicleName']),
        'vendorName': !(0, runtime_1.exists)(json, 'vendorName') ? undefined : json['vendorName'],
        'vendorDatasetIdentifier': !(0, runtime_1.exists)(json, 'vendorDatasetIdentifier') ? undefined : json['vendorDatasetIdentifier'],
        'firstLineTime': !(0, runtime_1.exists)(json, 'firstLineTime') ? undefined : json['firstLineTime'],
        'scanDirection': !(0, runtime_1.exists)(json, 'scanDirection') ? undefined : (0, AcquisitionScanDirection_1.AcquisitionScanDirectionFromJSON)(json['scanDirection']),
        'dsaOrderMirrorFlag': !(0, runtime_1.exists)(json, 'dsaOrderMirrorFlag') ? undefined : json['dsaOrderMirrorFlag'],
        'theoreticalLowDN': !(0, runtime_1.exists)(json, 'theoreticalLowDN') ? undefined : json['theoreticalLowDN'],
        'theoreticalHighDN': !(0, runtime_1.exists)(json, 'theoreticalHighDN') ? undefined : json['theoreticalHighDN'],
        'sunAzimuth': !(0, runtime_1.exists)(json, 'sunAzimuth') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['sunAzimuth']),
        'sunElevation': !(0, runtime_1.exists)(json, 'sunElevation') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['sunElevation']),
        'satelliteAzimuth': !(0, runtime_1.exists)(json, 'satelliteAzimuth') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['satelliteAzimuth']),
        'targetAzimuth': !(0, runtime_1.exists)(json, 'targetAzimuth') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['targetAzimuth']),
        'satelliteElevation': !(0, runtime_1.exists)(json, 'satelliteElevation') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['satelliteElevation']),
        'offNadirAngle': !(0, runtime_1.exists)(json, 'offNadirAngle') ? undefined : (0, RangedValue_1.RangedValueFromJSON)(json['offNadirAngle']),
        'cloudCover': !(0, runtime_1.exists)(json, 'cloudCover') ? undefined : json['cloudCover'],
        'bandMetadata': !(0, runtime_1.exists)(json, 'bandMetadata') ? undefined : ((0, runtime_1.mapValues)(json['bandMetadata'], CollectBandMetadata_1.CollectBandMetadataFromJSON)),
        'bandsetMetadata': !(0, runtime_1.exists)(json, 'bandsetMetadata') ? undefined : ((0, runtime_1.mapValues)(json['bandsetMetadata'], CollectBandsetMetadata_1.CollectBandsetMetadataFromJSON)),
    };
}
exports.SourceMetadataFromJSONTyped = SourceMetadataFromJSONTyped;
function SourceMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collectId': value.collectId,
        'imageBoundsWGS84': value.imageBoundsWGS84,
        'vehicleName': (0, VehicleName_1.VehicleNameToJSON)(value.vehicleName),
        'vendorName': value.vendorName,
        'vendorDatasetIdentifier': value.vendorDatasetIdentifier,
        'firstLineTime': value.firstLineTime,
        'scanDirection': (0, AcquisitionScanDirection_1.AcquisitionScanDirectionToJSON)(value.scanDirection),
        'dsaOrderMirrorFlag': value.dsaOrderMirrorFlag,
        'theoreticalLowDN': value.theoreticalLowDN,
        'theoreticalHighDN': value.theoreticalHighDN,
        'sunAzimuth': (0, RangedValue_1.RangedValueToJSON)(value.sunAzimuth),
        'sunElevation': (0, RangedValue_1.RangedValueToJSON)(value.sunElevation),
        'satelliteAzimuth': (0, RangedValue_1.RangedValueToJSON)(value.satelliteAzimuth),
        'targetAzimuth': (0, RangedValue_1.RangedValueToJSON)(value.targetAzimuth),
        'satelliteElevation': (0, RangedValue_1.RangedValueToJSON)(value.satelliteElevation),
        'offNadirAngle': (0, RangedValue_1.RangedValueToJSON)(value.offNadirAngle),
        'cloudCover': value.cloudCover,
        'bandMetadata': value.bandMetadata === undefined ? undefined : ((0, runtime_1.mapValues)(value.bandMetadata, CollectBandMetadata_1.CollectBandMetadataToJSON)),
        'bandsetMetadata': value.bandsetMetadata === undefined ? undefined : ((0, runtime_1.mapValues)(value.bandsetMetadata, CollectBandsetMetadata_1.CollectBandsetMetadataToJSON)),
    };
}
exports.SourceMetadataToJSON = SourceMetadataToJSON;
//# sourceMappingURL=SourceMetadata.js.map