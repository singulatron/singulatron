import { FirehoseSvcEventFromJSON, FirehoseSvcEventToJSON } from './FirehoseSvcEvent.mjs';

/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the FirehoseSvcEventPublishRequest interface.
 */
function instanceOfFirehoseSvcEventPublishRequest(value) {
    return true;
}
function FirehoseSvcEventPublishRequestFromJSON(json) {
    return FirehoseSvcEventPublishRequestFromJSONTyped(json);
}
function FirehoseSvcEventPublishRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'event': json['event'] == null ? undefined : FirehoseSvcEventFromJSON(json['event']),
    };
}
function FirehoseSvcEventPublishRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'event': FirehoseSvcEventToJSON(value['event']),
    };
}

export { FirehoseSvcEventPublishRequestFromJSON, FirehoseSvcEventPublishRequestFromJSONTyped, FirehoseSvcEventPublishRequestToJSON, instanceOfFirehoseSvcEventPublishRequest };