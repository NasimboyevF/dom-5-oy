const birarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const biruniq = new Set([]);
const birn = 3;

while (biruniq.size < birn) {
  randson = Math.floor(Math.random() * birarray.length);
  biruniq.add(birarray[randson]);
}

// 2 masala

console.log(Array.from(biruniq));

ikkisoz = "asdasd asdasdasd asdasdasd asdasd,asdasdasd";
const ikkiuniq = new Set([]);

ikkisoz.split(/\ |\,|\//).forEach((value) => {
  ikkiuniq.add(value);
});

console.log(ikkiuniq);

//3 masala

const ucharr = [1, [2, 3], [4, [5, 6]]];

console.log(ucharr.flat(Infinity));

// 4 masala

let tortSoz = "asdasd asdasdasd asdasdasd asdasd,asdasdasd";

let tortYangi = tortSoz.split(" ").map((element) => element[0].toUpperCase() + element.substring(1)).join(" ");
console.log(tortYangi);



const soat =  document.getElementById("soat")
const min  =  document.getElementById("min")
const sek  =  document.getElementById("sek") 
const body =  document.querySelector('body')


setInterval(() => {
  let time = new Date();
  soat.textContent = time.getHours()
  min.textContent = time.getMinutes()
  sek.textContent = time.getSeconds()
  
  body.style.background = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;

}, 1000);
