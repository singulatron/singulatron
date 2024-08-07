import { GenericSvcGenericObjectCreateFieldsFromJSON, GenericSvcGenericObjectCreateFieldsToJSON } from './GenericSvcGenericObjectCreateFields.mjs';

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
/**
 * Check if a given object implements the GenericSvcCreateObjectRequest interface.
 */
function instanceOfGenericSvcCreateObjectRequest(value) {
    return true;
}
function GenericSvcCreateObjectRequestFromJSON(json) {
    return GenericSvcCreateObjectRequestFromJSONTyped(json);
}
function GenericSvcCreateObjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : GenericSvcGenericObjectCreateFieldsFromJSON(json['object']),
    };
}
function GenericSvcCreateObjectRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'object': GenericSvcGenericObjectCreateFieldsToJSON(value['object']),
    };
}

export { GenericSvcCreateObjectRequestFromJSON, GenericSvcCreateObjectRequestFromJSONTyped, GenericSvcCreateObjectRequestToJSON, instanceOfGenericSvcCreateObjectRequest };
