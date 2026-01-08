// ==UserScript==
// @name         NewsNow Redirect Bypass
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bypasses the redirect page on newsnow.co.uk
// @author       Jules
// @match        https://c.newsnow.co.uk/A/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const continueButton = document.querySelector('.continue-button');
    if (continueButton) {
        continueButton.click();
    }
})();
