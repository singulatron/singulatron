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
 * @interface FirehosetypesErrorResponse
 */
export interface FirehosetypesErrorResponse {
    /**
     *
     * @type {string}
     * @memberof FirehosetypesErrorResponse
     */
    error?: string;
}
/**
 * Check if a given object implements the FirehosetypesErrorResponse interface.
 */
export declare function instanceOfFirehosetypesErrorResponse(value: object): value is FirehosetypesErrorResponse;
export declare function FirehosetypesErrorResponseFromJSON(json: any): FirehosetypesErrorResponse;
export declare function FirehosetypesErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FirehosetypesErrorResponse;
export declare function FirehosetypesErrorResponseToJSON(value?: FirehosetypesErrorResponse | null): any;