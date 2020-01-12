if (!("Notification" in window)) {
  alert("This browser does not support desktop notification");
} else {
  if (Notification.permission !== "denied" && Notification.permission !== "granted" ) {
     Notification.requestPermission();
  }
}

var targetNode = document.getElementById('notification');
var observer = new MutationObserver(function(){
    if(targetNode.style.display != 'none'){
        // doSomething
        console.log('triggered');
        var notification = new Notification("You're Up!");
    }
});

observer.observe(targetNode, { attributes: true, childList: true });


