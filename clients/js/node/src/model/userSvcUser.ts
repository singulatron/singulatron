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

import { RequestFile } from './models';

export class UserSvcUser {
    'createdAt'?: string;
    'deletedAt'?: string;
    /**
    * Email or username
    */
    'email'?: string;
    'id'?: string;
    'isService'?: boolean;
    'name'?: string;
    'passwordHash'?: string;
    /**
    * Many to many relationship between User and Role
    */
    'roleIds'?: Array<string>;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isService",
            "baseName": "isService",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "passwordHash",
            "baseName": "passwordHash",
            "type": "string"
        },
        {
            "name": "roleIds",
            "baseName": "roleIds",
            "type": "Array<string>"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserSvcUser.attributeTypeMap;
    }
}
