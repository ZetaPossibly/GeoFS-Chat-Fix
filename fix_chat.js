// ==UserScript==
// @name         GeoFS Chat Fix
// @namespace
// @version      0.0.1
// @description  Fixes the removal of the t keybind for opening the chat window in GeoFS.
// @author       Zeta
// @license      
// @match        https://www.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// ==/UserScript==


(function() {
    window.addEventListener("keydown", function(e) {
        // Only trigger when no input field is focused
        if (document.activeElement.tagName.toLowerCase() !== "input" &&
            document.activeElement.tagName.toLowerCase() !== "textarea") {
            
            // T key (keyCode 84)
            if (e.keyCode === 84) {
                ui.chat.showInput();
                e.stopPropagation();
            }
        }
    });
})();
