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
 * Check if a given object implements the ConfigSvcAppServiceConfig interface.
 */
function instanceOfConfigSvcAppServiceConfig(value) {
    return true;
}
function ConfigSvcAppServiceConfigFromJSON(json) {
    return ConfigSvcAppServiceConfigFromJSONTyped(json);
}
function ConfigSvcAppServiceConfigFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'loggingDisabled': json['loggingDisabled'] == null ? undefined : json['loggingDisabled'],
    };
}
function ConfigSvcAppServiceConfigToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'loggingDisabled': value['loggingDisabled'],
    };
}

exports.ConfigSvcAppServiceConfigFromJSON = ConfigSvcAppServiceConfigFromJSON;
exports.ConfigSvcAppServiceConfigFromJSONTyped = ConfigSvcAppServiceConfigFromJSONTyped;
exports.ConfigSvcAppServiceConfigToJSON = ConfigSvcAppServiceConfigToJSON;
exports.instanceOfConfigSvcAppServiceConfig = instanceOfConfigSvcAppServiceConfig;