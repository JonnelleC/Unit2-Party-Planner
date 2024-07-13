// const state = {
//   parties: [],
//   party: {},
// };

document.addEventListener('DOMContentLoaded', async ()=> {


const getParties = async () => {
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events` );
    const partyData = await response.json();
    const eventContainer = document.querySelector("ol");
    eventsContainer.innerHTML = '';
    partyData.forEach(event => {
        const eventElement = document.createElement('li');
        eventElement.innerHTML =`
        <li>Date: ${event.date} </li>
        <li>Time: ${event.Time} </li>
        <li>Location: ${event.location}</li>
        <li>Description:${event.description}`;
        eventsContainer.appendChild(eventElement);
    })
  } catch (error) {
    console.error("Could not fetch resource", error);
  }
  getParties();
};

const form = document.querySelector('form');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
    try{
        const partyName = document.getElementById('eventName').value;
        const partyDescription = document.getElementById('eventDescription').value;
        const partyTime = document.getElementById('eventTime').value;

        const newParty = document.createElement('li');
        newParty.innerHTML = 
        `
        <li>Name:${name}</li>
        <li>Description:${description}</li>
         <li>Time: ${time} </li>
          <li>date:${date}</li>
        `;
        document.getElementById('events').appendChild(newParty);
    }catch (error) {
        console.error("Could not fetch resource", error);
      }

})

});

