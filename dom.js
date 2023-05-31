const btn = document.createElement("button");
btn.innerHTML = "change p";
btn.style.color = "white";
btn.style.background = "pink";
const myDiv = document.getElementById("btn1");
myDiv.append(btn);

const btn2 = document.createElement("button");
btn2.innerHTML = "change font";
btn2.style.color = "white";
btn2.style.background = "pink";
const myDiv2 = document.getElementById("btn2");
myDiv2.append(btn2);

const btn3 = document.createElement("button");
btn3.innerHTML = "change background";
btn3.style.color = "white";
btn3.style.background = "pink";
const myDiv3 = document.getElementById("btn3");
myDiv3.append(btn3);

const myp = document.createElement("p");
myp.textContent = "this is pargraph before change";
myp.style.color = "pink";
const mydiv3 = document.getElementById("p1");
mydiv3.append(myp);

/////////////////////////////////////////////////////////
document.getElementById("btn1").onclick = () => {
  myp.textContent = "this is pargraph After change";
  myp.style.color = "black";
};

document.getElementById("btn2").onclick = () => {
  myp.textContent = "this is pargraph After change font";
  myp.style.fontSize = "x-large";
};

document.getElementById("btn3").onclick = () => {
  myp.textContent = "this is pargraph After change background";
  myp.style.background = "gray";
};

document.getElementById("submit").onclick = () => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let myli = document.getElementById("myli");
  let list = [fname, lname];
  console.log(list);

  for (let x = 0; x <= list.length; x++) {
    let li = document.createElement("li");
    li.textContent = list[x];
    myli.append(li);
  }
};

const btn4 = document.createElement("button");
btn4.innerHTML = "change img";
btn4.style.color = "white";
btn4.style.background = "pink";
const myDiv4 = document.getElementById("btn4");
myDiv4.append(btn4);

const myimg = document.createElement("img");
myimg.src = "/f1.jpeg";
const divimg = document.getElementById("myImg");
divimg.append(myimg);

document.getElementById("btn4").onclick = () => {
  myimg.src = "/f2.jpeg";
  myimg = document.getElementById("myImg");
  myimg.append(myimg);
};

document.getElementById("sub").onclick = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = number1 - number2;

  const pargraph = document.createElement("p");
  pargraph.textContent = "the result is " + result;
  pargraph.style.color = "pink";
  const divresult = document.getElementById("divresult");
  divresult.append(pargraph);
};

document.getElementById("add").onclick = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = Number(number1) + Number(number2);

  const pargraph = document.createElement("p");
  pargraph.textContent = "the result is " + result;
  pargraph.style.color = "pink";
  const divresult = document.getElementById("divresult");
  divresult.append(pargraph);
};

document.getElementById("multy").onclick = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = Number(number1) * Number(number2);

  const pargraph = document.createElement("p");
  pargraph.textContent = "the result is " + result;
  pargraph.style.color = "pink";
  const divresult = document.getElementById("divresult");
  divresult.append(pargraph);
};

document.getElementById("divtion").onclick = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = Number(number1) / Number(number2);

  const pargraph = document.createElement("p");
  pargraph.textContent = "the result is " + result;
  pargraph.style.color = "pink";
  const divresult = document.getElementById("divresult");
  divresult.append(pargraph);
};

const myName = document.getElementById("name");
myName.textContent = "najla";
myName.style.color = "pink";

document.getElementById("name").onclick = () => {
  let date = new Date();
  alert(date);
};

document.getElementById("up").onclick = () => {
  window.scrollTo(0, 0);
};
