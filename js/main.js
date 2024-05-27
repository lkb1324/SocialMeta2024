// Menu show y hidden
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// 点一下就会不见
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// 在每个图标 就显示高亮
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // if (sectionId == 'callforpapers'){
    //         document.getElementById('current').innerHTML = 'Call for papers'
    // } else if (sectionId == 'home'){
    //     document.getElementById('current').innerHTML = 'Home'
    // } else if (sectionId == 'submission'){
    //     document.getElementById('current').innerHTML = 'Sumbissiom'
    // } else if (sectionId == 'organizers'){
    //     document.getElementById('current').innerHTML = 'Organizers'
    // } else if (sectionId == 'history'){
    //     document.getElementById('current').innerHTML = 'History'
    // } else if (sectionId == 'program'){
    //     document.getElementById('current').innerHTML = 'Program'
    // } else if (sectionId == 'keynote'){
    //     document.getElementById('current').innerHTML = 'Keynote'
    // }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
      // if (sectionId == 'callforpapers'){
      //     document.getElementById('current').innerHTML = 'Call for papers'
      // } else if (sectionId == 'home'){
      //     document.getElementById('current').innerHTML = 'Home'
      // } else if (sectionId == 'submission'){
      //     document.getElementById('current').innerHTML = 'Sumbissiom'
      // } else if (sectionId == 'organizers'){
      //     document.getElementById('current').innerHTML = 'Organizers'
      // } else if (sectionId == 'history'){
      //     document.getElementById('current').innerHTML = 'History'
      // } else if (sectionId == 'program'){
      //     document.getElementById('current').innerHTML = 'Program'
      // } else if (sectionId == 'keynote'){
      //     document.getElementById('current').innerHTML = 'Keynote'
      // }
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// change background header
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// show scroll top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// dark theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentIheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// 获取屏幕高度宽度
window.addEventListener("scroll", handleScroll);
function handleScroll() {
  // 获取页面现在所在的高度
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  console.log(scrollTop);
  //   可以根据你之前添加的网页锚点 获取到比较准确的屏幕高度值
  if (scrollTop < 667) {
    // document获取到home的文本然后修改成当前对应板块的内容
    document.getElementById("current").innerText = "Home";
  } else if (scrollTop >= 667 && scrollTop < 2704) {
    document.getElementById("current").innerText = "Call for papers";
  } else if (scrollTop >= 2704 && scrollTop < 3985.5) {
    document.getElementById("current").innerText = "Submission";
  } else if (scrollTop >= 3985.5 && scrollTop < 6634) {
    document.getElementById("current").innerText = "Organizers";
  } else if (scrollTop >= 6634 && scrollTop < 7420) {
    document.getElementById("current").innerText = "History";
  } else if (scrollTop >= 7420 && scrollTop < 8359) {
    document.getElementById("current").innerText = "Keynote";
  }
}

function PopUp_close() {
  document.getElementById("PopUp").style.display = "none";
}

function ShowPop_up() {
  document.getElementById("PopUp").style.display = "flex";
}
