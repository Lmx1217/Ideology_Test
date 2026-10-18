/*!
 * @license
 * Day-night-toggle-button (simplified version)
 * Source: https://github.com/Xiumuzaidiao/Day-night-toggle-button
 * SPDX-License-Identifier: ISC
 *
 * ISC License
 *
 * Copyright(c)2024,Xiumuzaidiao
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
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
