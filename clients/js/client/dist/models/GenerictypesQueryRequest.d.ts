/**
 * Singulatron
 * Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DatastoreQuery } from './DatastoreQuery';
/**
 *
 * @export
 * @interface GenerictypesQueryRequest
 */
export interface GenerictypesQueryRequest {
    /**
     *
     * @type {boolean}
     * @memberof GenerictypesQueryRequest
     */
    _public?: boolean;
    /**
     *
     * @type {DatastoreQuery}
     * @memberof GenerictypesQueryRequest
     */
    query?: DatastoreQuery;
    /**
     *
     * @type {string}
     * @memberof GenerictypesQueryRequest
     */
    table?: string;
}
/**
 * Check if a given object implements the GenerictypesQueryRequest interface.
 */
export declare function instanceOfGenerictypesQueryRequest(value: object): value is GenerictypesQueryRequest;
export declare function GenerictypesQueryRequestFromJSON(json: any): GenerictypesQueryRequest;
export declare function GenerictypesQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerictypesQueryRequest;
export declare function GenerictypesQueryRequestToJSON(value?: GenerictypesQueryRequest | null): any;