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

import { mapValues } from '../runtime';
import type { DynamicSvcGenericObjectCreateFields } from './DynamicSvcGenericObjectCreateFields';
import {
    DynamicSvcGenericObjectCreateFieldsFromJSON,
    DynamicSvcGenericObjectCreateFieldsFromJSONTyped,
    DynamicSvcGenericObjectCreateFieldsToJSON,
} from './DynamicSvcGenericObjectCreateFields';

/**
 * 
 * @export
 * @interface DynamicSvcCreateObjectRequest
 */
export interface DynamicSvcCreateObjectRequest {
    /**
     * 
     * @type {DynamicSvcGenericObjectCreateFields}
     * @memberof DynamicSvcCreateObjectRequest
     */
    object?: DynamicSvcGenericObjectCreateFields;
}

/**
 * Check if a given object implements the DynamicSvcCreateObjectRequest interface.
 */
export function instanceOfDynamicSvcCreateObjectRequest(value: object): value is DynamicSvcCreateObjectRequest {
    return true;
}

export function DynamicSvcCreateObjectRequestFromJSON(json: any): DynamicSvcCreateObjectRequest {
    return DynamicSvcCreateObjectRequestFromJSONTyped(json, false);
}

export function DynamicSvcCreateObjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcCreateObjectRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'] == null ? undefined : DynamicSvcGenericObjectCreateFieldsFromJSON(json['object']),
    };
}

export function DynamicSvcCreateObjectRequestToJSON(value?: DynamicSvcCreateObjectRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': DynamicSvcGenericObjectCreateFieldsToJSON(value['object']),
    };
}
