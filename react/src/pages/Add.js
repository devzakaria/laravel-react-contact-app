import React, { useState } from 'react'
import { useStoreActions } from 'easy-peasy';
import { useHistory } from 'react-router-dom';
import Bar from "../components/Bar";
import Form from '../components/Form';
import Input from "../components/Input";
import Select from '../components/Select';


function Add() {
  const addContact = useStoreActions(action => action.addContact);
  const history = useHistory();
  const [errors, setErrors] = useState({})
  const handleSubmit = (data, err) => {
    setErrors(err)
    if (Object.entries(err).length === 0) {
      addContact({...data, favourite: false}).then(() => {
        history.push("/");
      })
    }
  }
    return (
      <>
        <Bar title="Add a Contact" />
        <div className="h-full p-4 overflow-y-scroll">
          <Form className="flex flex-col" submit={handleSubmit}>
                {/* <div className="p-3">
                  <button type="button" className="text-gray-500 bg-gray-100 p-4 hover:bg-gray-200 transition rounded-lg block mx-auto">
                    <svg className="w-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </button>
                </div> */}
                <Input label="First Name :" name="first_name" type="text" error={errors["first_name"]} placeholder="Jhone" />
                <Input label="Last Name :" name="last_name" type="text" error={errors["last_name"]} placeholder="Doe" />
                <Input label="Phone Number :" name="phone" type="text" error={errors["phone"]} placeholder="+212 26 15 45" />
                <Input label="Email :" name="email" type="email" error={errors["email"]} placeholder="email@email.com" />
                <Select name="relation" label="Relation :">
                  <option value="friend">friend</option>
                  <option value="business">Business</option>
                  <option value="school">School</option>
                </Select>
                <div className="mb-5">
                  <button type="submit" className="bg-indigo-700 text-white rounded py-3 transition hover:bg-indigo-600 px-4 w-full">
                    Add Contact
                  </button>
                </div>
          </Form>
        </div>
      </>
    );
}

export default Add
