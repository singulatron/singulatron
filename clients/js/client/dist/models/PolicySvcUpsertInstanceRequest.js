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
import { PolicySvcInstanceFromJSON, PolicySvcInstanceToJSON, } from './PolicySvcInstance';
/**
 * Check if a given object implements the PolicySvcUpsertInstanceRequest interface.
 */
export function instanceOfPolicySvcUpsertInstanceRequest(value) {
    return true;
}
export function PolicySvcUpsertInstanceRequestFromJSON(json) {
    return PolicySvcUpsertInstanceRequestFromJSONTyped(json, false);
}
export function PolicySvcUpsertInstanceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'instance': json['instance'] == null ? undefined : PolicySvcInstanceFromJSON(json['instance']),
    };
}
export function PolicySvcUpsertInstanceRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'instance': PolicySvcInstanceToJSON(value['instance']),
    };
}