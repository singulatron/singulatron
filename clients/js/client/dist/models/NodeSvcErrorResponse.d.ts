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
 * @interface NodeSvcErrorResponse
 */
export interface NodeSvcErrorResponse {
    /**
     *
     * @type {string}
     * @memberof NodeSvcErrorResponse
     */
    error?: string;
}
/**
 * Check if a given object implements the NodeSvcErrorResponse interface.
 */
export declare function instanceOfNodeSvcErrorResponse(value: object): value is NodeSvcErrorResponse;
export declare function NodeSvcErrorResponseFromJSON(json: any): NodeSvcErrorResponse;
export declare function NodeSvcErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeSvcErrorResponse;
export declare function NodeSvcErrorResponseToJSON(value?: NodeSvcErrorResponse | null): any;
