// Memecase transform methods

function spongecase(text) {
  let outtxt = "";
  for (let i=0; i<text.length; i++) {
    i%2 === 0 ? outtxt += text[i].toLowerCase() : outtxt += text[i].toUpperCase();
  }
  return outtxt;
}

let memecase = {
  spongecase: spongecase
};

let currentCase = memecase.spongecase;
let active = false;

function onInputChange(e) {
  e.target.value = currentCase(e.target.value);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  active = !active;
  if (request.toggle == true) {
    if (active) {
      document.querySelectorAll("input[type=text], textarea").forEach(function(val, ind, listObj) {
        val.addEventListener('input', onInputChange);
      });
    }
    else {
      document.querySelectorAll("input[type=text]. textarea").forEach(function(val, ind, listObj) {
        val.removeEventListener('input', onInputChange);
      });
    }
  }
});
