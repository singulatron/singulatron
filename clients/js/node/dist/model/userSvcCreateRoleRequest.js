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
export class UserSvcCreateRoleRequest {
    static getAttributeTypeMap() {
        return UserSvcCreateRoleRequest.attributeTypeMap;
    }
}
UserSvcCreateRoleRequest.discriminator = undefined;
UserSvcCreateRoleRequest.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "permissionIds",
        "baseName": "permissionIds",
        "type": "Array<string>"
    }
];
