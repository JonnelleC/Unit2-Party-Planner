const state = {
  parties: [],
  party: {},
};

const getParties = async () => {
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events`
    );
    const partyData = await response.json();
  } catch (error) {
    throw new error("Could not fetch resource");
  }
};

getParties();
const getParty = async (eventName) => {
  try {
    const response = await fetch(
      `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2406-FTB-ET-WEB-FT/events${eventName}`
    );
    const partyName = await response.json;
    const event = partyName;
  } catch (error) {
    throw new error("Could not fetch resource");
  }
};

const createEventListing = () => {

}

const partyListing = partydata.names