$(function () {
  $(document).scroll(function () {
  var $nav = $(".sb-navbar");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

let eventsContainer = document.getElementById('limits');
let modalContainer = document.getElementById('myModal');
let topPos = document.getElementById("16:00").offsetTop + 30;
let isEmpty = 1;
//11
const day1 = [ 
  
  {
    name: "The Mind Fizz",
    startTime: "18:00 - ",
    endTime: "19:00 ",
    link: "events/2021/22_ieee_day_mind_fizz.html",
    // speaker: "Mr.abc",
    ieee:"free",
    nonieee:"free"

  }

]
//12
const day2 = [
  {
    name: "Explore Your Passion(ECE/EEE)",
    startTime: "16:00 - ",
    endTime: "17:30",
    link: "../events/2021/25_ieee_day_exploreyourpassion_eceandeee.html",
    speaker: "Dr. T.Sudheer Kumar",
    ieee:"free",
    nonieee:"free"

  },
  {
    name: "Web-Wizards (Day-1)",
    startTime: "18:00 - ",
    endTime: "19:30",
    link: "../events/2021/28_ieee_day_web_wizards.html",
    speaker: "Mr. Rakesh Peela",
    ieee:"₹100/-",
    nonieee:"₹150/-"

  },
  {
    name: "Art Competition",
    startTime: "07/10/2021 - ",
    endTime: "12/10/2021",
    link: "../events/2021/21_ieee_art_competition.html",
    // speaker: "Mr.abc",
    ieee:"₹30/-",
    nonieee:"₹50/-"

  }

]
//13
const day3 = [
  
  {
    name: "Project Prototypes (Day-1)",
    startTime: "15:00 onwards",
    endTime: "",
    link: "../events/2021/23_ieee_project_protoype.html",
    // speaker: "Mr.abc",
    ieee:"₹100/-",
    nonieee:"₹150/-"

  },
  {
    name: "Web-Wizards (Day-2)",
    startTime: "18:00 - ",
    endTime: "19:30",
    link: "../events/2021/28_ieee_day_web_wizards.html",
    speaker: "Mr. Rakesh Peela",
    ieee:"₹100/-",
    nonieee:"₹150/-"

  },
  

]
//14
const day4 = [
  {
    name: "Explore your passion workshop(Software)",
    startTime: "16:00 - ",
    endTime: "17:30",
    link: "../events/2021/26_ieee_day_exploreyourpassion_software.html",
    speaker: "Mr. Ravi Yelesvarapu",
    ieee:"free",
    nonieee:"free"

  },
  {
    name: "Project Prototypes (Day-2)",
    startTime: "15:00 onwards",
    endTime: "",
    link: "../events/2021/23_ieee_project_protoype.html",
    // speaker: "Mr.abc",
    ieee:"₹100/-",
    nonieee:"₹150/-"

  },
  {
    name: "Web-Wizards (Day-3)",
    startTime: "18:00 - ",
    endTime: "19:30",
    link: "../events/2021/28_ieee_day_web_wizards.html",
    speaker: "Mr. Rakesh Peela",
    ieee:"₹100/-",
    nonieee:"₹150/-"

  },
]
//15

const day5 = [
  {
    name: "Code Space",
    startTime: "15th Oct (12pm) - ",
    endTime: "16th Oct (12am)",
    link: "../events/2021/24_ieeeday_codespace.html",
    // speaker: "Mr.abc",
    ieee:"free",
    nonieee:"free"

  },


]
//16
const day6 = [
  {
    name: "Resume/linkedln webinar",
    startTime: "15:00- ",
    endTime: "17:00",
    link: "../events/2021/27Embark_Enhance _Emerge.html",
    speaker: "Mr. Atishay Jain",
    ieee:"₹50/-",
    nonieee:"₹70/-"

  },
  {
    name: "Python Workshop (day-1)",
    startTime: "18:00 - ",
    endTime: "20:00",
    link: "../events/events_page_2021.html",
    speaker: "Mr.Ravi Teja Komma",
    ieee:"₹150/-",
    nonieee:"₹200/-"

  },
]
//17
const day7 = [
  {
    name: "IEEE DAY",
    startTime: "14:30 - ",
    endTime: "18:00",
    link: "../events/2021/29_ieee_day_2021.html",

    ieee:"free",
    nonieee:"free"

  }
]
//18
const day8 = [
  {
    name: "Python Workshop (day-2)",
    startTime: "18:00 - ",
    endTime: "20:00",
    link: "../events/events_page_2021.html",
    speaker: "Mr.Ravi Teja Komma",
    ieee:"₹150/-",
    nonieee:"₹200/-"

  },
]
//19
const day9 = [
  {
    name: "Python Workshop (day-3)",
    startTime: "18:00 - ",
    endTime: "20:00",
    link: "../events/events_page_2021.html",
    speaker: "Mr.Ravi Teja Komma",
    ieee:"₹150/-",
    nonieee:"₹200/-"

  },
]


let modalContent = (ev) => {
  let myModal = document.createElement('div');
  myModal.classList.add('modal');
  myModal.setAttribute('id', 'myModel');
  let modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  let title = document.createElement('h2');
  title.innerHTML = `${ev.name}`;
  let para = document.createElement('p');
  para.innerHTML = `Time: ${ev.startTime} ${ev.endTime}`;
  let fee = document.createElement('p');
  fee.innerHTML = `Fee: <br>IEEE Member: ${ev.ieee} <br>NON-IEEE Member: ${ev.nonieee} `;
  let speak = document.createElement('p');
  if(ev.speaker == undefined){
    speak.innerHTML=' ';
  }
  else{
    speak.innerHTML = `Speaker: ${ev.speaker}`;
  }
  let lnk = document.createElement('a');
  lnk.innerHTML = "More Info";
  lnk.href = `${ev.link}`;
  modalContent.append(title);
  modalContent.append(para);
  modalContent.append(speak);
  modalContent.append(fee);
  modalContent.append(lnk);
  myModal.append(modalContent);
  return myModal;
}

// function for locating the coordinates of the event
const locateCoords = (event) => {
    createEventElement(event);
  isEmpty = 0;
}

//function for creating the event elements
const createEventElement = (event) => {
    let eventElement = document.createElement('div');
    let linkEle = document.createElement('a');
    
  linkEle.classList.add('eventHref');
  linkEle.href = "#calender";
    if(window.screen.width <= 700){
    eventElement.style.left = 5 + "px";
      eventElement.style.width = "95%";
    linkEle.innerHTML = event.name + ` <br>(${event.startTime}  ${event.endTime}) `;
  }
  else{
    eventElement.style.left = 5 + "px";
      eventElement.style.width = "95%";
    linkEle.innerHTML = event.name + `<br> (${event.startTime}  ${event.endTime}) `;
  }
    
  linkEle.setAttribute('data-object', event);
  let modalPopup = modalContent(event);
  
    eventElement.append(linkEle);
  eventElement.append(modalContent(event));
    eventElement.classList.add("event");
    eventsContainer.append(eventElement);
  topPos += 50;
}

//function to switch between the days
const switchDays = (day) => {
  switch (day) {
    case 1:
      if(!isEmpty)
        clearFun();
      day1.forEach(locateCoords);
      break;
    case 3:
      if(!isEmpty)
        clearFun();
      day3.forEach(locateCoords);
      break;
    case 5:
      if(!isEmpty)
        clearFun();
      day5.forEach(locateCoords);
      break;
    case 7:
      if(!isEmpty)
        clearFun();
      day7.forEach(locateCoords);
      break;
    case 8:
      if(!isEmpty)
        clearFun();
      day8.forEach(locateCoords);
      break;
    case 9:
      if(!isEmpty)
        clearFun();
      day9.forEach(locateCoords);
      break;
    case 11:
      if(!isEmpty)
        clearFun();
      day11.forEach(locateCoords);
      break;
    case 2:
      if(!isEmpty)
        clearFun();
      day2.forEach(locateCoords);
      break;
    case 4:
      if(!isEmpty)
        clearFun();
      day4.forEach(locateCoords);
      break;
    case 6:
      if(!isEmpty)
        clearFun();
      day6.forEach(locateCoords);
      break;
    case 8:
    case 10:
      if(!isEmpty)
        clearFun();
      day10.forEach(locateCoords);
      break;
    default:
      break;
  }
}

//function to clear the data when days are switching
const clearFun = () => {
  eventsContainer.innerHTML = '';
  topPos = document.getElementById("16:00").offsetTop + 30;
}

switchDays(1);
