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
 * Check if a given object implements the ModelSvcModelStatus interface.
 */
function instanceOfModelSvcModelStatus(value) {
    return true;
}
function ModelSvcModelStatusFromJSON(json) {
    return ModelSvcModelStatusFromJSONTyped(json);
}
function ModelSvcModelStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'address': json['address'] == null ? undefined : json['address'],
        'assetsReady': json['assetsReady'] == null ? undefined : json['assetsReady'],
        'running': json['running'] == null ? undefined : json['running'],
    };
}
function ModelSvcModelStatusToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'address': value['address'],
        'assetsReady': value['assetsReady'],
        'running': value['running'],
    };
}

exports.ModelSvcModelStatusFromJSON = ModelSvcModelStatusFromJSON;
exports.ModelSvcModelStatusFromJSONTyped = ModelSvcModelStatusFromJSONTyped;
exports.ModelSvcModelStatusToJSON = ModelSvcModelStatusToJSON;
exports.instanceOfModelSvcModelStatus = instanceOfModelSvcModelStatus;