/* tslint:disable */
/* eslint-disable */

/**
 * Band Color Interpretation
 * @export
 */
export const BandColorInterpretation = {
    Pan: 'PAN',
    PanWithAlpha: 'PAN_WITH_ALPHA',
    Rgb: 'RGB',
    Rgba: 'RGBA',
    Rgbn: 'RGBN',
    Bgr: 'BGR',
    Bgra: 'BGRA',
    Bgrn: 'BGRN',
    Worldview8Band: 'WORLDVIEW_8_BAND',
    WorldviewSwir: 'WORLDVIEW_SWIR',
    Legion8Band: 'LEGION_8_BAND',
    Unspecified: 'UNSPECIFIED'
} as const;
export type BandColorInterpretation = typeof BandColorInterpretation[keyof typeof BandColorInterpretation];


export function BandColorInterpretationFromJSON(json: any): BandColorInterpretation {
    return BandColorInterpretationFromJSONTyped(json, false);
}

export function BandColorInterpretationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BandColorInterpretation {
    return json as BandColorInterpretation;
}

export function BandColorInterpretationToJSON(value?: BandColorInterpretation | null): any {
    return value as any;
}

