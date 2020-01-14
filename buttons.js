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

    //Create closetabs div
    var closetabs = document.createElement("DIV");
    closetabs.setAttribute("style", "cursor: pointer; padding-left: 18px; padding-top: 10px; cursor: context-menu;");
    closetabs.setAttribute("class", "tab-content-holder");

    //Create icon div
    var icon = document.createElement("DIV");
    icon.innerHTML = "<i class='material-icons'>toc</i>";
    icon.setAttribute("style", "font-size: 16px; color:#333333; float:left");

    //Create container
    var buttonContainer = document.createElement("DIV");
    buttonContainer.setAttribute("id", "buttonContainer");
    buttonContainer.setAttribute("style", "width:400px; height:500px; margin-top:20px; background-color:#e9ebed; cursor:context-menu; padding:10px; display:none; resize:both; overflow:auto;");

    //Add icon and text to closetabs div
    closetabs.appendChild(icon);
    closetabs.appendChild(buttonContainer);
    closetabs.addEventListener("click", expandDong, false);
    closetabs.addEventListener("contextmenu", closeDong, false);

    //Get zendesk sidebar bar by id
    var list = document.getElementById("main_navigation");

    //Insert before Add Button
    list.insertBefore(closetabs, list.lastElementChild);

    //Expand the container on click
    function expandDong() {
        var x = document.getElementById("buttonContainer");
        if (x.style.display === "none") {
            x.setAttribute("style", "width:400px; height:500px; margin-top:20px; background-color:#e9ebed; cursor:context-menu; padding:10px; display:block; resize:both; overflow:auto;");
      }
    }
    
    //Collapse the container onclick
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

/* -------------------------------------------------------------------------- */
/*                             CREATE THE BUTTONS                             */
/* -------------------------------------------------------------------------- */
    //Create heading 1
    function addHeading1(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style',' width:100% ; font-family: arial; padding: 5px; font-weight: bold; font-size: 10; color: white; background-color: #c79005; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

    //Create button 1
    function addButtonGold(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style','font-family: arial; padding: 5px; font-size: 10; color: white; background-color: #c79005; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;  margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

/* -------------------------------------------------------------------------- */

    //Create heading
    function addHeading2(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style',' width:100% ; font-family: arial; padding: 5px; font-weight: bold; font-size: 10; color: white; background-color: #8B0000; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

    //Create button
    function addButtonRed(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style','font-family: arial; padding: 5px; font-size: 10; color: white; background-color: #8B0000; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;  margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

/* -------------------------------------------------------------------------- */
    //Create heading
    function addHeading3(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style',' width:100% ; font-family: arial; padding: 5px; font-weight: bold; font-size: 10; color: white; background-color: #6600CC; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

    //Create button
    function addButtonPurple(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style','font-family: arial; padding: 5px; font-size: 10; color: white; background-color: #6600CC; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;  margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

    /* -------------------------------------------------------------------------- */
    //Create heading
    function addHeading4(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style',' width:100% ; font-family: arial; padding: 5px; font-weight: bold; font-size: 10; color: white; background-color: #006400; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

    //Create button
    function addButtonGreen(container, text, onclickFunc, color, bgColor) {
        // Create a new button
        var buttonnode= document.createElement('input');

        // Set some generic attributes
        buttonnode.setAttribute('type','button');
        buttonnode.setAttribute('name',text);
        buttonnode.setAttribute('value',text);
        buttonnode.setAttribute('style','font-family: arial; padding: 5px; font-size: 10; color: white; background-color: #006400; cursor:copy; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px;  margin-left: 5px; margin-bottom: 2px;');

        // Attach the event
        container.appendChild(buttonnode)
        buttonnode.addEventListener("click", onclickFunc, true);

        // Return it
        return buttonnode;
    }

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */


    //Set response
    function setResponse(newText) {
        x = document.getElementsByClassName("editor zendesk-editor--rich-text-comment");
        x[0].innerHTML = newText;
    }

    //Create a toolbar div
    function createDiv(idString,container) {
        var newDiv = document.createElement('div');
        newDiv.id = idString;
        newDiv.style.marginTop = '5px';
        newDiv.style.marginBottom = '5px';
        newDiv.style.paddingTop = '5px';
        return newDiv;
    }

    //Grab ticket body
    var tbc = document.getElementsByClassName("editor zendesk-editor--rich-text-comment");
    var tb = tbc[0];
    console.log("PalmersTools returned: ", tbc);

    //Enable for debugging
    function getInfo(){
        var commentBody = document.getElementsByClassName("editor zendesk-editor--rich-text-comment");
        console.log("THE COLLECTION: ", commentBody);
        console.log("COLLECTION LENGTH: ", commentBody.length);
    }

/* ---------------------------------- HEADERS --------------------------------- */
    //Create the Greeting header
    var gh = createDiv('buttonContainer, f_1');
    var gh = document.createElement('div');
    gh.style.display = 'block';

    //Create the Greeting
    var g = createDiv('buttonContainer, gh');
    var g = document.createElement('div');
    g.id = 'g';
    g.style.display = 'none';



    //Create the Prov Header
    var tkh = createDiv('funcBar, f_l');
    var tkh = document.createElement('div');
    tkh.style.display = 'block';	
	
    //Create the Prov
    var tk = createDiv('funcBar, tkh');
    var tk = document.createElement('div');
    tk.id = 'tk';
    tk.style.display = 'none';


    
    //Create the Faults Header
    var prob = createDiv('funcBar, f_l');
    var prob = document.createElement('div');
    prob.style.display = 'block';	
	
    //Create the Faults
    var pb = createDiv('funcBar, prob');
    var pb = document.createElement('div');
    pb.id = 'pb';
    pb.style.display = 'none';
    
    

    //Create the Additional Header
    var add = createDiv('funcBar, f_l');
    var add = document.createElement('div');
    add.style.display = 'block';	
	
    //Create the Additional
    var ad = createDiv('funcBar, add');
    var ad = document.createElement('div');
    ad.id = 'ad';
    ad.style.display = 'none';

/* -------------------------------------------------------------------------- */
/*                            BEGIN ACTUAL BUTTONS                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Greetings ------------------------------- */
    addHeading1(gh, 'Greetings', function() {
        toggle_visibility('g');
    });

    addButtonGold(g, 'Hello', function() {
        var oldVal = tb.innerHTML;
        setResponse('Hello {{ticket.requester.first_name}},');
    });

    addButtonGold(g, 'Thanks', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Thanks for your ticket regarding XXXX');
    });

    addButtonGold(g, 'As per conversation', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Thank you for your time on the phone.<br><br>As per our conversation, ');
    });

	addButtonGold(g, 'I tried to call', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>I tried to call you today but I wasn\'t able to reach you');
    });

    addButtonGold(g, 'Inconvenienced', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>We appreciate your patience in this matter and we apologize for any inconvenience this may have caused.');
    });
    
    addButtonGold(g, 'Add issues', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>If you have any additional issues, please let me know.');
    });

    addButtonGold(g, 'Any issues', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>If you experience any issues with this, please don\'t hesitate to let me know.');
    });
    
    addButtonGold(g, 'Confirm Working', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Can you confirm if this is now working as expected?');
    });

    addButtonGold(g, 'Test Again', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Please can you run some additional tests and let me know the results?');
    });

    addButtonGold(g, 'Continue tests', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Please continue to test and let me know if this is now working as expected.');
    });

    addButtonGold(g, 'Regards', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>Kind regards,<br>Tom Palmer');
    });

/* ------------------------------ Provisioning ------------------------------ */
    addHeading2(tkh, 'Provisioning', function() {
        toggle_visibility('tk');
    });

    addButtonRed(tk, 'Provisioned', function() {
        var oldVal = tb.innerHTML;
        setResponse(oldVal + '<br>This has now been provisioned as requested.');
    });
   
    addButtonRed(tk, 'RTC', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request, please the attached RTC config files. They have been tested and confirmed working.<br><br>If you have any issues, let me know.<br><br>Kind regards,<br>Tom Palmer');
    }); 

    addButtonRed(tk, 'Polycom', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request the provisioning details are as follows:<br><br> <b>Server Type: </b><br> <b>Server URL: </b> <br> <b>Username: </b> <br> <b>Password: </b><br>');
    });

    addButtonRed(tk, 'Hold Music', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request, I have now updated the hold music on your system and confirmed it is now working with a test call.<br>');
    });

    addButtonRed(tk, 'Wrap', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request, I have now updated the wrap up time on your system to XXX seconds.<br>');
    });

    addButtonRed(tk, 'Wait Time', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request, I have now enabled the Hold time announcement on your system and confirmed this is working with a test call.<br>');
    });

    addButtonRed(tk, 'Voice', function() {
        var oldVal = tb.value;
        setResponse('Hi {{ticket.requester.first_name}},<br><br>As per your request, I have now updated the voice on your system to XXXVOICEXXX and confirmed this is working with a test call<br>');
    });

    addButtonRed(tk, 'Auto Answer', function() {
        var oldVal = tb.value;
        setResponse('Hi there {{ticket.requester.first_name}},<br><br>This has now been provisioned for you. Simply reboot the device(s) and this should work as expected.<br>');
    });

    addButtonRed(tk, 'Queue Whisper', function() {
        var oldVal = tb.value;
        setResponse('Hi there {{ticket.requester.first_name}},<br><br>The queue whispers have now been provisioned as requested.<br>');
    });

    /* ------------------------------ Faults ------------------------------ */
    addHeading3(prob, 'Problems', function() {
        toggle_visibility('pb');
    });

    addButtonPurple(pb, 'Backend Settings', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>I\'ve had a look at the backend settings and can see that ');
    });

    addButtonPurple(pb, 'Backend System', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>I\'ve had a look at the backend system and can see that ');
    });
    
    addButtonPurple(pb, 'Logs', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>I\'ve had a look at the logs for this call and can see that ');
    });

    addButtonPurple(pb, 'Enable Logs', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>I\'ve had a look at the backend system and have enabled some verbose logs that should help us identify more details about the cause of this issue.');
    });

    addButtonPurple(pb, 'Examples', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>Please can you include some additional examples of this issue occurring that include: <br> <ul><li>The iCabbi job number</li><li>The time and date of the calls</li><li>The number the customer called from</li><li>The number the customer dialled</li></ul> <br>');
    });

    addButtonPurple(pb, 'Teamviewer', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + '<br>In order to progress any further with this issue, we will need to arrange a TeamViewer session whereby at a time that is convenient for you, I will remotely access your computer via TeamViewer. <br> Please can you let me know your availability, as well as your TeamViewer ID & password and we can arrange this ASAP. <br><br>Alternatively, you can call me directly on 01143503193 and we can arrange this over the telephone. <br>');
    });

/* ------------------------------ Additional ------------------------------ */
    addHeading4(add, 'Additional', function() {
        toggle_visibility('ad');
    });

    addButtonGreen(ad, 'Address', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + 'DiSC Systems<br>AMP Technology Centre<br>Advanced Manufacturing Park<br>Brunel Way<br>Rotherham<br>South Yorkshire<br>S60 5WG');
    });

    addButtonGreen(ad, 'Contact', function() {
	    var oldVal = tb.innerHTML;
	    setResponse(oldVal + 'You can call our support team directly on 01143503193 <br> or send us an email support@discsystems.co.uk');
    });
    
/* -------------------------------------------------------------------------- */
    //Append the headings & buttons to the container
    buttonContainer.appendChild(gh);
    buttonContainer.appendChild(g);
    buttonContainer.appendChild(tkh);
    buttonContainer.appendChild(tk);
    buttonContainer.appendChild(prob);
    buttonContainer.appendChild(pb);
    buttonContainer.appendChild(add);
    buttonContainer.appendChild(ad);

}