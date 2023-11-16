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
 * @interface EvalScriptResponse
 */
export interface EvalScriptResponse {
    /**
     * The return value generated by running the script.
     * @type {any}
     * @memberof EvalScriptResponse
     */
    result?: any | null;
    /**
     * The standard out generated by running the script.
     * @type {string}
     * @memberof EvalScriptResponse
     */
    response?: string;
    /**
     * The error, if any, generated by running the script.  Null if no errors.
     * @type {string}
     * @memberof EvalScriptResponse
     */
    error?: string;
}
/**
 * Check if a given object implements the EvalScriptResponse interface.
 */
export declare function instanceOfEvalScriptResponse(value: object): boolean;
export declare function EvalScriptResponseFromJSON(json: any): EvalScriptResponse;
export declare function EvalScriptResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvalScriptResponse;
export declare function EvalScriptResponseToJSON(value?: EvalScriptResponse | null): any;