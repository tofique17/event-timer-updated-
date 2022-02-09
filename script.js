/* getting elements via DOM*/
const addBtn = document.querySelector("#addbutton");
const titleInput = document.querySelector("#title");
const descValue = document.querySelector("#description");
const dateValue = document.querySelector("#event_date");
const timeValue = document.querySelector("#event_time");

const renderingSide = document.querySelector(".render_events")
const eventData = [];
const calendar = ["Yanvar" , "Fevral" , "Mart" , "Aprel" , "May" , "Iyun" , "Iyul", "Avqust" , "Sentyabr" , "Oktyabr" , "Noyabr" , "Dekabr" ];


addBtn.addEventListener("click" , event => {

  event.preventDefault();

   const eventItem = {
    title: titleInput.value,
    description: descValue.value,
    date: `${dateValue.value},${timeValue.value}`
}

//pushing events an empty array
eventData.push(eventItem);
renderEvents();

})



const renderEvents = () => {

  renderingSide.textContent = '';
  eventData.map((item) => {


//getting month and day values
  let eventDate = new Date(item.date);
  let eventMonth = eventDate.getMonth(eventDate) + 1;
  let eventDay = eventDate.getDate(eventDate);

  //switching number months to string version
  let selectedMonth = calendar[eventMonth - 1];

//creating event - event time combination
    let renderedEventsContainer = document.querySelector('.render_events');
    let renderedEvent = document.createElement('div');
    renderedEvent.classList.add("rendered_event_container");
  
    let dateSide = document.createElement('div');
    dateSide.classList.add("date_side");
    dateSide.textContent = `${eventDay} 
    ${selectedMonth}`;
    
    
  let titleSide = document.createElement('div');
    titleSide.classList.add("title_side");
    titleSide.textContent = item.title;
  
  
    renderedEvent.appendChild(dateSide);
    renderedEvent.appendChild(titleSide);
    renderedEventsContainer.appendChild(renderedEvent);
   
  })

}



