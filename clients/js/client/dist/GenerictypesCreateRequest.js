'use strict';

var GenerictypesGenericObjectCreateFields = require('./GenerictypesGenericObjectCreateFields.js');

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
 * Check if a given object implements the GenerictypesCreateRequest interface.
 */
function instanceOfGenerictypesCreateRequest(value) {
    return true;
}
function GenerictypesCreateRequestFromJSON(json) {
    return GenerictypesCreateRequestFromJSONTyped(json);
}
function GenerictypesCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : GenerictypesGenericObjectCreateFields.GenerictypesGenericObjectCreateFieldsFromJSON(json['object']),
    };
}
function GenerictypesCreateRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'object': GenerictypesGenericObjectCreateFields.GenerictypesGenericObjectCreateFieldsToJSON(value['object']),
    };
}

exports.GenerictypesCreateRequestFromJSON = GenerictypesCreateRequestFromJSON;
exports.GenerictypesCreateRequestFromJSONTyped = GenerictypesCreateRequestFromJSONTyped;
exports.GenerictypesCreateRequestToJSON = GenerictypesCreateRequestToJSON;
exports.instanceOfGenerictypesCreateRequest = instanceOfGenerictypesCreateRequest;