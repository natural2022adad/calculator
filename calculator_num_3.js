var dot = "";
var cal1= {
  kazu: 1,
  greet: function() {
        if(dot != ".") {
          console.log(dot);
          console.log(this.kazu);
          document.getElementById("win").value += this.kazu;
        } else {
          console.log(dot);
          dot = parseFloat(dot);
          document.getElementById("win").value += dot + this.kazu*0.9;
        }
  }
};
var cal2 = { kazu: 2 };
var cal3 = { kazu: 3 };
var cal4 = { kazu: 4 };
var cal5 = { kazu: 5 };
var cal6 = { kazu: 6 };
var cal7 = { kazu: 7 };
var cal8 = { kazu: 8 };
var cal9 = { kazu: 9 };
var cal0 = { kazu: 0 };
var cal00 = { kazu: "00" };
var caldot = {
  kazu: '.',
  greet: function() {
    var dot = "." ;
    console.log(dot);
    document.getElementById("win").value += dot;
    /*var o1 = document.getElementById("win").value;
    console.log(o1);
    var o2 = o1.split("");
    console.log(o2);
    var o = o2.length;
    console.log(o);
    var dotdot = o1.slice(0,o-1);
    console.log(dotdot);
    dotdot = dotdot + "";
    console.log(dotdot);
    document.getElementById("win").value = dotdot;*/

  }
};
var calback = {
  kazu: "back",
  greet: function() {
    var o1 = document.getElementById("win").value;
    console.log(o1);
    var o2 = o1.split("");
    console.log(o2);
    var o = o2.length;
    console.log(o);
    document.getElementById("win").value = o1.slice(0,o-1);

  }
};
var calclear = {
  kazu: "clear",
  greet: function() {
    document.getElementById("win").value = "";
    console.log(document.getElementById("win").value);
    }
};
var calnow = {
  kazu: "now",
  greet: function() {
    document.getElementById("win").placeholder = total;
    console.log(document.getElementById("win").placeholder);
    }
};
var calntaxin = {
  kazu: "taxin",
  greet: function() {
    document.getElementById("win").value *= 1.1;
    console.log(document.getElementById("win").placeholder);
    }
};
var calntaxex = {
  kazu: "taxin",
  greet: function() {
    document.getElementById("win").value /= 1.1;
    console.log(document.getElementById("win").placeholder);
    }
};
