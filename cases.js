// Memecase transform methods

function spongecase(text) {
  let outtxt = "";
  for (let i=0; i<text.length; i++) {
    i%2 === 0 ? outtxt += text[i].toLowerCase() : outtxt += text[i].toUpperCase();
  }
  return outtxt;
}

export default {
  spongecase: spongecase
};
