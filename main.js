// TIME DATA
let blc_sc = document.getElementById('time-sc');
let blc_mn = document.getElementById('time-mn');
let blc_hr = document.getElementById('time-hr');

let data = {
  time_hr : 0,
  time_sc : 0,
  time_mn : 0,
  time_int : 0
};

let btn_eff_base = [];

let out = document.getElementById('result');
let int;

// BUTTONS
let btn_start = document.getElementById('start');
let btn_stop  = document.getElementById('stop');
let btn_clean = document.getElementById('clean');
let btn_inter = document.getElementById('add-list');
let btn_cln_l = document.getElementById("btn-cln-list");

let btn_line  = document.getElementById("btn-slc-line");

btn_start.addEventListener("click", (e) => {
  btn_eff_base.push(1);
  effect_start();
  start();
});

let start = () => {
  int = setInterval(() => {
    if (data.time_sc >= 59) {
      data.time_sc = 0;

      if (data.time_mn >= 59) {
        data.time_mn = 0;

        if (data.time_hr >= 23) {
          clearInterval(int);
          blc_hr.innerHTML = "0 h";
          blc_mn.innerHTML = "0 m";
          blc_sc.innerHTML = "0 s";

          data.time_sc = 0;
          data.time_mn = 0;
          data.time_hr = 0;
        }
        else {
          data.time_hr++;
          blc_hr.innerHTML = data.time_hr + " h";
        }
      }
      else {
        data.time_mn++;
        blc_mn.innerHTML = data.time_mn + " m";
      }
    }
    else {
      data.time_sc++;
      blc_sc.innerHTML = data.time_sc + " s";
    }
  }, 1000);
}

btn_stop.addEventListener("click", (e) => { 
  clearInterval(int); 
  btn_eff_base.push(2);
  effect_start();
});
btn_clean.addEventListener("click", (e) => { 
  clearInterval(int);
  data.time_sc = 0;
  data.time_mn = 0;
  data.time_hr = 0;

  blc_hr.innerHTML = "0 h";
  blc_mn.innerHTML = "0 m";
  blc_sc.innerHTML = "0 s"; 
  btn_eff_base.push(3);
  effect_start();
});

btn_cln_l.addEventListener("click", (e) => {
  out.innerHTML = "";
  data.time_int = 0;
});

btn_inter.addEventListener("click", (e) => {
  data.time_int++; 
  let div = document.createElement('div');
  div.innerHTML = `<span>${data.time_int}</span>` + "   " + data.time_hr + "h " + data.time_mn + "m " + data.time_sc + "s";
  out.prepend(div);

  btn_eff_base.push(4);
  effect_start();
});

function effect_start() {
  let btn_x = btn_eff_base.slice(-1);
  if (btn_x == 1) btn_line.style = "left: 0px; border: 1.5px solid darkred";
  if (btn_x == 2) btn_line.style = "left: 150px; border: 1.5px solid darkred";
  if (btn_x == 3) btn_line.style = "left: 300px; border: 1.5px solid darkred";
  if (btn_x == 4) btn_line.style = "left: 450px; border: 1.5px solid darkred";
}



