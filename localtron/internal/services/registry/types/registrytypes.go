/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package registry_svc

import "errors"

type ErrorResponse struct {
	Error string `json:"error"`
}

// RegisterServiceInstanceRequest represents the request body to register a service.
//
// The user must provide either:
// 1. A full URL (e.g., "https://myserver.com:5981") -OR-
// 2. A combination of the following fields:
//   - scheme: "http" or "https" (required if URL is not provided)
//   - host: the domain of the service (required if URL is not provided)
//   - port: the port number (required if URL is not provided)
//
// Additionally, if both host and port are provided, they cannot both be specified at the same time.
// The IP field is optional and can be used for registration by IP instead of host.
type RegisterServiceInstanceRequest struct {
	Name   string `json:"name,omitempty"`   // Required: name of the service (e.g., "user-svc")
	URL    string `json:"url,omitempty"`    // Optional: full URL (e.g., "https://myserver.com:5981")
	Scheme string `json:"scheme,omitempty"` // Required if URL is not provided
	Host   string `json:"host,omitempty"`   // Required if URL is not provided
	IP     string `json:"ip,omitempty"`     // Optional: to register by IP instead of host
	Port   int    `json:"port,omitempty"`   // Required if URL is not provided
}

type RegisterServiceInstanceResponse struct {
}

type QueryServiceInstanceResponse struct {
	Instances []ServiceInstance `json:"instances,omitempty"`
}

type ServiceInstance struct {
	ID     string `json:"id,omitempty"`     // Required: ID of the service (e.g., "https://api.com:999/user-svc")
	Name   string `json:"name,omitempty"`   // Required: name of the service (e.g., "user-svc")
	URL    string `json:"url,omitempty"`    // Optional: full URL (e.g., "https://myserver.com:5981")
	Scheme string `json:"scheme,omitempty"` // Required if URL is not provided
	Host   string `json:"host,omitempty"`   // Required if URL is not provided
	IP     string `json:"ip,omitempty"`     // Optional: to register by IP instead of host
	Port   int    `json:"port,omitempty"`   // Required if URL is not provided
}

var ErrNotFound = errors.New("service not found")