// 检测用户系统的颜色模式
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// 设置默认主题为用户系统的颜色模式
const initialTheme = userPrefersDark ? "dark" : "light";
document.body.setAttribute("data-theme", initialTheme);

// 获取切换按钮元素
const BUTTON = document.querySelector(".components");

// 切换主题函数
const TOGGLE = () => {
  // 获取当前主题
  const willChangeMode = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  
  // 设置新的主题
  document.body.setAttribute("data-theme", willChangeMode);
};

// 为按钮添加点击事件监听器
BUTTON.addEventListener("click", TOGGLE);
