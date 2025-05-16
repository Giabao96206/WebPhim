const films = {
  1: document.querySelector(
    "#main-content .content .container .section2 .list-film[data-id='1']"
  ),
  2: document.querySelector(
    "#main-content .content .container .section2 .list-film[data-id='2']"
  ),
  3: document.querySelector(
    "#main-content .content .container .section2 .list-film[data-id='3']"
  ),
  4: document.querySelector(
    "#main-content .content .container .section2 .list-film[data-id='4']"
  ),
  5: document.querySelector(
    "#main-content .content .container .section2 .list-film[data-id='5']"
  ),
};

const block2 = {
  1: document.querySelector(
    "#main-content .content .container .section2[block='two'] .list-film[data-id='1']"
  ),
  2: document.querySelector(
    "#main-content .content .container .section2[block='two'] .list-film[data-id='2']"
  ),
  3: document.querySelector(
    "#main-content .content .container .section2[block='two'] .list-film[data-id='3']"
  ),
  4: document.querySelector(
    "#main-content .content .container .section2[block='two'] .list-film[data-id='4']"
  ),
  5: document.querySelector(
    "#main-content .content .container .section2[block='two'] .list-film[data-id='5']"
  ),
};

const block3 = {
  1: document.querySelector(
    "#main-content .content .container .section2[block='three'] .list-film[data-id='1']"
  ),
  2: document.querySelector(
    "#main-content .content .container .section2[block='three'] .list-film[data-id='2']"
  ),
  3: document.querySelector(
    "#main-content .content .container .section2[block='three'] .list-film[data-id='3']"
  ),
  4: document.querySelector(
    "#main-content .content .container .section2[block='three'] .list-film[data-id='4']"
  ),
  5: document.querySelector(
    "#main-content .content .container .section2[block='three'] .list-film[data-id='5']"
  ),
};

const block5 = {
  1: document.querySelector(
    "#main-content .content .container .section2[block='five'] .list-film[data-id='1']"
  ),
  2: document.querySelector(
    "#main-content .content .container .section2[block='five'] .list-film[data-id='2']"
  ),
  3: document.querySelector(
    "#main-content .content .container .section2[block='five'] .list-film[data-id='3']"
  ),
};
const country = {
  hanquoc: document.querySelector(
    "#main-content .content .container .section2[block='three'] .section2-subheading li a[data-country='hanquoc']"
  ),
  trungquoc: document.querySelector(
    "#main-content .content .container .section2[block='three'] .section2-subheading li a[data-country='trungquoc']"
  ),
  aumi: document.querySelector(
    "#main-content .content .container .section2[block='three'] .section2-subheading li a[data-country='aumi']"
  ),
  phimbofull: document.querySelector(
    "#main-content .content .container .section2[block='three'] .section2-subheading li a[data-country='phimbofull']"
  ),
};
const years = {
  year2024: document.querySelector(
    "#main-content .content .container .section2[block='two'] .section2-subheading li a[data-year='2024']"
  ),
  year2023: document.querySelector(
    "#main-content .content .container .section2[block='two'] .section2-subheading li a[data-year='2023']"
  ),
  year2022: document.querySelector(
    "#main-content .content .container .section2[block='two'] .section2-subheading li a[data-year='2022']"
  ),
  year2021: document.querySelector(
    "#main-content .content .container .section2[block='two'] .section2-subheading li a[data-year='2021']"
  ),
};

const categories = {
  hanhdong: document.querySelector(
    "#main-content .content .container .section2 .section2-subheading li a[data-carotype='hanhdong']"
  ),
  hinhsu: document.querySelector(
    "#main-content .content .container .section2 .section2-subheading li a[data-carotype='hinhsu']"
  ),
  kinhdi: document.querySelector(
    "#main-content .content .container .section2 .section2-subheading li a[data-carotype='kinhdi']"
  ),
  haihuoc: document.querySelector(
    "#main-content .content .container .section2 .section2-subheading li a[data-carotype='haihuoc']"
  ),
};

const phimviet = {
  vietnamle: document.querySelector(
    "#main-content .content .container .section2[block='five'] .section2-subheading li a[data-type='phimle']"
  ),
  vietnambo: document.querySelector(
    "#main-content .content .container .section2[block='five'] .section2-subheading li a[data-type='phimbo']"
  ),
};

function HienThi(event, showID, activeCategory) {
  event.preventDefault();
  Object.values(films).forEach((film) => (film.style.display = "none"));
  const loader = document.querySelector(
    "#main-content .content .container .loader"
  );
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    if (films[showID]) {
      films[showID].style.display = "block";
    }
    Object.values(categories).forEach(
      (category) => (category.style.backgroundColor = "")
    );
    if (categories[activeCategory]) {
      categories[activeCategory].style.backgroundColor = "red";
    }
  }, 2000);
}

function HienThi2(event, showID, activeCategory) {
  event.preventDefault();
  Object.values(block2).forEach((film) => (film.style.display = "none"));
  const loader = document.querySelector(
    "#main-content .content .container .section2[block='two'] .loader"
  );
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    if (block2[showID]) {
      block2[showID].style.display = "block";
    }
    Object.values(years).forEach((year) => (year.style.backgroundColor = ""));
    if (categories[activeCategory]) {
      categories[activeCategory].style.backgroundColor = "red";
    } else if (years[activeCategory]) {
      years[activeCategory].style.backgroundColor = "red";
    }
  }, 2000);
}

function HienThi3(event, showID, activeCategory) {
  event.preventDefault();
  Object.values(block3).forEach((item) => {
    item.style.display = "none";
  });
  const loader = document.querySelector(
    "#main-content .content .container .section2[block='three'] .loader"
  );
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    if (block3[showID]) {
      block3[showID].style.display = "block";
    }
    Object.values(country).forEach((item) => (item.style.backgroundColor = ""));
    if (categories[activeCategory]) {
      categories[activeCategory].style.backgroundColor = "red";
    } else if (country[activeCategory]) {
      country[activeCategory].style.backgroundColor = "red";
    }
  }, 2000);
}

function HienThi5(event, showID, activeCategory) {
  event.preventDefault();
  Object.values(block5).forEach((item) => {
    item.style.display = "none";
  });
  const loader = document.querySelector(
    "#main-content .content .container .section2[block='five'] .loader"
  );
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    if (block5[showID]) {
      block5[showID].style.display = "block";
    }
    Object.values(phimviet).forEach(
      (item) => (item.style.backgroundColor = "")
    );
    if (phimviet[activeCategory]) {
      phimviet[activeCategory].style.backgroundColor = "red";
    }
  }, 2000);
}

categories.hanhdong.addEventListener("click", (event) =>
  HienThi(event, 2, "hanhdong")
);
categories.hinhsu.addEventListener("click", (event) =>
  HienThi(event, 3, "hinhsu")
);
categories.kinhdi.addEventListener("click", (event) =>
  HienThi(event, 4, "kinhdi")
);
categories.haihuoc.addEventListener("click", (event) => {
  HienThi(event, 5, "haihuoc");
});

years.year2024.addEventListener("click", (event) =>
  HienThi2(event, 2, "year2024")
);

years.year2023.addEventListener("click", (event) =>
  HienThi2(event, 3, "year2023")
);
years.year2022.addEventListener("click", (event) =>
  HienThi2(event, 4, "year2022")
);

years.year2021.addEventListener("click", (event) =>
  HienThi2(event, 5, "year2021")
);

country.hanquoc.addEventListener("click", (event) =>
  HienThi3(event, 2, "hanquoc")
);
country.trungquoc.addEventListener("click", (event) =>
  HienThi3(event, 3, "trungquoc")
);
country.aumi.addEventListener("click", (event) => HienThi3(event, 4, "aumi"));
country.phimbofull.addEventListener("click", (event) =>
  HienThi3(event, 5, "phimbofull")
);

phimviet.vietnamle.addEventListener("click", (event) =>
  HienThi5(event, 2, "vietnamle")
);

phimviet.vietnambo.addEventListener("click", (event) =>
  HienThi5(event, 3, "vietnambo")
);
