// ==UserScript==
// @name         NewsNow Redirect Bypass
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Bypasses the redirect page on newsnow.co.uk
// @author       Jules
// @match        https://c.newsnow.co.uk/A/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const continueButton = document.querySelector('.continue-button');

    if (continueButton) {
        // The button has a countdown before it becomes active.
        // We'll poll to see when it becomes clickable.
        const clickInterval = setInterval(() => {
            // A button is considered "active" if it's not disabled.
            if (!continueButton.disabled) {
                continueButton.click();
                clearInterval(clickInterval);
            }
        }, 100); // Check every 100 milliseconds
    }
})();
