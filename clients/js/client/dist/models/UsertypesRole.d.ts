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
 *
 * @export
 * @interface UsertypesRole
 */
export interface UsertypesRole {
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    ownerId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof UsertypesRole
     */
    permissionIds?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof UsertypesRole
     */
    updatedAt?: string;
}
/**
 * Check if a given object implements the UsertypesRole interface.
 */
export declare function instanceOfUsertypesRole(value: object): value is UsertypesRole;
export declare function UsertypesRoleFromJSON(json: any): UsertypesRole;
export declare function UsertypesRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsertypesRole;
export declare function UsertypesRoleToJSON(value?: UsertypesRole | null): any;