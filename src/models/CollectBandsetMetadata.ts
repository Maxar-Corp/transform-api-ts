/* tslint:disable */
/* eslint-disable */

import { exists } from '../runtime.js';
import type { BandColorInterpretation } from './BandColorInterpretation.js';
import {
    BandColorInterpretationFromJSON,
    BandColorInterpretationFromJSONTyped,
    BandColorInterpretationToJSON,
} from './BandColorInterpretation.js';
import type { ImageBand } from './ImageBand.js';
import {
    ImageBandFromJSON,
    ImageBandFromJSONTyped,
    ImageBandToJSON,
} from './ImageBand.js';

/**
 * 
 * @export
 * @interface CollectBandsetMetadata
 */
export interface CollectBandsetMetadata {
    /**
     * 
     * @type {string}
     * @memberof CollectBandsetMetadata
     */
    bandsetName?: string;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numLinesInDsa?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    firstUsableLine?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numUsableLines?: number;
    /**
     * 
     * @type {BandColorInterpretation}
     * @memberof CollectBandsetMetadata
     */
    colorInterpretation?: BandColorInterpretation;
    /**
     * 
     * @type {Array<ImageBand>}
     * @memberof CollectBandsetMetadata
     */
    bands?: Array<ImageBand>;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numLinesPerSecond?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    groundSampleDistanceMeters?: number;
    /**
     * 
     * @type {number}
     * @memberof CollectBandsetMetadata
     */
    numDSAs?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof CollectBandsetMetadata
     */
    badDSAs?: Array<number>;
}

/**
 * Check if a given object implements the CollectBandsetMetadata interface.
 */
export function instanceOfCollectBandsetMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectBandsetMetadataFromJSON(json: any): CollectBandsetMetadata {
    return CollectBandsetMetadataFromJSONTyped(json, false);
}

export function CollectBandsetMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectBandsetMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bandsetName': !exists(json, 'bandsetName') ? undefined : json['bandsetName'],
        'numLinesInDsa': !exists(json, 'numLinesInDsa') ? undefined : json['numLinesInDsa'],
        'firstUsableLine': !exists(json, 'firstUsableLine') ? undefined : json['firstUsableLine'],
        'numUsableLines': !exists(json, 'numUsableLines') ? undefined : json['numUsableLines'],
        'colorInterpretation': !exists(json, 'colorInterpretation') ? undefined : BandColorInterpretationFromJSON(json['colorInterpretation']),
        'bands': !exists(json, 'bands') ? undefined : ((json['bands'] as Array<any>).map(ImageBandFromJSON)),
        'numLinesPerSecond': !exists(json, 'numLinesPerSecond') ? undefined : json['numLinesPerSecond'],
        'groundSampleDistanceMeters': !exists(json, 'groundSampleDistanceMeters') ? undefined : json['groundSampleDistanceMeters'],
        'numDSAs': !exists(json, 'numDSAs') ? undefined : json['numDSAs'],
        'badDSAs': !exists(json, 'badDSAs') ? undefined : json['badDSAs'],
    };
}

export function CollectBandsetMetadataToJSON(value?: CollectBandsetMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bandsetName': value.bandsetName,
        'numLinesInDsa': value.numLinesInDsa,
        'firstUsableLine': value.firstUsableLine,
        'numUsableLines': value.numUsableLines,
        'colorInterpretation': BandColorInterpretationToJSON(value.colorInterpretation),
        'bands': value.bands === undefined ? undefined : ((value.bands as Array<any>).map(ImageBandToJSON)),
        'numLinesPerSecond': value.numLinesPerSecond,
        'groundSampleDistanceMeters': value.groundSampleDistanceMeters,
        'numDSAs': value.numDSAs,
        'badDSAs': value.badDSAs,
    };
}

