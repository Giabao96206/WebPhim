const products = document.querySelectorAll(".section1-film-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    root: document.querySelector(".section1-film"),
    rootMargin: "0px",
    threshold: 0.6,
  }
);

products.forEach((product) => {
  observer.observe(product);
});

const a = document.querySelector(
  ".main-content .content .container .about1-movie .text .list-button li:nth-child(1) a"
);

const b = document.querySelector(
  ".main-content .content .container .movie .trailer"
);

const c = document.querySelector(
  ".main-content .content .container .movie .trailer iframe"
);

function getYouTubeVideoId(url) {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

a.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  const videoId = getYouTubeVideoId(a.href);
  if (!videoId) {
    alert("Không có trailer video");
    return;
  }
  c.src = `https://www.youtube.com/embed/${videoId}`;
  b.style.display = "block"; // Hiển thị iframe
  b.scrollIntoView({
    behavior: "smooth",
  });
});

let scoreElement = document.querySelector(
  `.main-content .content .container .more-movie .social .vote .stars-inner`
);
let score = scoreElement.getAttribute("leng");
console.log(score);
function updateStars(score) {
  const widthPercent = Math.max(0, Math.min(score * 10, 100)); // giới hạn từ 0 đến 100%
  document.getElementById("stars-inner").style.width = widthPercent + "%";
}

updateStars(score);
