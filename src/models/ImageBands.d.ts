import type { ImageBand } from './ImageBand';
/**
 *
 * @export
 * @interface ImageBands
 */
export interface ImageBands extends Array<ImageBand> {
}
export declare function ImageBandsFromJSON(json: any): ImageBands;
export declare function ImageBandsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBands;
export declare function ImageBandsToJSON(value?: ImageBands | null): any;
