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
import type { GenericSvcGenericObject } from './GenericSvcGenericObject';
/**
 *
 * @export
 * @interface GenericSvcQueryResponse
 */
export interface GenericSvcQueryResponse {
    /**
     *
     * @type {Array<GenericSvcGenericObject>}
     * @memberof GenericSvcQueryResponse
     */
    objects?: Array<GenericSvcGenericObject>;
}
/**
 * Check if a given object implements the GenericSvcQueryResponse interface.
 */
export declare function instanceOfGenericSvcQueryResponse(value: object): value is GenericSvcQueryResponse;
export declare function GenericSvcQueryResponseFromJSON(json: any): GenericSvcQueryResponse;
export declare function GenericSvcQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericSvcQueryResponse;
export declare function GenericSvcQueryResponseToJSON(value?: GenericSvcQueryResponse | null): any;
