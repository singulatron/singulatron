/**
 * Superplatform
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RegistrySvcServiceInstance } from './RegistrySvcServiceInstance';
/**
 *
 * @export
 * @interface RegistrySvcQueryServiceInstancesResponse
 */
export interface RegistrySvcQueryServiceInstancesResponse {
    /**
     *
     * @type {Array<RegistrySvcServiceInstance>}
     * @memberof RegistrySvcQueryServiceInstancesResponse
     */
    instances?: Array<RegistrySvcServiceInstance>;
}
/**
 * Check if a given object implements the RegistrySvcQueryServiceInstancesResponse interface.
 */
export declare function instanceOfRegistrySvcQueryServiceInstancesResponse(value: object): value is RegistrySvcQueryServiceInstancesResponse;
export declare function RegistrySvcQueryServiceInstancesResponseFromJSON(json: any): RegistrySvcQueryServiceInstancesResponse;
export declare function RegistrySvcQueryServiceInstancesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrySvcQueryServiceInstancesResponse;
export declare function RegistrySvcQueryServiceInstancesResponseToJSON(value?: RegistrySvcQueryServiceInstancesResponse | null): any;
