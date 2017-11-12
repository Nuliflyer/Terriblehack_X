chrome.webNavigation.onBeforeNavigate.addListener(
  function(callback){
  console.log(callback.url);

//  var rule = {
//    conditions: []
//    actions: [window.location="http://www.tutorialspoint.com"]
//  }

});
