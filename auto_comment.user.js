// ==UserScript==
// @name          SWUST自动评价
// @author	      lengthmin
// @namespace     lengthmin.pingjia
// @version  	  1.0
// @description   自动评价
// @require https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @include       https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:DEFAULT_EVENT
// @include       https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:evaluateResponse*
// @grant GM_setClipboard
// @grant GM_xmlhttpRequest
// ==/UserScript==

var setting = {
  wait: 3000,
  timeout: 3000,
  count: 0
};
$(document).ready(() => {
  if (
    location.href ==
    "https://matrix.dean.swust.edu.cn/acadmicManager/index.cfm?event=evaluateOnline:DEFAULT_EVENT"
  ) {
    $("#Questionnaire > table tr.editRows > td:nth-child(6) > a").each(
      (index, value) => {
        console.log($(value));
        if (index == 0) {
          $(value)[0].click();
        }
      }
    );
  } else {
    setInterval(evaluateClass, setting.timeout);
  }
});

function evaluateClass() {
  setTimeout(() => {
    $("#sheetTable > tbody > tr > td.quota.ltr > a[data-opt=1]").each(
      (index, value) => {
        $(value)[0].click();
      }
    );
    $("#CourseComment")[0].value = "无";
    $("#postTrigger")[0].click();
  }, setting.wait);
}
