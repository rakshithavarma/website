let btnnew = document.getElementsByClassName("shop-item-button");

let ieee = document.getElementById("ieee");
let eventnamesarray = new Set();
let ieedisc = document.getElementById("ieeedisc");
let nonieedisc = document.getElementById("nonieeedisc");
let nonieee = document.getElementById("nonieee");
let yescoupon = document.getElementById("yescoupon");
let nocoupon = document.getElementById("nocoupon");
let modalbtn = document.getElementById("modalbtn");
let seletedeventslist = document.getElementById("selectedeventslist");
let seletedeventslist2 = document.getElementById("selectedeventslist2");
let finaltotaliee = document.getElementById("finaltotaliee");
let finaltotalnoniee = document.getElementById("finaltotalnoniee");
let couponapply = document.getElementById("couponapply");
let ieesum = 0;
let nonieesum = 0;
let count = 0;
let coupongotnames = [];
let studentname = document.getElementById("studentname");
let close = document.getElementById("close");
//let rmobile=document.querySelector('input').value;
const sheetId = "1Clj_zUUcAYpR-0b248qkSFXUowGA114s4tpgWttAf2w";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "user-data";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

const data = [];
close.addEventListener("click", closefunc);
couponapply.addEventListener("click", initfunc);
//document.addEventListener('DOMContentLoaded', init);

const output = document.querySelector(".output");

let finaltotalieewithc = document.getElementById("finaltotalieewithc");
let finaltotalnonieewithc = document.getElementById("finaltotalnonieewithc");
function deleteRow(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById("customers").deleteRow(i);
  let presentnoniee = parseInt(
    row.previousElementSibling.innerText.replace("₹", "")
  );
  let presentiee = parseInt(
    row.parentNode.previousElementSibling.innerText.replace("₹", "")
  );

  eventnamesarray.delete(
    row.parentNode.previousElementSibling.previousElementSibling.innerText
  );
  ieesum = ieesum - presentiee;
  nonieesum = nonieesum - presentnoniee;
  let deletingelement =
    row.parentNode.previousElementSibling.previousElementSibling.innerText;

  // Removing the specified element by value from the array
  for (var i = 0; i < eventnamesarray.length; i++) {
    if (eventnamesarray[i] === deletingelement) {
      eventnamesarray.splice(i, 1);
    }
  }
  totalamountupdate(ieesum, nonieesum);
}

function totalamountupdate(ieesums, nonieesums) {
  if (ieesums >= 300) {
    ieedisc.innerText = ieesums * (40 / 100);
    ieesums -= ieesums * (40 / 100);
    ieee.innerText = ieesums;
  } else {
    ieee.innerText = ieesums;
    ieedisc.innerText = 0
  }
  if (nonieesums >= 300) {
    nonieedisc.innerText = nonieesums * (30 / 100);
    nonieesums -= nonieesums * (30 / 100);
    nonieee.innerText = nonieesums;
  } else {
    nonieee.innerText = nonieesums;
    nonieedisc.innerText = 0
  }
}

for (b of btnnew) {
  b.addEventListener("click", (e) => {
    let eventname =
      e.target.parentNode.previousElementSibling.getElementsByClassName(
        "event-name"
      )[0].innerHTML;
    let ieeprice =
      e.target.previousElementSibling.getElementsByClassName(
        "shop-item-price"
      )[0].innerHTML;

    let nonieeprice =
      e.target.previousElementSibling.getElementsByClassName(
        "shop-item-price"
      )[1].innerHTML;
    var x = document.getElementById("customers").insertRow(1);
    var c1 = x.insertCell(0);
    var c2 = x.insertCell(1);
    var c3 = x.insertCell(2);

    c1.innerHTML = eventname;
    c2.innerHTML = ieeprice;
    c3.innerHTML = nonieeprice;
    c3.style.paddingTop="10px";
    eventnamesarray.add(eventname);
    ieesum += parseFloat(c2.innerText.replace("₹", ""));

    nonieesum += parseFloat(c3.innerText.replace("₹", ""));

    var button = document.createElement("button");
    button.type = "button";
    button.style.marginTop="0";
    button.innerHTML =
      ' <i class="fa fa-trash-alt" aria-hidden="true" width="50%"></i>';
    button.className = "btn btn-outline-light";
    button.classList.add("delete-btn");
    button.setAttribute("onClick", "deleteRow(this)");

    c3.appendChild(button);

    totalamountupdate(ieesum, nonieesum);
  });
}

function closefunc() {
  location.reload();
}

modalbtn.addEventListener("click", (e) => {
  seletedeventslist.innerHTML = "";
  seletedeventslist2.innerHTML = "";
  // for (let i = 0; i < eventnamesarray.length; i++) {

  //  if(count>1)
  //  break;

  //   var li = document.createElement("li");
  //   li.appendChild(document.createTextNode(eventnamesarray[i]))
  //    seletedeventslist.appendChild(li);

  // }
  eventnamesarray.forEach(function (value) {
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    li1.appendChild(document.createTextNode(value));
    li2.appendChild(document.createTextNode(value));
    seletedeventslist.appendChild(li1);
    seletedeventslist2.appendChild(li2);
  });
  if (ieesum >= 300) {
    finaltotaliee.innerText = Math.round(ieesum * (60 / 100));
    finaltotalnoniee.innerText = Math.round(nonieesum * (70 / 100));
  } else {
    finaltotaliee.innerText = ieesum;
    finaltotalnoniee.innerText = nonieesum;
  }

  if (ieesum >= 300) {
    let temp1 = ieesum;
    let temp2 = nonieesum;
    finaltotalieewithc.innerText = Math.round(ieesum * (60 / 100));
    finaltotalnonieewithc.innerText = Math.round(nonieesum * (70 / 100));
  } else {
    finaltotalieewithc.innerText = ieesum;
    finaltotalnonieewithc.innerText = nonieesum;
  }
});
// couponapply.addEventListener('click',(e)=>{

// console.log(rmobile);

// })
var enteredmobile, enteredcoupon;
function getmobileVal() {
  enteredmobile = document.getElementById("rmobile").value;
}
function getcouponVal() {
  enteredcoupon = document.getElementById("rcoupon").value;
}
let flag = 0;
function initfunc() {
  couponapply.style.display = "none";
  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      //Remove additional text and extract only JSON:
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

      const colz = [];
      const tr = document.createElement("tr");

      // Extract column labels

      jsonData.table.cols.forEach((heading) => {
        if (heading.label) {
          let column = heading.label;

          colz.push(column);
          // const th = document.createElement('th');
          // th.innerText = column;

          // tr.appendChild(th);
        }
      });
      output.appendChild(tr);

      //extract row data:
      jsonData.table.rows.forEach((rowData) => {
        const row = {};

        colz.forEach((ele, ind) => {
          row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
        });

        if (enteredmobile == row.PhNo && enteredcoupon == row.CouponCode) {
          flag = 1;
          let val1 = ieesum;
          let val2 = nonieesum;
          val1 = Math.round(val1 * (15 / 100));
          val2 = Math.round(val2 * (15 / 100));
          finaltotalieewithc.innerText -= val1;
          finaltotalnonieewithc.innerText -= val2;
          row.CouponCode = "error";
          studentname.innerText =
            row.Name + ", you have received an additional discount of 15%.";
          coupongotnames.push(row.Name);
        }

        data.push(row);
      });
      if (flag == 0) {
        alert("INVALID DETAILS");
        location.reload();
      }
      for (var i = 0; i < coupongotnames.length; i++)
        console.log(coupongotnames[i]);
      // processRows(data);
    });
}

function processRows(json) {
  json.forEach((row) => {
    const tr = document.createElement("tr");
    const keys = Object.keys(row);

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    });
    output.appendChild(tr);
  });
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
