import { a as BaseAPI, _ as __awaiter, b as RequiredError, J as JSONApiResponse } from './runtime2.mjs';
import { PolicySvcCheckRequestToJSON } from './PolicySvcCheckRequest.mjs';
import { PolicySvcCheckResponseFromJSON } from './PolicySvcCheckResponse.mjs';
import { PolicySvcUpsertInstanceRequestToJSON } from './PolicySvcUpsertInstanceRequest.mjs';
import './PolicySvcInstance.mjs';
import './PolicySvcRateLimitParameters.mjs';
import './PolicySvcScope.mjs';
import './PolicySvcEntity.mjs';
import './PolicySvcBlocklistParameters.mjs';

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
class PolicySvcApi extends BaseAPI {
    /**
     * Check records a resource access and returns if the access is allowed.
     * Check
     */
    checkRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['request'] == null) {
                throw new RequiredError('request', 'Required parameter "request" was null or undefined when calling check().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/policy-svc/check`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: PolicySvcCheckRequestToJSON(requestParameters['request']),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => PolicySvcCheckResponseFromJSON(jsonValue));
        });
    }
    /**
     * Check records a resource access and returns if the access is allowed.
     * Check
     */
    check(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.checkRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Allows user to upsert a new policy instance based on a template.
     * Upsert an Instance
     */
    upsertInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['instanceId'] == null) {
                throw new RequiredError('instanceId', 'Required parameter "instanceId" was null or undefined when calling upsertInstance().');
            }
            if (requestParameters['request'] == null) {
                throw new RequiredError('request', 'Required parameter "request" was null or undefined when calling upsertInstance().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/policy-svc/instance/{instanceId}`.replace(`{${"instanceId"}}`, encodeURIComponent(String(requestParameters['instanceId']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: PolicySvcUpsertInstanceRequestToJSON(requestParameters['request']),
            }, initOverrides);
            return new JSONApiResponse(response);
        });
    }
    /**
     * Allows user to upsert a new policy instance based on a template.
     * Upsert an Instance
     */
    upsertInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.upsertInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { PolicySvcApi };