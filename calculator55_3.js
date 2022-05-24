var total = 0;
var d = document;
var p = parseFloat;
var math = ["a","b","c","d","z"];

var box = "";
var hako = 0 ;
 var a = null;

function b() {
    hako = d.getElementById("win").value;
    hako = parseFloat(hako);
    d.getElementById("win").value = "";
    console.log(hako);
}

function ada(n) {
     box += math[n];
    console.log(box);
    func ();
}
console.log(hako);
console.log(box);
/*function minus() {
     box += "b";
    console.log(box);
    func ();
}
console.log(hako);
console.log(box);
function times() {
     box += "c";
    console.log(box);
    func ();
}
console.log(hako);
console.log(box);
function divided() {
     box += "d";
    console.log(box);
    func ();
}
console.log(hako);
console.log(box);*/

function func () {
        console.log(hako);
        console.log(box);
      console.log(box[0]);
      console.log(box[1]);
      if(box[0] == "a" || box[1] == undefined ) {
        total += hako;
        console.log(total);
        total = parseFloat(total);
        console.log(total);
        hako = "";
            if(box[1] != undefined ) {
            box = box[1];
            console.log(box);
            d.getElementById("win").placeholder = total;
            if (box[1] == "z" ){
                  box ="";}
            }else{
            console.log(box);
            d.getElementById("win").placeholder = total;

            }
      } else if(box[0] == "b") {
        total -= hako;
        console.log(total);
        total = parseFloat(total);
        console.log(total);
        hako = "";
            if(box[1] != undefined ) {
            box = box[1];
            console.log(box);
            d.getElementById("win").placeholder = total;
            if (box[1] == "z" ){
                  box ="";}
            }else{
            console.log(box);
            d.getElementById("win").placeholder = total;
            }
      } else if(box[0] == "c") {
        total *= hako;
        console.log(total);
        total = parseFloat(total);
        console.log(total);
        hako = "";
            if(box[1] != undefined ) {
            box = box[1];
            console.log(box);
            d.getElementById("win").placeholder = total;
                if (box[1] == "z" ){
                      box ="";}
            }else{
            console.log(box);
            d.getElementById("win").placeholder = total;
            }
          console.log(box);
      } else if(box[0] == "d") {
        total /= hako;
        console.log(total);
        total = parseFloat(total);
        console.log(total);
        hako = "";
            if(box[1] != undefined ) {
            box = box[1];
            console.log(box);
            d.getElementById("win").placeholder = total;
              if (box[1] == "z" ){
                    box ="";}
            }else{
            console.log(box);
            d.getElementById("win").placeholder = total;
            }
      } else {
      }
};
/*function equal() {
   box += "z";
   func ();
 }*/

 function ac() {
   d.getElementById("win").value = 0;
   d.getElementById("win").value = "";
   total = 0;
   box = "";
   d.getElementById("win").placeholder = total;
}
