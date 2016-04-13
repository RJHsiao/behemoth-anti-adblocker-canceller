// ==UserScript==
// @name               Behemoth Anti-AdBlocker Canceller
// @name:zh-TW         貝西摩斯廣告過濾反制消除器
// @description        This userscript is used to cancel the anti-AdBlock mechanism in m.gamer.com.tw
// @description:zh-TW  AdBlock無罪！反抗有理！貝西摩斯廣告過濾反制消除器幫你對抗巴哈姆特電玩資訊站手機版網站那太離譜太超過的廣告過濾反制機制，讓你無須停用AdBlock套件仍可正常瀏覽！
// @namespace          http://rjhsiao.me/gmscripts
// @version            1.0
// @author             RJ Hsiao
// @downloadURL        
// @updateURL          
// @supportURL         https://github.com/RJHsiao/behemoth-anti-adblocker-canceller
// @license            gpl
// @compatible         chrome
// @match              http://m.gamer.com.tw/home/creationDetail.php?sn=*
// @grant              none
// ==/UserScript==

(function() {
    'use strict';

    var parser = new DOMParser();
    var $ = jQuery;

    $.get(location.href).done(function(data, textStatus, jqXHR){
        if ($("header").length > 0) {
            return;
        }
        var html = parser.parseFromString(data, "text/html");
        var body = $(html.body);
        body.find("script:last").remove();
        document.body.innerHTML = body.html();
    });
})();