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
/**
 *
 * @export
 * @interface OperatorParameterType
 */
export interface OperatorParameterType {
    /**
     * The name of the type.
     * @type {string}
     * @memberof OperatorParameterType
     */
    name?: string;
    /**
     * A description of the type.
     * @type {string}
     * @memberof OperatorParameterType
     */
    description?: string;
    /**
     * The JSONSchema for the type
     * @type {{ [key: string]: any; }}
     * @memberof OperatorParameterType
     */
    schema?: {
        [key: string]: any;
    };
}
/**
 * Check if a given object implements the OperatorParameterType interface.
 */
export declare function instanceOfOperatorParameterType(value: object): boolean;
export declare function OperatorParameterTypeFromJSON(json: any): OperatorParameterType;
export declare function OperatorParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperatorParameterType;
export declare function OperatorParameterTypeToJSON(value?: OperatorParameterType | null): any;
