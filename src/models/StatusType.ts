/* tslint:disable */
/* eslint-disable */

import { exists, mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface StatusType
 */
export interface StatusType {
    /**
     * 
     * @type {number}
     * @memberof StatusType
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof StatusType
     */
    reasonPhrase?: string;
}

const codes = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Checkpoint",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    509: "Bandwidth Limit Exceeded",
    510: "Not Extended",
    511: "Network Authentication Required"};

/**
 * Check if a given object implements the StatusType interface.
 */
export function instanceOfStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatusTypeFromJSON(json: any): StatusType {
    return StatusTypeFromJSONTyped(json, false);
}

export function StatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statusCode': json,
        'reasonPhrase': codes[+json],
    };
}

export function StatusTypeToJSON(value?: StatusType | number | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if(typeof value === 'number')
    {
        return {
        'statusCode': value,
        'reasonPhrase': codes[+value]}
    }
    return{
        'statusCode': value.statusCode,
        'reasonPhrase': value.reasonPhrase,
    };
}

