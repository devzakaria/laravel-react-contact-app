import { useStoreActions } from 'easy-peasy';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Bar from '../components/Bar'

function Contact() {
    const {id} = useParams();
    const [contact, setcontact] = useState({});
    const getContact = useStoreActions(action => action.getContact)
    useEffect(() => {
        getContact(id).then(data => setcontact(data));
    }, [id]);
    return (
        <>
           <Bar />
            <div className="h-screen p-4">
                <div className="flex items-center flex-col text-center mb-8">
                    <div className="relative">
                        <div 
                            className="bg-gray-700 w-28 h-28 rounded-full shadow-lg"
                            style={{background: `url('https://ui-avatars.com/api/?size=128&background=4b5563&color=fff&name=${contact.first_name}+${contact.last_name}') no-repeat center center/cover`}}
                        ></div>
                        {
                            contact.favourite && (
                                <div className="w-8 h-8 bg-gray-200 rounded-lg absolute bottom-0 right-0 grid place-items-center text-yellow-500">
                                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <p className="font-bold text-3xl mb-1">{contact.first_name} {contact.last_name}</p>
                        <p className="text-xl text-gray-600">{contact.email}</p>
                    </div>
                </div>
                <ul className="bg-gray-50 rounded-md border">
                    <li className="px-3 py-3 border-b text-gray-800 font-medium"><span className="font-bold text-gray-800">First name :</span> {contact.first_name}</li>
                    <li className="px-3 py-3 border-b text-gray-800 font-medium"><span className="font-bold text-gray-800">Last name :</span> {contact.last_name}</li>
                    <li className="px-3 py-3 border-b text-gray-800 font-medium"><span className="font-bold text-gray-800">Email :</span> {contact.email}</li>
                    <li className="px-3 py-3 text-gray-800 font-medium"><span className="font-bold text-gray-800">Phone :</span> {contact.phone}</li>
                    <li className="px-3 py-3 text-gray-800 font-medium"><span className="font-bold text-gray-800">Relation :</span> {contact.relation}</li>
                </ul>
            </div> 
        </>
    )
}

export default Contact
