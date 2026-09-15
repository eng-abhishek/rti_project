document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    if (form) {
        
        form.addEventListener("submit", function (e) {
            const passwordField = document.getElementById("password");
           
            const rawPassword = passwordField.value;
            

            const rawKey = document
                .querySelector('meta[name="salt-key"]')
                .getAttribute("content");
            const fullKey = rawKey.padStart(16, rawKey); // Should be 16 chars
            const key = CryptoJS.enc.Utf8.parse(fullKey);
            const iv = CryptoJS.enc.Utf8.parse(fullKey);
            
            const encrypted = CryptoJS.AES.encrypt(rawPassword, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            }).toString();
            passwordField.value = encrypted;

        });
    }
});

// sidebar script 
const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});
// End sidebar


document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.dashboard-nav-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent event bubbling

            // Toggle the tooltip-active class on the clicked item
            if (this.classList.contains('tooltip-active')) {
                this.classList.remove('tooltip-active');
            } else {
                // Remove active class from other items
                menuItems.forEach(el => el.classList.remove('tooltip-active'));
                this.classList.add('tooltip-active');
            }
        });
    });

    // Close the tooltip when clicking outside
    document.addEventListener('click', function () {
        menuItems.forEach(el => el.classList.remove('tooltip-active'));
    });
});