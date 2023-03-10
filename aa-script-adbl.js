//	ADBLOCKER
//	Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
	
//	Select the desired elements
  const selector = '#main-user-menu a[href^="/u"]';
  const elements = document.querySelectorAll(selector);

//	Apply the desired styles to matching elements
  elements.forEach(element => {
    document.querySelector('#wrap > div[style*="max-height"] iframe:first-of-type').style.display = 'none';
    document.querySelectorAll('#wrap > div[style*="height"], #wrap > .cp-sidebar.advanced-profile > div[style*="height"]').forEach(el => {
      el.style.display = 'none';
      el.style.height = '0px';
    });
  });
});