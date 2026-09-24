/**
 * 腳本邏輯 (script.js)
 * 包含動態載入 header.html、漢堡選單切換與自動高亮當前頁面
 */
document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");

  if (headerPlaceholder) {
    // 1. 自動動態載入 header.html
    fetch("header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("無法讀取 header.html 檔案");
        }
        return response.text();
      })
      .then((htmlData) => {
        headerPlaceholder.innerHTML = htmlData;
        initNavigation();
      })
      .catch((error) => {
        console.error("載入 Header 失敗:", error);
      });
  } else {
    initNavigation();
  }
});

/**
 * 初始化導覽列互動事件與當前頁面高亮
 */
function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-btn");

  // 1. 漢堡選單點擊切換
  if (hamburgerBtn && navbar) {
    hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navbar.classList.toggle("active");
      hamburgerBtn.classList.toggle("open");
    });

    // 點擊頁面其他地方時自動關閉選單
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navbar.classList.remove("active");
        hamburgerBtn.classList.remove("open");
      }
    });
  }

  // 2. 自動比對網址並加上 active 高亮效果
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
