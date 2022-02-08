/* getting elements via DOM*/
const addBtn = document.querySelector("#addbutton");
const titleInput = document.querySelector("#title");
const descValue = document.querySelector("#description");
const dateValue = document.querySelector("#event_date");
const timeValue = document.querySelector("#event_time");


addBtn.addEventListener("click" , event => {

    /* getting values from date input*/
const eventItem =  {
    title: titleInput.value,
    description: descValue.value,
    date: `${dateValue.value},${timeValue.value}`
}

let myDate = new Date(eventItem.date);
let eventMonth = myDate.getMonth(myDate) + 1;
let eventDay = myDate.getDate(myDate);


/* switching number months to string ones*/
    switch(eventMonth)
  {
    case 1:
      eventMonth="Yanvar";
      break;
    case 2:
        eventMonth="Fevral";
      break;
    case 3:
        eventMonth="Mart";
      break;
    case 4:
        eventMonth="Aprel";
      break;
    case 5:
        eventMonth="May";
      break;
    case 6:
        eventMonth="Iyun";
      break;
    case 7:
        eventMonth="Iyul";
      break;
    case 8:
        eventMonth="Avqust";
      break;
    case 9:
        eventMonth="Sentyabr";
      break;
    case 10:
        eventMonth="Oktyabr";
      break;
    case 11:
        eventMonth="Noyabr";
      break;
    case 12:
        eventMonth="Dekabr";
      break;
    default:
        eventMonth="Invalid month";
  }

  /* using localStorage */
    const dateStorage = `${eventDay} ${eventMonth}`
    const eventStorage  = titleInput.value;
   
  if(dateStorage && eventStorage){
    localStorage.setItem(dateStorage , eventStorage);
    
  }
  
  for(let i = 0 ; i < localStorage.length ; i++){
    const dateStorage = localStorage.dateStorage(i);
    const eventStorage = localStorage.getItem(dateStorage)

    
  }
  console.log(localStorage);

/* Showing event date and event title on the left side*/
  let renderedEventsContainer = document.querySelector('.render_events');
  let renderedEvent = document.createElement('div');
  renderedEvent.classList.add("rendered_event_container");

  let dateSide = document.createElement('div');
  dateSide.classList.add("date_side");
  dateSide.textContent = `${eventDay} ${eventMonth}`;

  let titleSide = document.createElement('div');
  titleSide.classList.add("title_side");
  titleSide.textContent = titleInput.value;


  renderedEvent.appendChild(dateSide);
  renderedEvent.appendChild(titleSide);
  renderedEventsContainer.appendChild(renderedEvent);

event.preventDefault();
})



