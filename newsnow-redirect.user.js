// ==UserScript==
// @name         NewsNow Redirect Bypass
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Bypasses the redirect page on newsnow.co.uk
// @author       Jules
// @match        https://c.newsnow.co.uk/A/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // The form action on the page suggests a direct URL can be constructed.
    // The current path is /A/<story_id>
    // The form action, which triggers the actual redirect, is /A/3/<story_id>.
    // By changing the URL path directly, we can skip the interstitial page and its countdown entirely.
    const newPath = window.location.pathname.replace('/A/', '/A/3/');

    // Check if the replacement was successful to avoid infinite redirect loops
    // if the script is ever run on a page where the pattern doesn't match.
    if (newPath !== window.location.pathname) {
        // This will preserve the query string and immediately navigate to the next step.
        window.location.pathname = newPath;
    }
})();
