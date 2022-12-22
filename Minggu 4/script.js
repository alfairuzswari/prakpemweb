//var input = document.getElementById("tombol_form").addEventListener("click")

let nilai_form = document.getElementById("input_form").value;
// function tampilkan_nilai_form(){
//     var nilai_form=document.getElementById("input_form").value;
// 	document.getElementById("hasil").innerHTML=nilai_form;
// }

//var angka;
function Latihan(nilai_form) {
  if (angka <= 0 || angka >= 21) {
    console.log("error");
  } else if (angka % 2 != 0) {
    var num1 = 1;
    var num2 = 2;
    var next;
    console.log(0);
    console.log(1);
    while (num1 < angka * 10) {
      console.log(num1);
      next = num1 + num2;
      num1 = num2;
      num2 = next;
    }
  } else if (angka % 2 == 0) {
    var total = 1;
    var array = [];
    for (let i = 1; i <= angka / 2; i++) {
      total = total * 1;
      if (i == angka / 2) {
        console.log(i + "-");
        array.push(i + "-");
      } else {
        console.log(i + "x");
        console.push(i + "x");
      }
    }
    //document.getElementById("hasil").innerHTML=console.log(total);
    //document.getElementById("hasil").innerHTML=array.push(total);
    document.getElementById("hasil").innerHTML = total;
  }
}
