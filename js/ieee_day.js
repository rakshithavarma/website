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
  
  const day1 = [ 
    {
      name: "Project Prototypes",
      startTime: "17:30",
      endTime: "19:00",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day2 = [
    {
      name: "EPICS Day-2",
      startTime: "17:30",
      endTime: "19:00",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day3 = [
    {
      name: "Explore your passion workshop",
      startTime: "16:30",
      endTime: "17:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    },
    {
      name: "Web Dev Workshop",
      startTime: "18:00",
      endTime: "19:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day4 = [
    {
      name: "Simulation Tool",
      startTime: "16:30",
      endTime: "17:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    },
    {
      name: "Web Development",
      startTime: "18:00",
      endTime: "19:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day5 = [
    {
      name: "Explore your passion workshop",
      startTime: "16:30",
      endTime: "17:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    },
    {
      name: "Web Development",
      startTime: "18:00",
      endTime: "19:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day6 = [
    {
      name: "Coding Competition",
      startTime: "16:30",
      endTime: "19:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day7 = [
    {
      name: "Linkedin or Resume",
      startTime: "16:30",
      endTime: "17:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    },
    {
      name: "Coding Competition",
      startTime: "18:30",
      endTime: "19:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  const day8 = [
    {
      name: "IEEE DAY",
      startTime: "10:00",
      endTime: "16:00",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  const day9 = [
    {
      name: "Python day-2",
      startTime: "17:00",
      endTime: "18:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day10 = [
    {
      name: "Python day-3",
      startTime: "17:00",
      endTime: "18:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
  ]
  
  const day11 = [
    {
      name: "Python day-4",
      startTime: "17:00",
      endTime: "18:30",
      link: "http://ieeesbgvpce.org/",
      speaker: "Mr.abc",
    }
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
    para.innerHTML = `Time: ${ev.startTime} - ${ev.endTime}`;
    let fee = document.createElement('p');
    fee.innerHTML = "Fee : Rs.250(ieee member)\ Rs.350(non-ieee member)";
    let speak = document.createElement('p');
    speak.innerHTML = `Speaker: ${ev.speaker}`;
    let lnk = document.createElement('a');
    lnk.innerHTML = "Register";
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
      if(window.screen.width <= 700){
      eventElement.style.left = 5 + "px";
        eventElement.style.width = "95%";
      linkEle.innerHTML = event.name + ` (${event.startTime} - ${event.endTime}) `;
    }
    else{
      eventElement.style.left = 5 + "px";
        eventElement.style.width = "95%";
      linkEle.innerHTML = event.name + `<br> (${event.startTime} - ${event.endTime}) `;
    }
      linkEle.href = "#calender";
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
