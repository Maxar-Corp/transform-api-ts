/**
 * Transform API
 * TODO
 *
 * The version of the OpenAPI document: 1.0
 * Contact: someone@maxar.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BandColorInterpretation } from './BandColorInterpretation';
import type { ImageBand } from './ImageBand';
/**
 *
 * @export
 * @interface CollectBandsetMetadata
 */
export interface CollectBandsetMetadata {
    /**
     *
     * @type {string}
     * @memberof CollectBandsetMetadata
     */
    bandsetName?: string;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numLinesInDsa?: number;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    firstUsableLine?: number;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numUsableLines?: number;
    /**
     *
     * @type {BandColorInterpretation}
     * @memberof CollectBandsetMetadata
     */
    colorInterpretation?: BandColorInterpretation;
    /**
     *
     * @type {Array<ImageBand>}
     * @memberof CollectBandsetMetadata
     */
    bands?: Array<ImageBand>;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numLinesPerSecond?: number;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    groundSampleDistanceMeters?: number;
    /**
     *
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numDSAs?: number;
    /**
     *
     * @type {Array<number>}
     * @memberof CollectBandsetMetadata
     */
    badDSAs?: Array<number>;
}
/**
 * Check if a given object implements the CollectBandsetMetadata interface.
 */
export declare function instanceOfCollectBandsetMetadata(value: object): boolean;
export declare function CollectBandsetMetadataFromJSON(json: any): CollectBandsetMetadata;
export declare function CollectBandsetMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectBandsetMetadata;
export declare function CollectBandsetMetadataToJSON(value?: CollectBandsetMetadata | null): any;