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
import type { ConfigtypesConfig } from './ConfigtypesConfig';
/**
 *
 * @export
 * @interface ConfigtypesGetConfigResponse
 */
export interface ConfigtypesGetConfigResponse {
    /**
     *
     * @type {ConfigtypesConfig}
     * @memberof ConfigtypesGetConfigResponse
     */
    config?: ConfigtypesConfig;
}
/**
 * Check if a given object implements the ConfigtypesGetConfigResponse interface.
 */
export declare function instanceOfConfigtypesGetConfigResponse(value: object): value is ConfigtypesGetConfigResponse;
export declare function ConfigtypesGetConfigResponseFromJSON(json: any): ConfigtypesGetConfigResponse;
export declare function ConfigtypesGetConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigtypesGetConfigResponse;
export declare function ConfigtypesGetConfigResponseToJSON(value?: ConfigtypesGetConfigResponse | null): any;