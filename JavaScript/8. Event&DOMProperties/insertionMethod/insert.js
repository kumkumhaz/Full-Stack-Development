/*insert Elementm in Dmo TreeWalker*/
//METHID 1:
let a = document.getElementsByTagName("div")[0];
//a.innerHTML = a. innerHTML + '<h3> this is very intutive way to add element in DOM tree</h3>';

//METHOD 2:
let div = document.createElement('div');
div.innerHTML  = '<h1>This is the method to insert in DOM tree</h1>';
//a.appendChild(div);
//a.append(div);
//a.prepend(div);
//a.before(div);
//a.after(div);
a.replaceWith(div);