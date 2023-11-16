/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 */
export const SampleDataType = {
    Binary: 'BINARY',
    Byte: 'BYTE',
    Short: 'SHORT',
    UnsignedShort: 'UNSIGNED_SHORT',
    Integer: 'INTEGER',
    UnsignedInteger: 'UNSIGNED_INTEGER',
    Long: 'LONG',
    UnsignedLong: 'UNSIGNED_LONG',
    Float: 'FLOAT',
    Double: 'DOUBLE'
} as const;
export type SampleDataType = typeof SampleDataType[keyof typeof SampleDataType];


export function SampleDataTypeFromJSON(json: any): SampleDataType {
    return SampleDataTypeFromJSONTyped(json, false);
}

export function SampleDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleDataType {
    return json as SampleDataType;
}

export function SampleDataTypeToJSON(value?: SampleDataType | null): any {
    return value as any;
}

