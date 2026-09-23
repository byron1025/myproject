// 頁籤切換功能
function switchTab(event, tabId) {
  // 隱藏所有頁籤內容
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // 移除所有導覽按鈕的 active 狀態
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // 顯示當前點擊的頁籤與啟用按鈕樣式
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');

  // 手機版點擊選單項目後自動收起漢堡選單
  const navbar = document.getElementById('navbar');
  navbar.classList.remove('show');
}

// 漢堡選單開關功能
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbar = document.getElementById('navbar');

  hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
});
