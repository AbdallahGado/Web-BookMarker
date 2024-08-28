function addBookmark() {
  const siteName = document.getElementById("SiteName").value.trim();
  const siteURL = document.getElementById("SiteURL").value.trim();
  const alert = document.getElementById("alertNameInput");

  if (!siteName || !isValidURL(siteURL)) {
    alert.classList.remove("d-none");
    return;
  }

  alert.classList.add("d-none");

  const bookmark = {
    name: siteName,
    url: siteURL,
  };

  addBookmarkToTable(bookmark);

  clearForm();
}

function isValidURL(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(url);
}

function addBookmarkToTable(bookmark) {
  const tableRow = document.getElementById("tableRow");
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${bookmark.name}</td>
      <td><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></td>
      <td><button class="btn btn-danger" onclick="deleteBookmark(this)">Delete</button></td>
    `;

  tableRow.appendChild(row);
}

function deleteBookmark(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function clearForm() {
  document.getElementById("SiteName").value = "";
  document.getElementById("SiteURL").value = "";
}
