import { DockerSvcLaunchOptionsFromJSON, DockerSvcLaunchOptionsToJSON } from './DockerSvcLaunchOptions.mjs';

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
 * Check if a given object implements the DockerSvcLaunchContainerRequest interface.
 */
function instanceOfDockerSvcLaunchContainerRequest(value) {
    return true;
}
function DockerSvcLaunchContainerRequestFromJSON(json) {
    return DockerSvcLaunchContainerRequestFromJSONTyped(json);
}
function DockerSvcLaunchContainerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'hostPort': json['hostPort'] == null ? undefined : json['hostPort'],
        'image': json['image'] == null ? undefined : json['image'],
        'options': json['options'] == null ? undefined : DockerSvcLaunchOptionsFromJSON(json['options']),
        'port': json['port'] == null ? undefined : json['port'],
    };
}
function DockerSvcLaunchContainerRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'hostPort': value['hostPort'],
        'image': value['image'],
        'options': DockerSvcLaunchOptionsToJSON(value['options']),
        'port': value['port'],
    };
}

export { DockerSvcLaunchContainerRequestFromJSON, DockerSvcLaunchContainerRequestFromJSONTyped, DockerSvcLaunchContainerRequestToJSON, instanceOfDockerSvcLaunchContainerRequest };
