let x = document.getElementsByTagName('span')[0];
console.log(x);
let y = document.getElementsByTagName('span')[0];
console.log(y);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

first.innerHTML // get innerhtml
//first.innerHTML="<span>KUMKUM<span>"  // change innerhtml
first.outerHTML  // get outerhtml
//first.outerHTML="<span>KUMKUM<span>"

// TEXT CONTENT
document.body.firstChild.data;
console.log(document.body.textContent);

//THE HIDDEN PROPERTY: