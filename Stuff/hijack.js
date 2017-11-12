chrome.webNavigation.onBeforeNavigate.addListener(
  function(callback){
  console.log(callback.url);
  chrome.tabs.executeScript({
    code: 'window.onload = function() {	location.href = "http://martintuzim.com/saved.html";}'
  });
});
