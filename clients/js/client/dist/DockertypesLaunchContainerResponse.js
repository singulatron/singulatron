'use strict';

var DockertypesLaunchInfo = require('./DockertypesLaunchInfo.js');

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
 * Check if a given object implements the DockertypesLaunchContainerResponse interface.
 */
function instanceOfDockertypesLaunchContainerResponse(value) {
    return true;
}
function DockertypesLaunchContainerResponseFromJSON(json) {
    return DockertypesLaunchContainerResponseFromJSONTyped(json);
}
function DockertypesLaunchContainerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'info': json['info'] == null ? undefined : DockertypesLaunchInfo.DockertypesLaunchInfoFromJSON(json['info']),
    };
}
function DockertypesLaunchContainerResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'info': DockertypesLaunchInfo.DockertypesLaunchInfoToJSON(value['info']),
    };
}

exports.DockertypesLaunchContainerResponseFromJSON = DockertypesLaunchContainerResponseFromJSON;
exports.DockertypesLaunchContainerResponseFromJSONTyped = DockertypesLaunchContainerResponseFromJSONTyped;
exports.DockertypesLaunchContainerResponseToJSON = DockertypesLaunchContainerResponseToJSON;
exports.instanceOfDockertypesLaunchContainerResponse = instanceOfDockertypesLaunchContainerResponse;