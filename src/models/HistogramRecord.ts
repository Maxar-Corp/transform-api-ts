/* tslint:disable */
/* eslint-disable */

/**
 * 
 * @export
 * @interface HistogramRecord
 */
export interface HistogramRecord {
    /**
     * 
     * @type {Array<number>}
     * @memberof HistogramRecord
     */
    histogram: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof HistogramRecord
     */
    lowValue: number;
    /**
     * 
     * @type {number}
     * @memberof HistogramRecord
     */
    highValue: number;
    /**
     * 
     * @type {number}
     * @memberof HistogramRecord
     */
    numBins: number;
}

/**
 * Check if a given object implements the HistogramRecord interface.
 */
export function instanceOfHistogramRecord(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "histogram" in value;
    isInstance = isInstance && "lowValue" in value;
    isInstance = isInstance && "highValue" in value;
    isInstance = isInstance && "numBins" in value;

    return isInstance;
}

export function HistogramRecordFromJSON(json: any): HistogramRecord {
    return HistogramRecordFromJSONTyped(json, false);
}

export function HistogramRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistogramRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'histogram': json['histogram'],
        'lowValue': json['lowValue'],
        'highValue': json['highValue'],
        'numBins': json['numBins'],
    };
}

export function HistogramRecordToJSON(value?: HistogramRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'histogram': value.histogram,
        'lowValue': value.lowValue,
        'highValue': value.highValue,
        'numBins': value.numBins,
    };
}

