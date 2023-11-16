/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 */
export const ImageBand = {
    Pan: 'pan',
    Blue: 'blue',
    Green: 'green',
    Red: 'red',
    Nir1: 'nir1',
    Coastal: 'coastal',
    Yellow: 'yellow',
    RedEdge: 'red_edge',
    RedEdge1: 'red_edge1',
    RedEdge2: 'red_edge2',
    Nir2: 'nir2',
    S1: 's1',
    S2: 's2',
    S3: 's3',
    S4: 's4',
    S5: 's5',
    S6: 's6',
    S7: 's7',
    S8: 's8',
    Dem: 'dem',
    Alpha: 'alpha',
    Undefined: 'undefined'
} as const;
export type ImageBand = typeof ImageBand[keyof typeof ImageBand];


export function ImageBandFromJSON(json: any): ImageBand {
    return ImageBandFromJSONTyped(json, false);
}

export function ImageBandFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageBand {
    return json as ImageBand;
}

export function ImageBandToJSON(value?: ImageBand | null): any {
    return value as any;
}

