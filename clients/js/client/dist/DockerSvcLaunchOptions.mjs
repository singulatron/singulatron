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
 * Check if a given object implements the DockerSvcLaunchOptions interface.
 */
function instanceOfDockerSvcLaunchOptions(value) {
    return true;
}
function DockerSvcLaunchOptionsFromJSON(json) {
    return DockerSvcLaunchOptionsFromJSONTyped(json);
}
function DockerSvcLaunchOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'envs': json['envs'] == null ? undefined : json['envs'],
        'gpuEnabled': json['gpuEnabled'] == null ? undefined : json['gpuEnabled'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'hostBinds': json['hostBinds'] == null ? undefined : json['hostBinds'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function DockerSvcLaunchOptionsToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'envs': value['envs'],
        'gpuEnabled': value['gpuEnabled'],
        'hash': value['hash'],
        'hostBinds': value['hostBinds'],
        'labels': value['labels'],
        'name': value['name'],
    };
}

export { DockerSvcLaunchOptionsFromJSON, DockerSvcLaunchOptionsFromJSONTyped, DockerSvcLaunchOptionsToJSON, instanceOfDockerSvcLaunchOptions };
