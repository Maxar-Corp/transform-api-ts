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
import type { StatusType } from './StatusType';
/**
 *
 * @export
 * @interface TransformProblem
 */
export interface TransformProblem {
    /**
     *
     * @type {string}
     * @memberof TransformProblem
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof TransformProblem
     */
    title: string;
    /**
     *
     * @type {StatusType}
     * @memberof TransformProblem
     */
    status: StatusType;
    /**
     *
     * @type {string}
     * @memberof TransformProblem
     */
    detail: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof TransformProblem
     */
    parameters: {
        [key: string]: any;
    };
}
/**
 * Check if a given object implements the TransformProblem interface.
 */
export declare function instanceOfTransformProblem(value: object): boolean;
export declare function TransformProblemFromJSON(json: any): TransformProblem;
export declare function TransformProblemFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformProblem;
export declare function TransformProblemToJSON(value?: TransformProblem | null): any;
