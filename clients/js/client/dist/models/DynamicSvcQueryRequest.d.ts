/**
 * Singulatron
 * AI management and development platform.
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
 * @interface DynamicSvcQueryRequest
 */
export interface DynamicSvcQueryRequest {
    /**
     *
     * @type {boolean}
     * @memberof DynamicSvcQueryRequest
     */
    _public?: boolean;
    /**
     *
     * @type {DatastoreQuery}
     * @memberof DynamicSvcQueryRequest
     */
    query?: DatastoreQuery;
    /**
     *
     * @type {string}
     * @memberof DynamicSvcQueryRequest
     */
    table?: string;
}
/**
 * Check if a given object implements the DynamicSvcQueryRequest interface.
 */
export declare function instanceOfDynamicSvcQueryRequest(value: object): value is DynamicSvcQueryRequest;
export declare function DynamicSvcQueryRequestFromJSON(json: any): DynamicSvcQueryRequest;
export declare function DynamicSvcQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcQueryRequest;
export declare function DynamicSvcQueryRequestToJSON(value?: DynamicSvcQueryRequest | null): any;