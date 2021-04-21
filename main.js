//animate the steps between the icons on the intro
const path1 = document.querySelectorAll(".path1");
const path2 = document.querySelectorAll(".path2");
const path3 = document.querySelectorAll(".path3");

if (window.matchMedia("(min-width: 1367px)").matches) {
  for (let i = 0; i < path1.length; i++) {
    path1[i].style.top = `${475 - i * 65}px`;
    path1[i].style.left = `${210 + i * 43}px`;
  }

  for (let i = 0; i < path2.length; i++) {
    path2[i].style.top = `${200 + i * 45}px`;
    path2[i].style.left = `${530 + i * 72}px`;
  }

  for (let i = 0; i < path3.length; i++) {
    path3[i].style.top = `${520 - i * 55}px`;
    path3[i].style.left = `${1270 + i * 48}px`;
  }
} else if (window.matchMedia("(max-width: 1366px)").matches) {

  for (let i = 0; i < path1.length; i++) {
    path1[i].style.top = `${250 - i * 35}px`;
    path1[i].style.left = `${180 + i * 40}px`;
  }

  for (let i = 0; i < path2.length; i++) {
    path2[i].style.top = `${100 + i * 37}px`;
    path2[i].style.left = `${490 + i * 57}px`;
    console.log(i);

      for (let j = 5; j < 8; j++ ){
        path2[j].style.display = 'none';
      }
  }

  for (let i = 0; i < path3.length; i++) {
    path3[i].style.top = `${270 - i * 32}px`;
    path3[i].style.left = `${880 + i * 42}px`;
  }
}

 window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1367px)").matches) {
    for (let i = 0; i < path1.length; i++) {
      path1[i].style.top = `${475 - i * 65}px`;
      path1[i].style.left = `${210 + i * 43}px`;
    }
  
    for (let i = 0; i < path2.length; i++) {
      path2[i].style.top = `${200 + i * 45}px`;
      path2[i].style.left = `${530 + i * 72}px`;

      for (let j = 5; j < 8; j++ ){
        path2[j].style.display = 'block';
      }
    }
  
    for (let i = 0; i < path3.length; i++) {
      path3[i].style.top = `${520 - i * 55}px`;
      path3[i].style.left = `${1270 + i * 48}px`;
    }
  } else if (window.matchMedia("(max-width: 1366px)").matches) {
  
    for (let i = 0; i < path1.length; i++) {
      path1[i].style.top = `${250 - i * 35}px`;
      path1[i].style.left = `${180 + i * 40}px`;
    }
  
    for (let i = 0; i < path2.length; i++) {
      path2[i].style.top = `${100 + i * 37}px`;
      path2[i].style.left = `${490 + i * 57}px`;
      console.log(i);
  
        for (let j = 5; j < 8; j++ ){
          path2[j].style.display = 'none';
        }
    }
  
    for (let i = 0; i < path3.length; i++) {
      path3[i].style.top = `${270 - i * 32}px`;
      path3[i].style.left = `${880 + i * 42}px`;
    }
  }
 })

//switch between light and dark themes
const switchBtn = document.querySelector("#switch");
const header = document.querySelector("#header");
const root = document.documentElement;
root.style.setProperty("--primary-color", "#F3CF7A");

switchBtn.addEventListener("click", () => {
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--primary-color"
    ) === "#F3CF7A"
  ) {
    root.style.setProperty("--primary-color", "#41210A");
    root.style.setProperty("--secondary-color", "#F3CF7A");
    root.style.setProperty("--primary-transparent", "rgba(65, 33, 10, 0.5)");
    root.style.setProperty(
      "--secondary-transparent",
      "rgba(243, 207, 122, 0.5)"
    );
    switchBtn.style.left = "25px";

    //change background image on mobile devices
    header.style.backgroundImage = 'url(assets/bg-mobile-dark.png)';

  } else {
    root.style.setProperty("--primary-color", "#F3CF7A");
    root.style.setProperty("--secondary-color", "#41210A");
    root.style.setProperty("--primary-transparent", "rgba(243, 207, 122, 0.5)");
    root.style.setProperty("--secondary-transparent", "rgba(65, 33, 10, 0.5)");
    switchBtn.style.left = "0px";

    //change background image on mobile devices
    header.style.backgroundImage = 'url(assets/bg-mobile.png)';
  }
});

//background opacity changes on hover (after the animation is done)
let headerTitle = document.querySelector(".main-title");
let bgAnimation = document.querySelector(".bg-animation");

setTimeout(() => {
  headerTitle.addEventListener("mouseover", () => {
    bgAnimation.style.opacity = "0.7";
  });

  headerTitle.addEventListener("mouseout", () => {
    bgAnimation.style.opacity = "0.3";
  });
}, 8000);

//smooth anchor transitions

function smoothScroll(section) {
  section.scrollIntoView({ behavior: "smooth" });
}

//faq dropdown
const faqArrow = document.querySelectorAll(".faq-arrow");

faqArrow.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "expand"
    );
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle(
      "show"
    );
  });
});
