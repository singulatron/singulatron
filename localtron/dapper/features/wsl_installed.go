/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package features

import dt "github.com/singulatron/singulatron/localtron/dapper/types"

var WslInstalled = dt.Feature{
	ID:   "wsl-installed",
	Name: "WSL Installed",
	PlatformScripts: map[dt.Platform]*dt.Scripts{
		dt.Windows: {
			Execute: &dt.Script{
				Source:  `wsl --install --no-distribution`,
				Runtime: "cmd",
			},
			Check: &dt.Script{
				Source: `
# Attempt to list WSL distributions quietly and check the status
wsl -l -q 2>$null
if ($?) {
	# The command executed successfully, WSL is operational
	Write-Output "WSL is installed and operational."
	exit 0
} else {
	exit 1
}`,
				// Unfortunately without reboot the check, or any WSL command will throw this:
				// 		This application requires the Windows Subsystem for Linux Optional Component.
				// 		Install it by running: wsl.exe --install --no-distribution
				// 		The system may need to be restarted so the changes can take effect.
				// 		Error code: Wsl/WSL_E_WSL_OPTIONAL_COMPONENT_REQUIRED
				Runtime: "powershell",
				Reboot:  true,
			},
		},
	},
	PlatformFeatures: map[dt.Platform][]any{
		dt.Windows: {WslEnabled.ID},
	},
}