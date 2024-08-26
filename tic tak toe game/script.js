var b1 = document.getElementById("b1").innerHTML;
var b2 = document.getElementById("b2").innerHTML;
var b3 = document.getElementById("b3").innerHTML;
var b4 = document.getElementById("b4").innerHTML;
var b5 = document.getElementById("b5").innerHTML;
var b6 = document.getElementById("b6").innerHTML;
var b7 = document.getElementById("b7").innerHTML;
var b8 = document.getElementById("b8").innerHTML;
var b9 = document.getElementById("b9").innerHTML;

let array = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

// let icon = document.getElementById("circle");
// icon.style.display = "inline"
console.log("MADE BY ATIKSH GUPTA");
function gameOver() {
  console.log("gover");
  if (
    (array[0] == array[1] && array[0] == array[2]) ||
    (array[3] == array[4] && array[3] == array[5]) ||
    (array[6] == array[7] && array[6] == array[8]) ||
    (array[2] == array[5] && array[2] == array[8]) ||
    (array[1] == array[4] && array[1] == array[7]) ||
    (array[0] == array[3] && array[0] == array[6]) ||
    (array[0] == array[4] && array[0] == array[8]) ||
    (array[2] == array[4] && array[2] == array[6]) ||
    turn == 10
  ) {
    let consent = confirm("game over, do you want to restart");
    if (consent) {
      location.reload();
    }
  }
}

let obj = document.getElementsByClassName("box");
var turn = 1;

for (let i = 0; i < obj.length; i++) {
  obj[i].addEventListener("click", () => {
    // console.log("hello");

    if (turn % 2 == 0) {
      obj[i].innerHTML = `<i class="icon fa-regular fa-circle"></i>`;
      array[i] = `<i class="icon fa-regular fa-circle"></i>`;
    } else {
      obj[i].innerHTML = `<i class="icon fa-solid fa-xmark"></i>`;
      array[i] = `<i class="icon fa-solid fa-xmark"
        ></i>`;
    }
    turn = turn + 1;
    console.log(turn);
    gameOver();
  });
}
