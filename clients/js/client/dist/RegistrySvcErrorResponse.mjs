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
 * Check if a given object implements the RegistrySvcErrorResponse interface.
 */
function instanceOfRegistrySvcErrorResponse(value) {
    return true;
}
function RegistrySvcErrorResponseFromJSON(json) {
    return RegistrySvcErrorResponseFromJSONTyped(json);
}
function RegistrySvcErrorResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'error': json['error'] == null ? undefined : json['error'],
    };
}
function RegistrySvcErrorResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'error': value['error'],
    };
}

export { RegistrySvcErrorResponseFromJSON, RegistrySvcErrorResponseFromJSONTyped, RegistrySvcErrorResponseToJSON, instanceOfRegistrySvcErrorResponse };