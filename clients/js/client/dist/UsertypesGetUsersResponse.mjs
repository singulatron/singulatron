import { UsertypesUserFromJSON, UsertypesUserToJSON } from './UsertypesUser.mjs';

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
 * Check if a given object implements the UsertypesGetUsersResponse interface.
 */
function instanceOfUsertypesGetUsersResponse(value) {
    return true;
}
function UsertypesGetUsersResponseFromJSON(json) {
    return UsertypesGetUsersResponseFromJSONTyped(json);
}
function UsertypesGetUsersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'after': json['after'] == null ? undefined : json['after'],
        'count': json['count'] == null ? undefined : json['count'],
        'users': json['users'] == null ? undefined : (json['users'].map(UsertypesUserFromJSON)),
    };
}
function UsertypesGetUsersResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'after': value['after'],
        'count': value['count'],
        'users': value['users'] == null ? undefined : (value['users'].map(UsertypesUserToJSON)),
    };
}

export { UsertypesGetUsersResponseFromJSON, UsertypesGetUsersResponseFromJSONTyped, UsertypesGetUsersResponseToJSON, instanceOfUsertypesGetUsersResponse };