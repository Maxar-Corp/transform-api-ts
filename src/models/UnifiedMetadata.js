"use strict";
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnifiedMetadataToJSON = exports.UnifiedMetadataFromJSONTyped = exports.UnifiedMetadataFromJSON = exports.instanceOfUnifiedMetadata = void 0;
const runtime_1 = require("../runtime");
const ImageBands_1 = require("./ImageBands");
const Histogram_1 = require("./Histogram");
const ImageMetadata_1 = require("./ImageMetadata");
const ImageStatistics_1 = require("./ImageStatistics");
const SourceMetadata_1 = require("./SourceMetadata");
const SpatialTransform_1 = require("./SpatialTransform");
/**
 * Check if a given object implements the UnifiedMetadata interface.
 */
function instanceOfUnifiedMetadata(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUnifiedMetadata = instanceOfUnifiedMetadata;
function UnifiedMetadataFromJSON(json) {
    return UnifiedMetadataFromJSONTyped(json, false);
}
exports.UnifiedMetadataFromJSON = UnifiedMetadataFromJSON;
function UnifiedMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'imageMetadata': !(0, runtime_1.exists)(json, 'imageMetadata') ? undefined : (0, ImageMetadata_1.ImageMetadataFromJSON)(json['imageMetadata']),
        'spatialTransform': !(0, runtime_1.exists)(json, 'spatialTransform') ? undefined : (0, SpatialTransform_1.SpatialTransformFromJSON)(json['spatialTransform']),
        'sourceMetadata': !(0, runtime_1.exists)(json, 'sourceMetadata') ? undefined : (0, SourceMetadata_1.SourceMetadataFromJSON)(json['sourceMetadata']),
        'bands': !(0, runtime_1.exists)(json, 'bands') ? undefined : (0, ImageBands_1.ImageBandsFromJSON)(json['bands']),
        'histogram': !(0, runtime_1.exists)(json, 'histogram') ? undefined : (0, Histogram_1.HistogramFromJSON)(json['histogram']),
        'imageStatistics': !(0, runtime_1.exists)(json, 'imageStatistics') ? undefined : (0, ImageStatistics_1.ImageStatisticsFromJSON)(json['imageStatistics']),
    };
}
exports.UnifiedMetadataFromJSONTyped = UnifiedMetadataFromJSONTyped;
function UnifiedMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'imageMetadata': (0, ImageMetadata_1.ImageMetadataToJSON)(value.imageMetadata),
        'spatialTransform': (0, SpatialTransform_1.SpatialTransformToJSON)(value.spatialTransform),
        'sourceMetadata': (0, SourceMetadata_1.SourceMetadataToJSON)(value.sourceMetadata),
        'bands': (0, ImageBands_1.ImageBandsToJSON)(value.bands),
        'histogram': (0, Histogram_1.HistogramToJSON)(value.histogram),
        'imageStatistics': (0, ImageStatistics_1.ImageStatisticsToJSON)(value.imageStatistics),
    };
}
exports.UnifiedMetadataToJSON = UnifiedMetadataToJSON;
//# sourceMappingURL=UnifiedMetadata.js.map