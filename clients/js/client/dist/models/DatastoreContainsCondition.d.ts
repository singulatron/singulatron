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
import type { DatastoreFieldSelector } from './DatastoreFieldSelector';
/**
 *
 * @export
 * @interface DatastoreContainsCondition
 */
export interface DatastoreContainsCondition {
    /**
     * Selector selects one, more or all fields
     * @type {DatastoreFieldSelector}
     * @memberof DatastoreContainsCondition
     */
    selector?: DatastoreFieldSelector;
    /**
     *
     * @type {object}
     * @memberof DatastoreContainsCondition
     */
    value?: object;
}
/**
 * Check if a given object implements the DatastoreContainsCondition interface.
 */
export declare function instanceOfDatastoreContainsCondition(value: object): value is DatastoreContainsCondition;
export declare function DatastoreContainsConditionFromJSON(json: any): DatastoreContainsCondition;
export declare function DatastoreContainsConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatastoreContainsCondition;
export declare function DatastoreContainsConditionToJSON(value?: DatastoreContainsCondition | null): any;
