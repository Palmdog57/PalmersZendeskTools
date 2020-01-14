function getCategories() {
  chrome.storage.sync.get('categories', function callback(items) { 
    console.log("BEFORE", items)
    Object.keys(items).forEach((entry) =>
    {
      let currentKey = entry;
      let currentValue = items[entry];

      console.log(typeof(currentKey));
      console.log(typeof(currentValue));

      currentValue.push("Hola");
      console.log("AFTER", currentValue)

    });
  });
}

// Saves Category to chrome.storage
function save_category() {
    console.log("Saving category to local storage");
    var categoryTitle = document.getElementById('categoryTitle').value;
    var btnType = document.getElementById('btnCat').value;

    var buttonObject = {
        "type" : btnType,
        "categoryTitle" : categoryTitle
    }

    chrome.storage.sync.set({
        [categoryTitle]: buttonObject
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Category added successfully.';
      
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
}

// Save responses to chrome.storage
function save_responses() {
    console.log("Saving response to local storage");
    var resName = document.getElementById('resName').value;
    var resBody = document.getElementById('resBody').value;
    var btnType = document.getElementById('btnRes').value;
    
    var responseObject = {
        "type" : btnType,
        "resName" : resName,
        "resBody" : resBody
    }
    
    chrome.storage.sync.set({
        [resName]: responseObject
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Response added successfully.';
      
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
}

function loadOptions(){

  chrome.storage.local.get('categories', function(res){
    var chromeObjects = res;
    console.log("Results incoming: ", chromeObjects);
  });
    
}
  
document.getElementById('saveCategory').addEventListener('click', save_category);
document.getElementById('saveResponse').addEventListener('click', save_responses);
document.addEventListener('DOMContentLoaded', getCategories);