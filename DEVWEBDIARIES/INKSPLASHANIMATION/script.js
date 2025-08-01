// Add cache-busting parameter to mask image URL
document.addEventListener('DOMContentLoaded', function() {
    const cacheBuster = Date.now();
    const style = document.createElement('style');
    style.innerHTML = `
        .container::before {
            mask-image: url("./images/ezgif-3-6b6c1ea089.gif?reload=${cacheBuster}") !important;
        }
    `;
    document.head.appendChild(style);
});