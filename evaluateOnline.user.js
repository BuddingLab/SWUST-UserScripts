// ==UserScript==
// @name          SWUST 教务处自动完成教学质量评价学生问卷
// @author        lengthmin <lengthmin@gmail.com>
// @namespace     dean.swust.evaluateOnline
// @version       1.1
// @description   自动完成教学质量评价学生问卷
// @include       https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:DEFAULT_EVENT
// @include       https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:evaluateResponse*
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// ==/UserScript==

var setting = {
  wait: 3000,
  timeout: 3000,
};

function eventHandler() {
  if (
    location.href ==
    "https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:DEFAULT_EVENT"
  ) {
    document
      .querySelectorAll(
        "#Questionnaire > table tr.editRows > td:nth-child(6) > a"
      )
      .forEach((node, index) => {
        if (index == 0) {
          node.click();
        }
      });
  } else {
    setInterval(evaluateClass, setting.timeout);
  }
}

function evaluateClass() {
  setTimeout(() => {
    document
      .querySelectorAll(
        "#sheetTable > tbody > tr > td.quota.ltr > a[data-opt=1]"
      )
      .forEach((node) => {
        node.click();
      });
    document.querySelector("#CourseComment").value = "无";
    document.querySelector("#postTrigger").click();
  }, setting.wait);
}

// 检测 DOMContentLoaded 是否已完成
if (document.readyState !== "loading") {
  eventHandler();
} else {
  document.addEventListener("DOMContentLoaded", eventHandler);
}
