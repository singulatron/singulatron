'use strict';

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
 * Check if a given object implements the FirehosetypesErrorResponse interface.
 */
function instanceOfFirehosetypesErrorResponse(value) {
    return true;
}
function FirehosetypesErrorResponseFromJSON(json) {
    return FirehosetypesErrorResponseFromJSONTyped(json);
}
function FirehosetypesErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
    };
}
function FirehosetypesErrorResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
    };
}

exports.FirehosetypesErrorResponseFromJSON = FirehosetypesErrorResponseFromJSON;
exports.FirehosetypesErrorResponseFromJSONTyped = FirehosetypesErrorResponseFromJSONTyped;
exports.FirehosetypesErrorResponseToJSON = FirehosetypesErrorResponseToJSON;
exports.instanceOfFirehosetypesErrorResponse = instanceOfFirehosetypesErrorResponse;