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

export class DockerSvcLaunchInfo {
    'newContainerStarted'?: boolean;
    'portNumber'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "newContainerStarted",
            "baseName": "newContainerStarted",
            "type": "boolean"
        },
        {
            "name": "portNumber",
            "baseName": "portNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DockerSvcLaunchInfo.attributeTypeMap;
    }
}
