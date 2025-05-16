let nav2 = document.querySelector("#header #nav .nav3");
let menu = document.querySelector("#header #nav .ti-menu");
let subnav = document.querySelectorAll("#header #nav .subnav");
let as = document.querySelectorAll("#header #nav .nav2 .nav-list .list");
let bs = document.querySelectorAll("#header #nav .nav2 .nav-list .close");
let icon_search = document.querySelector("#header #nav .nav1 .search-btn i ");
let header = document.querySelector("#header #nav .mobile-header");
let searchtext = document.querySelector("    #header #nav .search-text");
let closesearch = document.querySelector(
  "    #header #nav .search-text .close-btn i"
);
let inpu = document.querySelector("#header #nav .search-text form input");

// console.log(searchtext);

document.addEventListener("click", (event) => {
  if (!nav2.contains(event.target)) {
    nav2.style.display = "none";
  }
});

menu.addEventListener("click", (event) => {
  event.stopPropagation();
  if (nav2.style.display === "block") {
    nav2.style.display = "none";
  } else {
    nav2.style.display = "block";
  }
});

// as.addEventListener("click", (event) => {
//   event.stopPropagation();
//   if (subnav.style.display === "none") {
//     subnav.style.display = "block";
//   } else {
//     subnav.style.display = "none";
//   }
// });

bs.forEach((item) => {
  item.addEventListener("click", (event) => {
    subnav.forEach((subItem) => {
      subItem.style.display = "none";
    });
  });
});

as.forEach((item) => {
  item.addEventListener("click", (event) => {
    subnav.forEach((subItem) => {
      if (item.contains(subItem)) {
        if (subItem.style.display === "block") {
          subItem.style.display = "none";
        } else {
          subItem.style.display = "block";
        }
      } else {
        subItem.style.display = "none";
      }
    });
  });
});

icon_search.addEventListener("click", (event) => {
  event.stopPropagation();
  header.style.display = "none";
  searchtext.style.display = "flex";
});

if (window.innerWidth > 1024) {
  header.style.display = "none";
  searchtext.style.display = "none";
  document.querySelector("#header #nav .search-text").style.display = "none";
  document.querySelector("#header #nav .nav3").style.display = "none";
}

closesearch.addEventListener("click", (event) => {
  event.stopPropagation();
  searchtext.style.display = "none";
  header.style.display = "flex";
});
