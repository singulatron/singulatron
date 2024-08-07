/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package userservice

import (
	"encoding/json"
	"net/http"

	user "github.com/singulatron/singulatron/localtron/services/user/types"
)

// Login handles user authentication
// @ID login
// @Summary Login
// @Description Authenticates a user and returns a token.
// @Tags User Svc
// @Accept json
// @Produce json
// @Param request body user.LoginRequest true "Login Request"
// @Success 200 {object} user.LoginResponse "Login successful"
// @Failure 400 {object} user.ErrorResponse "Invalid JSON"
// @Failure 500 {object} user.ErrorResponse "Internal Server Error"
// @Router /user-svc/login [post]
func (s *UserService) Login(w http.ResponseWriter, r *http.Request) {
	req := user.LoginRequest{}
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, `Invalid JSON`, http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	token, err := s.login(req.Email, req.Password)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	bs, _ := json.Marshal(user.LoginResponse{
		Token: token,
	})
	w.Write(bs)
}
