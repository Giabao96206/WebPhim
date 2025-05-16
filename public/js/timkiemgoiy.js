let input = document.querySelector("#header #nav .nav2 form input");
let goiy = document.querySelector("#header #nav .nav2 form .goiy");
let inputtable = document.querySelector("#header #nav .search-text input");
let goiytable = document.querySelector("#header #nav .search-text form .goiy");
const loader = document.querySelector(
  "#header #nav .search-text form .goiy .loader"
);

console.log(loader);

function hamgoiy(inputEl, resultBox, loaderEl) {
  let timeout = null;
  let currentController = null;

  inputEl.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const keyword = inputEl.value.trim();

      if (!keyword) {
        resultBox.innerHTML = "";
        resultBox.innerHTML = `<img src="../../../../imgage/Bean Eater@1x-1.0s-200px-200px.svg" alt="" id="#loader" class="loader" ">`;
        resultBox.style.display = "none";
        loaderEl.style.display = "none";
        return;
      }

      // Hủy request cũ nếu còn đang xử lý
      if (currentController) currentController.abort();
      currentController = new AbortController();
      // Lấy signal từ controller
      const signal = currentController.signal;

      loaderEl.style.display = "block";
      resultBox.style.display = "block";

      try {
        const response = await fetch(
          `/api/goi-y?q=${encodeURIComponent(keyword)}`,
          { signal }
        );
        const data = await response.json();

        loaderEl.style.display = "none";

        if (response.ok && Array.isArray(data)) {
          resultBox.innerHTML = data
            .map(
              (item) => `
            <li>
              <a href="/watch/${item.slug}"></a>
              <div class="anh">
                 <img src="https://phimimg.com/${item.poster_url}" alt="${item.name} onerror='this.src=\"../imgage/coco.jpg"">
              </div>
              <div>
                 <p class="vie">${item.name}</p>
                 <p class="eng">${item.name}</p>
              </div>
            </li>
            `
            )
            .join("");
        } else {
          resultBox.innerHTML = "<li>No results found</li>";
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          loaderEl.style.display = "none";
          resultBox.innerHTML = "<li>Error loading suggestions</li>";
        }
      }
    }, 200);
  });
}

hamgoiy(input, goiy, loader);
hamgoiy(inputtable, goiytable, loader);
document.addEventListener("click", (e) => {
  if (!input.contains(e.target) && !goiy.contains(e.target)) {
    goiy.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (!inputtable.contains(e.target) && !goiytable.contains(e.target)) {
    goiytable.style.display = "none";
  }
});
