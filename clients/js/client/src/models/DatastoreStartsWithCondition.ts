/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { DatastoreFieldSelector } from './DatastoreFieldSelector';
import {
    DatastoreFieldSelectorFromJSON,
    DatastoreFieldSelectorFromJSONTyped,
    DatastoreFieldSelectorToJSON,
} from './DatastoreFieldSelector';

/**
 * 
 * @export
 * @interface DatastoreStartsWithCondition
 */
export interface DatastoreStartsWithCondition {
    /**
     * Selector selects one, more or all fields
     * @type {DatastoreFieldSelector}
     * @memberof DatastoreStartsWithCondition
     */
    selector?: DatastoreFieldSelector;
    /**
     * 
     * @type {object}
     * @memberof DatastoreStartsWithCondition
     */
    value?: object;
}

/**
 * Check if a given object implements the DatastoreStartsWithCondition interface.
 */
export function instanceOfDatastoreStartsWithCondition(value: object): value is DatastoreStartsWithCondition {
    return true;
}

export function DatastoreStartsWithConditionFromJSON(json: any): DatastoreStartsWithCondition {
    return DatastoreStartsWithConditionFromJSONTyped(json, false);
}

export function DatastoreStartsWithConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatastoreStartsWithCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'selector': json['selector'] == null ? undefined : DatastoreFieldSelectorFromJSON(json['selector']),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function DatastoreStartsWithConditionToJSON(value?: DatastoreStartsWithCondition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'selector': DatastoreFieldSelectorToJSON(value['selector']),
        'value': value['value'],
    };
}
