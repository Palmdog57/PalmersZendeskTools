function getCategories() {
  chrome.storage.sync.get('responses', function callback(items) { 
    Object.keys(items).forEach((entry) =>
    {
      let currentKey = entry;
      let currentValue = items[entry];
      console.log(currentValue);
    });
  });
}

// Saves Category to chrome.storage
function save_category() {
    console.log("Saving category to local storage");
    var categoryTitle = document.getElementById('categoryTitle').value;

    chrome.storage.sync.get('categories', function callback(items) { 
      Object.keys(items).forEach((entry) => {
        let currentKey = entry;
        let currentValue = items[entry];
  
        currentValue.push(categoryTitle);
        console.log(currentValue);

        chrome.storage.sync.set({
          categories: currentValue
      }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Category added successfully.';
        
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      }); //END STORAGE SET
  
      }); //END OBJECT KEYS
    }); //END STORAGE GET


}

// Save responses to chrome.storage
function save_responses() {
    //console.log("Saving response to local storage");
    var resName = document.getElementById('resName').value;
    var resBody = document.getElementById('resBody').value;
    
    chrome.storage.sync.get('responses', function callback(items) { 
      Object.keys(items).forEach((entry) => {
        let currentKey = entry;
        let currentValue = items[entry];

        var fuckYou = JSON.parse(JSON.stringify(items));
        console.log(typeof(fuckYou));

        var responseObject = {resName : resBody};
    
        chrome.storage.sync.set({
          responses: responseObject
        }, function() {
          // Update status to let user know options were saved.
          var status = document.getElementById('status');
          status.textContent = 'Response added successfully.';
          
          setTimeout(function() {
            status.textContent = '';
          }, 750);
        }); //END STORAGE SET
  
      }); //END OBJECT KEYS
    }); //END STORAGE GET


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