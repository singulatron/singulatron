import { PrompttypesPromptFromJSON, PrompttypesPromptToJSON } from './PrompttypesPrompt.mjs';
import './PrompttypesPromptStatus.mjs';

/* tslint:disable */
/* eslint-disable */
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
 * Check if a given object implements the PrompttypesAddPromptResponse interface.
 */
function instanceOfPrompttypesAddPromptResponse(value) {
    return true;
}
function PrompttypesAddPromptResponseFromJSON(json) {
    return PrompttypesAddPromptResponseFromJSONTyped(json);
}
function PrompttypesAddPromptResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'answer': json['answer'] == null ? undefined : json['answer'],
        'prompt': json['prompt'] == null ? undefined : PrompttypesPromptFromJSON(json['prompt']),
    };
}
function PrompttypesAddPromptResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'answer': value['answer'],
        'prompt': PrompttypesPromptToJSON(value['prompt']),
    };
}

export { PrompttypesAddPromptResponseFromJSON, PrompttypesAddPromptResponseFromJSONTyped, PrompttypesAddPromptResponseToJSON, instanceOfPrompttypesAddPromptResponse };