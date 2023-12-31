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
 */
export declare const SampleDataType: {
    readonly Binary: "BINARY";
    readonly Byte: "BYTE";
    readonly Short: "SHORT";
    readonly UnsignedShort: "UNSIGNED_SHORT";
    readonly Integer: "INTEGER";
    readonly UnsignedInteger: "UNSIGNED_INTEGER";
    readonly Long: "LONG";
    readonly UnsignedLong: "UNSIGNED_LONG";
    readonly Float: "FLOAT";
    readonly Double: "DOUBLE";
};
export type SampleDataType = typeof SampleDataType[keyof typeof SampleDataType];
export declare function SampleDataTypeFromJSON(json: any): SampleDataType;
export declare function SampleDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleDataType;
export declare function SampleDataTypeToJSON(value?: SampleDataType | null): any;
