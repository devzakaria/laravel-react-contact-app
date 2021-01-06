import axios from 'axios';
import { action, createStore, thunk } from 'easy-peasy';
// default URL
axios.defaults.baseURL = "http://localhost:8000/api/"

const store = createStore({
  contacts: [],
  setContacts: action((state, payload) => {
    state.contacts = payload;
  }),
  getContacts: thunk(async (action) => {
    const { data } = await axios.get('/contacts');
    action.setContacts(data)
  }),
  addContact: thunk(async (action, payload, {getState}) => {
    const { data } = await axios.post('/contacts', payload);
    getState().contacts.push(data);
  }),
  getContact: thunk(async (action, id) => {
    const { data } = await axios.get(`/contacts/${id}`);
    return data;
  }),
  search: thunk(async (action, payload, {getState}) => {
    if (payload !== "") {
      getState().contacts = getState().contacts.filter(c => c.first_name.startsWith(payload));
    }else {
      action.getContacts();
    }
  }),
});

export default store;