/* tslint:disable */
/* eslint-disable */
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
export const VehicleName = {
    Wv03: 'WV03',
    Wv02: 'WV02',
    Wv01: 'WV01',
    Qb02: 'QB02',
    Ge01: 'GE01',
    Wv04: 'WV04',
    Ik02: 'IK02',
    Lg01: 'LG01',
    Lg02: 'LG02'
} as const;
export type VehicleName = typeof VehicleName[keyof typeof VehicleName];


export function VehicleNameFromJSON(json: any): VehicleName {
    return VehicleNameFromJSONTyped(json, false);
}

export function VehicleNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): VehicleName {
    return json as VehicleName;
}

export function VehicleNameToJSON(value?: VehicleName | null): any {
    return value as any;
}

