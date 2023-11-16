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
 * Band Color Interpretation
 * @export
 */
export declare const BandColorInterpretation: {
    readonly Pan: "PAN";
    readonly PanWithAlpha: "PAN_WITH_ALPHA";
    readonly Rgb: "RGB";
    readonly Rgba: "RGBA";
    readonly Rgbn: "RGBN";
    readonly Bgr: "BGR";
    readonly Bgra: "BGRA";
    readonly Bgrn: "BGRN";
    readonly Worldview8Band: "WORLDVIEW_8_BAND";
    readonly WorldviewSwir: "WORLDVIEW_SWIR";
    readonly Legion8Band: "LEGION_8_BAND";
    readonly Unspecified: "UNSPECIFIED";
};
export type BandColorInterpretation = typeof BandColorInterpretation[keyof typeof BandColorInterpretation];
export declare function BandColorInterpretationFromJSON(json: any): BandColorInterpretation;
export declare function BandColorInterpretationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BandColorInterpretation;
export declare function BandColorInterpretationToJSON(value?: BandColorInterpretation | null): any;