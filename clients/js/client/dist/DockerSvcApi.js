'use strict';

var runtime = require('./runtime2.js');
var DockerSvcContainerIsRunningResponse = require('./DockerSvcContainerIsRunningResponse.js');
var DockerSvcGetContainerSummaryResponse = require('./DockerSvcGetContainerSummaryResponse.js');
var DockerSvcGetDockerHostResponse = require('./DockerSvcGetDockerHostResponse.js');
var DockerSvcGetInfoResponse = require('./DockerSvcGetInfoResponse.js');
require('./DockerSvcDockerInfo.js');

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
class DockerSvcApi extends runtime.BaseAPI {
    /**
     * Get a summary of the Docker container identified by the hash, limited to a specified number of lines
     * Get Container Summary
     */
    getContainerSummaryRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['hash'] == null) {
                throw new runtime.RequiredError('hash', 'Required parameter "hash" was null or undefined when calling getContainerSummary().');
            }
            if (requestParameters['numberOfLines'] == null) {
                throw new runtime.RequiredError('numberOfLines', 'Required parameter "numberOfLines" was null or undefined when calling getContainerSummary().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/docker-svc/container/{hash}/summary/{numberOfLines}`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters['hash']))).replace(`{${"numberOfLines"}}`, encodeURIComponent(String(requestParameters['numberOfLines']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetContainerSummaryResponse.DockerSvcGetContainerSummaryResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get a summary of the Docker container identified by the hash, limited to a specified number of lines
     * Get Container Summary
     */
    getContainerSummary(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getContainerSummaryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve information about the Docker host
     * Get Docker Host
     */
    getHostRaw(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/docker-svc/host`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetDockerHostResponse.DockerSvcGetDockerHostResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieve information about the Docker host
     * Get Docker Host
     */
    getHost(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getHostRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve detailed information about the Docker service
     * Get Docker Service Information
     */
    getInfoRaw(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/docker-svc/info`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetInfoResponse.DockerSvcGetInfoResponseFromJSON(jsonValue));
        });
    }
    /**
     * Retrieve detailed information about the Docker service
     * Get Docker Service Information
     */
    getInfo(initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.getInfoRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Check if a Docker container identified by the hash is running
     * Check If a Container Is Running
     */
    isRunningRaw(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            if (requestParameters['hash'] == null) {
                throw new runtime.RequiredError('hash', 'Required parameter "hash" was null or undefined when calling isRunning().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/docker-svc/container/{hash}/is-running`.replace(`{${"hash"}}`, encodeURIComponent(String(requestParameters['hash']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcContainerIsRunningResponse.DockerSvcContainerIsRunningResponseFromJSON(jsonValue));
        });
    }
    /**
     * Check if a Docker container identified by the hash is running
     * Check If a Container Is Running
     */
    isRunning(requestParameters, initOverrides) {
        return runtime.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.isRunningRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

exports.DockerSvcApi = DockerSvcApi;