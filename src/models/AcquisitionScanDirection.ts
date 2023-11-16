/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 */
export const AcquisitionScanDirection = {
    Forward: 'Forward',
    Reverse: 'Reverse'
} as const;
export type AcquisitionScanDirection = typeof AcquisitionScanDirection[keyof typeof AcquisitionScanDirection];


export function AcquisitionScanDirectionFromJSON(json: any): AcquisitionScanDirection {
    return AcquisitionScanDirectionFromJSONTyped(json, false);
}

export function AcquisitionScanDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcquisitionScanDirection {
    return json as AcquisitionScanDirection;
}

export function AcquisitionScanDirectionToJSON(value?: AcquisitionScanDirection | null): any {
    return value as any;
}

