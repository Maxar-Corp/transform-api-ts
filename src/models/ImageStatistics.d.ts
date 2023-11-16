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
import type { ImageStatisticsRecord } from './ImageStatisticsRecord';
/**
 *
 * @export
 * @interface ImageStatistics
 */
export interface ImageStatistics {
    /**
     * per band image statistics
     * @type {{ [key: string]: ImageStatisticsRecord; }}
     * @memberof ImageStatistics
     */
    statistics?: {
        [key: string]: ImageStatisticsRecord;
    };
}
/**
 * Check if a given object implements the ImageStatistics interface.
 */
export declare function instanceOfImageStatistics(value: object): boolean;
export declare function ImageStatisticsFromJSON(json: any): ImageStatistics;
export declare function ImageStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageStatistics;
export declare function ImageStatisticsToJSON(value?: ImageStatistics | null): any;