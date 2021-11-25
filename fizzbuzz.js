//paraméterekkel tűzdelem a függvényt, hogy később tudjak neki átadni adatot. Mindig így kell, ha több helyen használnám majd. Argumentum= u.a. de már létező dolog van átadva.
function fizzbuzz(num){
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
}

//kiíró függvény
function write(message) {
  let msg = document.createElement("div");
  msg.innerText = message;
  document.body.append(msg);
}


//végigmegyek a 0-100-ig és rajtuk lefuttatom a fizzbuzz függvény, majd a write függvénnyel kiírom a képernyőre. Kiírva kapok fizzbuzz fizz buzz vagy maga a szám. Gyakorlatilag végigjárom a számokat és mindegyiken lefuttatom a két függvényt.
function main() {
  for (let i = 0; i < 100; i++) { //i = i + 1 = i++

    let result = fizzbuzz(i);
    write(result);
  }
}


//html betöltése után kerül meghívásra a main. Gyakorlatilag egy alap template.
window.addEventListener('load', main);