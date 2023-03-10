//	URL SHORTENER
$(function() {
    $(".post-body a").each(function() {
        1 == this.childNodes.length && 3 == this.childNodes[0].nodeType && (this.href == this.childNodes[0].nodeValue && 55 < this.childNodes[0].nodeValue.length) && (this.childNodes[0].nodeValue = this.childNodes[0].nodeValue.substr(0, 39) + "…" + this.childNodes[0].nodeValue.substr(-10))
    })
});