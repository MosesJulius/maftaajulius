document.addEventListener('DOMContentLoaded', function() {
    // a. (Big Bird Yellow): Apply style to #cookie-header
    var cookieHeader = document.getElementById('cookie-header');
    cookieHeader.style.color = '#f7f16d'; 

    // b. (Count Chocula): Count cookies and update #cookie-count
    var cookies = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCount = cookies.length;
    var cookieCountElement = document.getElementById('cookie-count');
    cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
    cookieCountElement.style.color = '#f7f16d';

    // c. (Cookie Monster hungry): Remove last cookie every 30 seconds
    setInterval(function() {
        if (cookieCount > 0) {
            var lastCookie = document.querySelector('#cookie-jar .cookie:last-child');
            lastCookie.parentNode.removeChild(lastCookie);
            cookieCount--;
            cookieCountElement.textContent = "There are " + cookieCount + " cookie(s) in the cookie jar!";
        }
    }, 30000);
});