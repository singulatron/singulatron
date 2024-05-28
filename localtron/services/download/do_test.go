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
package downloadservice

import (
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"path"
	"path/filepath"
	"testing"
	"time"

	types "github.com/singulatron/singulatron/localtron/services/download/types"
	"github.com/stretchr/testify/assert"
)

func TestDownloadFile(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rangeHeader := r.Header.Get("Range")
		if rangeHeader != "" {
			w.Header().Set("Content-Range", "bytes 0-10/11")
			w.WriteHeader(http.StatusPartialContent)
			io.WriteString(w, "Hello world")
		} else {
			w.WriteHeader(http.StatusOK)
			io.WriteString(w, "Hello world")
		}
	}))
	defer server.Close()

	dir := path.Join(os.TempDir(), "download_test")
	err := os.MkdirAll(dir, 0755)
	if err != nil {
		t.Fatalf("Failed to create temp dir: %s", err)
	}
	// defer os.RemoveAll(dir)

	dm, _ := NewDownloadService()
	dm.StateFilePath = path.Join(dir, "downloadFile.json")
	dm.Do(server.URL, dir)

	for {
		time.Sleep(5 * time.Millisecond)
		d, ok := dm.GetDownload(server.URL)
		if ok && d.Status == types.DownloadStatusCompleted {
			break
		}
	}

	expectedFilePath := filepath.Join(dir, encodeURLtoFileName(server.URL))
	data, err := os.ReadFile(expectedFilePath)
	if err != nil {
		t.Fatalf("Failed to read downloaded file: %s", err)
	}
	if string(data) != "Hello world" {
		t.Errorf("Downloaded file content incorrect, got: %s, want: %s", data, "Hello world")
	}
}

func TestDownloadFileWithPartFile(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		rangeHeader := r.Header.Get("Range")
		if rangeHeader != "bytes=5-" {
			t.Errorf("Expected 'bytes=5-' got '%s'", rangeHeader)
		}

		w.Header().Set("Content-Range", "bytes 5-10/11")
		w.WriteHeader(http.StatusPartialContent)
		io.WriteString(w, " world")
	}))
	defer server.Close()

	dir := path.Join(os.TempDir(), "download_test")
	err := os.MkdirAll(dir, 0755)
	if err != nil {
		t.Fatalf("Failed to create temp dir: %s", err)
	}
	// defer os.RemoveAll(dir)

	downloadURL := server.URL + "/file"
	partFilePath := filepath.Join(dir, encodeURLtoFileName(downloadURL)+".part")
	if err := os.WriteFile(partFilePath, []byte("Hello"), 0644); err != nil {
		t.Fatalf("Failed to create part file: %s", err)
	}

	dm, _ := NewDownloadService()
	dm.StateFilePath = path.Join(dir, "downloadFilePartial.json")

	assert.NoError(t, dm.Do(downloadURL, dir))

	for {
		time.Sleep(5 * time.Millisecond)
		d, ok := dm.GetDownload(downloadURL)
		if ok && d.Status == types.DownloadStatusCompleted {
			break
		}
	}

	expectedFilePath := filepath.Join(dir, encodeURLtoFileName(downloadURL))
	data, err := os.ReadFile(expectedFilePath)
	if err != nil {
		t.Fatalf("Failed to read downloaded file: %s", err)
	}
	if string(data) != "Hello world" {
		t.Errorf("Downloaded file content incorrect, got: %s, want: %s", data, "Hello world")
	}

	// assert.Equal(t, 1, len(dm.downloads), dm.downloads)
	// assert.Equal(t, downloadURL, dm.downloads[downloadURL].URL)
	// assert.Equal(t, int64(11), dm.downloads[downloadURL].DownloadedSize)
	// assert.Equal(t, int64(11), dm.downloads[downloadURL].TotalSize)
}

func TestDownloadFileWithFullFile(t *testing.T) {
	dir := path.Join(os.TempDir(), "download_test")
	err := os.MkdirAll(dir, 0755)
	if err != nil {
		t.Fatalf("Failed to create temp dir: %s", err)
	}
	// defer os.RemoveAll(dir)

	downloadURL := "somethingsomething/file"
	partFilePath := filepath.Join(dir, encodeURLtoFileName(downloadURL))
	if err := os.WriteFile(partFilePath, []byte("Hello"), 0644); err != nil {
		t.Fatalf("Failed to create part file: %s", err)
	}

	dm, _ := NewDownloadService()
	dm.StateFilePath = path.Join(dir, "downloadFileFull.json")
	dm.Do(downloadURL, dir)

	var (
		d  *types.Download
		ok bool
	)
	for {
		time.Sleep(5 * time.Millisecond)
		d, ok = dm.GetDownload(downloadURL)
		if ok && d.Status == types.DownloadStatusCompleted {
			break
		}
	}

	assert.Equal(t, int64(5), d.DownloadedSize)
	assert.Equal(t, int64(5), d.TotalSize)
}