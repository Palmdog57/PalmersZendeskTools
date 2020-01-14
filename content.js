//Make sure script only runs after page has loaded
var observer = new MutationObserver(resetTimer);
var timer = setTimeout(action, 1000, observer);
observer.observe(document, {childList: true, subtree: true});

function resetTimer(changes, observer) {
    clearTimeout(timer);
    timer = setTimeout(action, 1000, observer);
}


function action(o) {
    o.disconnect();


    //Add Google Icons
    if(!document.getElementById('id2')) {
    var link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    document.head.appendChild(link);
    }

    //Create div to expand sidebar
    var closetabs = document.createElement("DIV");
    closetabs.setAttribute("style", "cursor: pointer; padding-left: 18px; padding-top: 10px; cursor: context-menu;");
    closetabs.setAttribute("class", "tab-content-holder");

    //Create icon div
    var icon = document.createElement("DIV");
    icon.innerHTML = "<i class='material-icons'>toc</i>";
    icon.setAttribute("style", "font-size: 16px; color:#333333; float:left");

    //Create container for buttons
    var buttonContainer = document.createElement("DIV");
    buttonContainer.setAttribute("id", "buttonContainer");
    buttonContainer.setAttribute("style", "width:400px; height:500px; margin-top:20px; background-color:#e9ebed; cursor:context-menu; padding:10px; display:none; resize:both; overflow:auto;");

    //Add icon and text to sidebar div
    closetabs.appendChild(icon);
    closetabs.appendChild(buttonContainer);
    closetabs.addEventListener("click", expandDong, false);
    closetabs.addEventListener("contextmenu", closeDong, false);

    //Get zendesk sidebar by id
    var list = document.getElementById("main_navigation");

    //Insert before last sidebar button
    list.insertBefore(closetabs, list.lastElementChild);

    //Open the container onclick
    function expandDong() {
        var x = document.getElementById("buttonContainer");
        if (x.style.display === "none") {
            x.setAttribute("style", "width:400px; height:500px; margin-top:20px; background-color:#e9ebed; cursor:context-menu; padding:10px; display:block; resize:both; overflow:auto;");
      }
    }

    //Close the container onclick
    function closeDong() {
        var x = document.getElementById("buttonContainer");
        if (x.style.display === "block") {
            x.setAttribute("style", "width:400px; height:500px; margin-top:20px; background-color:#e9ebed; cursor:context-menu; padding:10px; display:none; resize:both; overflow:auto;");
        }
    }

    //Toggle button Vis
    function toggle_visibility(id) {
      var e = document.getElementById(id);
      if(e.style.display == 'inline'){
                 e.style.display = 'none';
                 }
      else {
         e.style.display = 'inline';
      }
    }
}