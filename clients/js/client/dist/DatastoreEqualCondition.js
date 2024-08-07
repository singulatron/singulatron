'use strict';

var DatastoreFieldSelector = require('./DatastoreFieldSelector.js');

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
 * Check if a given object implements the DatastoreEqualCondition interface.
 */
function instanceOfDatastoreEqualCondition(value) {
    return true;
}
function DatastoreEqualConditionFromJSON(json) {
    return DatastoreEqualConditionFromJSONTyped(json);
}
function DatastoreEqualConditionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'selector': json['selector'] == null ? undefined : DatastoreFieldSelector.DatastoreFieldSelectorFromJSON(json['selector']),
        'value': json['value'] == null ? undefined : json['value'],
    };
}
function DatastoreEqualConditionToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'selector': DatastoreFieldSelector.DatastoreFieldSelectorToJSON(value['selector']),
        'value': value['value'],
    };
}

exports.DatastoreEqualConditionFromJSON = DatastoreEqualConditionFromJSON;
exports.DatastoreEqualConditionFromJSONTyped = DatastoreEqualConditionFromJSONTyped;
exports.DatastoreEqualConditionToJSON = DatastoreEqualConditionToJSON;
exports.instanceOfDatastoreEqualCondition = instanceOfDatastoreEqualCondition;
