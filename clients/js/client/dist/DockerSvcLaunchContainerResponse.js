'use strict';

var DockerSvcLaunchInfo = require('./DockerSvcLaunchInfo.js');

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
 * Check if a given object implements the DockerSvcLaunchContainerResponse interface.
 */
function instanceOfDockerSvcLaunchContainerResponse(value) {
    return true;
}
function DockerSvcLaunchContainerResponseFromJSON(json) {
    return DockerSvcLaunchContainerResponseFromJSONTyped(json);
}
function DockerSvcLaunchContainerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'info': json['info'] == null ? undefined : DockerSvcLaunchInfo.DockerSvcLaunchInfoFromJSON(json['info']),
    };
}
function DockerSvcLaunchContainerResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'info': DockerSvcLaunchInfo.DockerSvcLaunchInfoToJSON(value['info']),
    };
}

exports.DockerSvcLaunchContainerResponseFromJSON = DockerSvcLaunchContainerResponseFromJSON;
exports.DockerSvcLaunchContainerResponseFromJSONTyped = DockerSvcLaunchContainerResponseFromJSONTyped;
exports.DockerSvcLaunchContainerResponseToJSON = DockerSvcLaunchContainerResponseToJSON;
exports.instanceOfDockerSvcLaunchContainerResponse = instanceOfDockerSvcLaunchContainerResponse;