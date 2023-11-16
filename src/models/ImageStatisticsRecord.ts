/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ImageStatisticsRecord
 */
export interface ImageStatisticsRecord {
    /**
     * 
     * @type {number}
     * @memberof ImageStatisticsRecord
     */
    min: number;
    /**
     * 
     * @type {number}
     * @memberof ImageStatisticsRecord
     */
    max: number;
    /**
     * 
     * @type {number}
     * @memberof ImageStatisticsRecord
     */
    mean: number;
    /**
     * 
     * @type {number}
     * @memberof ImageStatisticsRecord
     */
    standardDeviation: number;
}

/**
 * Check if a given object implements the ImageStatisticsRecord interface.
 */
export function instanceOfImageStatisticsRecord(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "min" in value;
    isInstance = isInstance && "max" in value;
    isInstance = isInstance && "mean" in value;
    isInstance = isInstance && "standardDeviation" in value;

    return isInstance;
}

export function ImageStatisticsRecordFromJSON(json: any): ImageStatisticsRecord {
    return ImageStatisticsRecordFromJSONTyped(json, false);
}

export function ImageStatisticsRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageStatisticsRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'min': json['min'],
        'max': json['max'],
        'mean': json['mean'],
        'standardDeviation': json['standardDeviation'],
    };
}

export function ImageStatisticsRecordToJSON(value?: ImageStatisticsRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'min': value.min,
        'max': value.max,
        'mean': value.mean,
        'standardDeviation': value.standardDeviation,
    };
}

