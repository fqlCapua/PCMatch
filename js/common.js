/*
 *iframe自适应高度
 *
 *
 */
function reinitIframe(obj) {
    var iframe = document.getElementById(obj);

    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;

        var height = Math.max(bHeight, dHeight);
        iframe.height = height;
    } catch (e) {}
}
window.setInterval("reinitIframe('header')", 100);
window.setInterval("reinitIframe('footer')", 100);
window.setInterval("reinitIframe('main')", 100);

