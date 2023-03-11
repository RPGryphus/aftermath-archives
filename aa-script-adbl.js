//	ADBLOCKER
document.addEventListener('DOMContentLoaded', function() {
  const userMenuLink = document.querySelector('#main-user-menu a[href^="/u"]');
  if (userMenuLink) {
    const wrap = document.querySelector('#wrap');
    const ads = wrap.querySelectorAll('div[style*="max-height"] iframe:first-of-type, div[style*="height"]:first-child, .cp-sidebar.advanced-profile > div[style*="height"]');
    const css = '.ads, .cp-sidebar.advanced-profile > div[style*="height"] { display: none !important; }';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
    ads.forEach(ad => {
      ad.parentNode.removeChild(ad);
    });
  }
});