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
import { ConfigConfigFromJSON, ConfigConfigToJSON, } from './ConfigConfig';
/**
 * Check if a given object implements the ConfigGetConfigResponse interface.
 */
export function instanceOfConfigGetConfigResponse(value) {
    return true;
}
export function ConfigGetConfigResponseFromJSON(json) {
    return ConfigGetConfigResponseFromJSONTyped(json, false);
}
export function ConfigGetConfigResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'config': json['config'] == null ? undefined : ConfigConfigFromJSON(json['config']),
    };
}
export function ConfigGetConfigResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'config': ConfigConfigToJSON(value['config']),
    };
}