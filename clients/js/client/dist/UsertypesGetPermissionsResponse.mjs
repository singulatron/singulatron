import { UsertypesPermissionFromJSON, UsertypesPermissionToJSON } from './UsertypesPermission.mjs';

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
 * Check if a given object implements the UsertypesGetPermissionsResponse interface.
 */
function instanceOfUsertypesGetPermissionsResponse(value) {
    return true;
}
function UsertypesGetPermissionsResponseFromJSON(json) {
    return UsertypesGetPermissionsResponseFromJSONTyped(json);
}
function UsertypesGetPermissionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'permissions': json['permissions'] == null ? undefined : (json['permissions'].map(UsertypesPermissionFromJSON)),
    };
}
function UsertypesGetPermissionsResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'permissions': value['permissions'] == null ? undefined : (value['permissions'].map(UsertypesPermissionToJSON)),
    };
}

export { UsertypesGetPermissionsResponseFromJSON, UsertypesGetPermissionsResponseFromJSONTyped, UsertypesGetPermissionsResponseToJSON, instanceOfUsertypesGetPermissionsResponse };