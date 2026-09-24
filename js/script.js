
// =========================================================
// BYRON STUDIO — 導覽列 / 漢堡選單互動
// 每個網頁都引入這支 script.js,不需要重複寫邏輯
// =========================================================

(function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  const overlay = document.getElementById("nav-overlay");

  if (!toggle || !nav) return;

  const links = nav.querySelectorAll(".nav-link");
  const breakpoint = 860;

  function openMenu() {
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "關閉選單");
  }

  function closeMenu() {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "開啟選單");
  }

  toggle.addEventListener("click", function () {
    const isOpen = document.body.classList.contains("nav-open");
    isOpen ? closeMenu() : openMenu();
  });

  // 點擊任一連結後自動收合(手機上點了就該跳頁/關閉選單)
  links.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // 點擊選單外的遮罩也關閉選單
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // 按 Esc 關閉
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // 視窗被拉大回到桌機寬度時,重設選單狀態,避免殘留展開樣式
  window.addEventListener("resize", function () {
    if (window.innerWidth > breakpoint) closeMenu();
  });
})();
