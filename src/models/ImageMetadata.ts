/* tslint:disable */
/* eslint-disable */

import type { SampleDataType } from './SampleDataType.js';
import {
    SampleDataTypeFromJSON,
    SampleDataTypeFromJSONTyped,
    SampleDataTypeToJSON,
} from './SampleDataType.js';

/**
 * 
 * @export
 * @interface ImageMetadata
 */
export interface ImageMetadata {
    /**
     * ImageMetadata Version
     * @type {string}
     * @memberof ImageMetadata
     */
    version: string;
    /**
     * X Index of the first tile
     * @type {number}
     * @memberof ImageMetadata
     */
    minTileX: number;
    /**
     * Y Index of the first tile
     * @type {number}
     * @memberof ImageMetadata
     */
    minTileY: number;
    /**
     * Exclusive x Index of the last tile. (numTilesX=maxTileX-minTileX)
     * @type {number}
     * @memberof ImageMetadata
     */
    maxTileX: number;
    /**
     * Exclusive y Index of the last tile. (numTilesY=maxTileY-minTileY)
     * @type {number}
     * @memberof ImageMetadata
     */
    maxTileY: number;
    /**
     * Number of pixels per tile in the X dimension
     * @type {number}
     * @memberof ImageMetadata
     */
    tileSizeX: number;
    /**
     * Number of pixels per tile in the Y dimension
     * @type {number}
     * @memberof ImageMetadata
     */
    tileSizeY: number;
    /**
     * Number of bands/layers in the image
     * @type {number}
     * @memberof ImageMetadata
     */
    numBands: number;
    /**
     * 
     * @type {SampleDataType}
     * @memberof ImageMetadata
     */
    dataType: SampleDataType;
    /**
     * X Index of the first pixel
     * @type {number}
     * @memberof ImageMetadata
     */
    minPixelX: number;
    /**
     * Y Index of the first pixel
     * @type {number}
     * @memberof ImageMetadata
     */
    minPixelY: number;
    /**
     * Exclusive x index of the last pixel.  (width=maxPixelX-minPixelX)
     * @type {number}
     * @memberof ImageMetadata
     */
    maxPixelX: number;
    /**
     * Exclusive y Index of the last pixel. (height=maxPixelY-minPixelY)
     * @type {number}
     * @memberof ImageMetadata
     */
    maxPixelY: number;
    /**
     * The pixel X index of the first pixel in the first tile.
     * @type {number}
     * @memberof ImageMetadata
     */
    tileOffsetX: number;
    /**
     * The pixel Y index of the first pixel in the first tile.
     * @type {number}
     * @memberof ImageMetadata
     */
    tileOffsetY: number;
}

/**
 * Check if a given object implements the ImageMetadata interface.
 */
export function instanceOfImageMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "minTileX" in value;
    isInstance = isInstance && "minTileY" in value;
    isInstance = isInstance && "maxTileX" in value;
    isInstance = isInstance && "maxTileY" in value;
    isInstance = isInstance && "tileSizeX" in value;
    isInstance = isInstance && "tileSizeY" in value;
    isInstance = isInstance && "numBands" in value;
    isInstance = isInstance && "dataType" in value;
    isInstance = isInstance && "minPixelX" in value;
    isInstance = isInstance && "minPixelY" in value;
    isInstance = isInstance && "maxPixelX" in value;
    isInstance = isInstance && "maxPixelY" in value;
    isInstance = isInstance && "tileOffsetX" in value;
    isInstance = isInstance && "tileOffsetY" in value;

    return isInstance;
}

export function ImageMetadataFromJSON(json: any): ImageMetadata {
    return ImageMetadataFromJSONTyped(json, false);
}

export function ImageMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'minTileX': json['minTileX'],
        'minTileY': json['minTileY'],
        'maxTileX': json['maxTileX'],
        'maxTileY': json['maxTileY'],
        'tileSizeX': json['tileSizeX'],
        'tileSizeY': json['tileSizeY'],
        'numBands': json['numBands'],
        'dataType': SampleDataTypeFromJSON(json['dataType']),
        'minPixelX': json['minPixelX'],
        'minPixelY': json['minPixelY'],
        'maxPixelX': json['maxPixelX'],
        'maxPixelY': json['maxPixelY'],
        'tileOffsetX': json['tileOffsetX'],
        'tileOffsetY': json['tileOffsetY'],
    };
}

export function ImageMetadataToJSON(value?: ImageMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'minTileX': value.minTileX,
        'minTileY': value.minTileY,
        'maxTileX': value.maxTileX,
        'maxTileY': value.maxTileY,
        'tileSizeX': value.tileSizeX,
        'tileSizeY': value.tileSizeY,
        'numBands': value.numBands,
        'dataType': SampleDataTypeToJSON(value.dataType),
        'minPixelX': value.minPixelX,
        'minPixelY': value.minPixelY,
        'maxPixelX': value.maxPixelX,
        'maxPixelY': value.maxPixelY,
        'tileOffsetX': value.tileOffsetX,
        'tileOffsetY': value.tileOffsetY,
    };
}

