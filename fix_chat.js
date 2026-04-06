// ==UserScript==
// @name         GeoFS Chat Fix
// @namespace
// @version      0.0.3
// @description  Fixes the removal of the t keybind for opening the chat window in GeoFS. Now with lower latency!
// @author       Zeta
// @license
// @updateURL    https://raw.githubusercontent.com/ZetaPossibly/GeoFS-Chat-Fix/refs/heads/main/fix_chat.js
// @downloadURL  https://raw.githubusercontent.com/ZetaPossibly/GeoFS-Chat-Fix/refs/heads/main/fix_chat.js
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// ==/UserScript==


(function() {
    window.addEventListener("keydown", function(e) {
        // Only trigger when no input field is focused
        if (document.activeElement.tagName.toLowerCase() !== "input" &&
            document.activeElement.tagName.toLowerCase() !== "textarea") {

            if (e.key === "t" || e.key === "T") {
                e.preventDefault();
                e.stopPropagation();
                ui.chat.showInput();
            }
        }
    });
})();
