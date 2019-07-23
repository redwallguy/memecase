import memecase from './cases.js';

let currentCase = memecase.spongecase;

document.querySelectorAll("input[type=text]").forEach(function(val, ind, listObj) {
  val.addEventListener('input', function(e) {
    e.target.value = currentCase(e.target.value);
  });
});
