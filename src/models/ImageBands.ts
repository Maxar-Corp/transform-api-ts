/* tslint:disable */
/* eslint-disable */

import type { ImageBand } from './ImageBand.js';

/**
 * 
 * @export
 * @interface ImageBands
 */
export interface ImageBands extends Array<ImageBand>{}

export function ImageBandsFromJSON(json: any): ImageBands {
    return ImageBandsFromJSONTyped(json, false);
}

export function ImageBandsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBands {
    return json as ImageBands;
}

export function ImageBandsToJSON(value?: ImageBands | null): any {
    return value as any;
}