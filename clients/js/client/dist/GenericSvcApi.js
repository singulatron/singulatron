'use strict';

var runtime = require('./runtime2.js');
var GenericSvcCreateObjectRequest = require('./GenericSvcCreateObjectRequest.js');
var GenericSvcCreateObjectResponse = require('./GenericSvcCreateObjectResponse.js');
var GenericSvcDeleteObjectRequest = require('./GenericSvcDeleteObjectRequest.js');
var GenericSvcQueryRequest = require('./GenericSvcQueryRequest.js');
var GenericSvcQueryResponse = require('./GenericSvcQueryResponse.js');
var GenericSvcUpdateObjectRequest = require('./GenericSvcUpdateObjectRequest.js');
var GenericSvcUpsertObjectRequest = require('./GenericSvcUpsertObjectRequest.js');
var GenericSvcUpsertObjectResponse = require('./GenericSvcUpsertObjectResponse.js');
require('./GenericSvcGenericObjectCreateFields.js');
require('./GenericSvcGenericObject.js');
require('./DatastoreCondition.js');
require('./DatastoreEqualCondition.js');
require('./DatastoreFieldSelector.js');
require('./DatastoreContainsCondition.js');
require('./DatastoreStartsWithCondition.js');
require('./DatastoreQuery.js');
require('./DatastoreOrderBy.js');

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
 *
 */
class GenericSvcApi extends runtime.BaseAPI {
    /**
     * Creates a new object with the provided details. Requires authorization and user authentication.
     * Create a Generic Object
     */
    createObjectRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling createObject().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/generic-svc/object`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GenericSvcCreateObjectRequest.GenericSvcCreateObjectRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GenericSvcCreateObjectResponse.GenericSvcCreateObjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new object with the provided details. Requires authorization and user authentication.
     * Create a Generic Object
     */
    createObject(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.createObjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Removes a generic object from the system based on the provided conditions. Requires authorization and user authentication.
     * Delete a Generic Object
     */
    deleteObjectsRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['objectId'] == null) {
                throw new runtime.RequiredError('objectId', 'Required parameter "objectId" was null or undefined when calling deleteObjects().');
            }
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling deleteObjects().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/generic-svc/objects/delete`.replace(`{${"objectId"}}`, encodeURIComponent(String(requestParameters['objectId']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GenericSvcDeleteObjectRequest.GenericSvcDeleteObjectRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Removes a generic object from the system based on the provided conditions. Requires authorization and user authentication.
     * Delete a Generic Object
     */
    deleteObjects(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteObjectsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieves objects from a specified table based on search criteria. Requires authorization and user authentication.   Use helper functions in your respective client library such as condition constructors (`equal`, `contains`, `startsWith`) and field selectors (`field`, `fields`, `id`) for easier access.
     * Find Generic Objects
     */
    queryRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/generic-svc/objects`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GenericSvcQueryRequest.GenericSvcQueryRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GenericSvcQueryResponse.GenericSvcQueryResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieves objects from a specified table based on search criteria. Requires authorization and user authentication.   Use helper functions in your respective client library such as condition constructors (`equal`, `contains`, `startsWith`) and field selectors (`field`, `fields`, `id`) for easier access.
     * Find Generic Objects
     */
    query() {
        return runtime.__awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.queryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Updates objects in a specified table based on provided conditions. Requires authorization and user authentication.
     * Update Generic Objects
     */
    updateObjectsRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling updateObjects().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/generic-svc/objects/update`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: GenericSvcUpdateObjectRequest.GenericSvcUpdateObjectRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Updates objects in a specified table based on provided conditions. Requires authorization and user authentication.
     * Update Generic Objects
     */
    updateObjects(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateObjectsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Creates a new generic object or updates an existing one based on the provided data. Requires authorization and user authentication.
     * Upsert a Generic Object
     */
    upsertObjectRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['objectId'] == null) {
                throw new runtime.RequiredError('objectId', 'Required parameter "objectId" was null or undefined when calling upsertObject().');
            }
            if (requestParameters['body'] == null) {
                throw new runtime.RequiredError('body', 'Required parameter "body" was null or undefined when calling upsertObject().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/generic-svc/object/{objectId}`.replace(`{${"objectId"}}`, encodeURIComponent(String(requestParameters['objectId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: GenericSvcUpsertObjectRequest.GenericSvcUpsertObjectRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GenericSvcUpsertObjectResponse.GenericSvcUpsertObjectResponseFromJSON(jsonValue));
        });
    }
    /**
     * Creates a new generic object or updates an existing one based on the provided data. Requires authorization and user authentication.
     * Upsert a Generic Object
     */
    upsertObject(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.upsertObjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.GenericSvcApi = GenericSvcApi;
