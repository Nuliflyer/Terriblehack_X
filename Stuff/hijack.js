var loaded = false;
var loaded2 = false;
var safewebsite = "paypal.com";
var safewebsite2 = "paypal.me";
var audio = new Audio('sound/nope.mp3');

chrome.webNavigation.onCompleted.addListener(function (details) {
  console.log(details);
  if(details.url != "http://martintuzim.com/saved.html") {
  console.log("Website loaded!");
  loaded = true;
} else { loaded = false;}
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)  {
 console.log("l1:" + loaded + ",l2:" + loaded2);
  if(loaded && loaded2 && !tab.url.includes(safewebsite) && !tab.url.includes(safewebsite2)){
  console.log(tabId);
  try{
  var myNewUrl = "http://martintuzim.com/saved.html";
  console.log(tab);
  if(tab.url != myNewUrl && loaded) {
    loaded = false;
    loaded2 = false;
    console.log("Not on saved site, switch to it!");
    audio.play();
    chrome.tabs.update(tabId, {url: myNewUrl});
}
} catch (e) {
  console.log("Err:" + e);
}
}
if(loaded){
  loaded2 = true;
}
});
