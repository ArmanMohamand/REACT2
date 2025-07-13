const accesskey = "vRw6irBzBVqgIJvx3FfhMUHdOHY7JAlrMRz4O1GWejg";
const searchform = document.getElementById("searchform");
const searchbox = document.getElementById("searchbox");
const searchresult = document.getElementById("searchresult");
const showmorebtn = document.getElementById("show-morebtn");
let keyword = "";
let page = 1;
async function searchimage() {
  keyword = searchbox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  const responce = await fetch(url);
  const data = await responce.json();
  if (page === 1) {
    searchresult.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";

    imagelink.appendChild(image);
    searchresult.appendChild(imagelink);
  });
  showmorebtn.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchimage();
});
showmorebtn.addEventListener("click", () => {
  page++;
  searchimage();
});
