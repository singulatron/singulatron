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
export declare class GenericSvcGenericObject {
    'createdAt'?: string;
    'data': {
        [key: string]: any;
    };
    'id'?: string;
    /**
    * Public determines if the object is visible to all users. When it\'s false the entry is only visible to the user who created it. When it\'s true the entry is visible to everyone.
    */
    '_public'?: boolean;
    'table': string;
    'updatedAt'?: string;
    'userId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
