/* tslint:disable */
/* eslint-disable */
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
import { DatastoreQueryFromJSON, DatastoreQueryToJSON, } from './DatastoreQuery';
/**
 * Check if a given object implements the DynamicSvcQueryRequest interface.
 */
export function instanceOfDynamicSvcQueryRequest(value) {
    return true;
}
export function DynamicSvcQueryRequestFromJSON(json) {
    return DynamicSvcQueryRequestFromJSONTyped(json, false);
}
export function DynamicSvcQueryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        '_public': json['public'] == null ? undefined : json['public'],
        'query': json['query'] == null ? undefined : DatastoreQueryFromJSON(json['query']),
        'table': json['table'] == null ? undefined : json['table'],
    };
}
export function DynamicSvcQueryRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'public': value['_public'],
        'query': DatastoreQueryToJSON(value['query']),
        'table': value['table'],
    };
}