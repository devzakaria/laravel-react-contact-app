import React from 'react'
import { useHistory } from 'react-router-dom';

function Contact({contact}) {
    const { id, first_name, last_name, relation } = contact;
    const history = useHistory();
    const visit = () => {
        history.push(`/contact/${id}`)
    }
    return (
        <div className="w-full border-b-2 border-gray-100 px-2 py-3 flex items-center justify-between hover:bg-gray-100"
            onClick={visit}
        >
            <div 
                className="w-14 h-14 rounded-full"
                style={{background: `url('https://ui-avatars.com/api/?background=4b5563&color=fff&name=${first_name}+${last_name}') no-repeat center center/cover`}}
            ></div>
            <div className="mr-auto ml-3">
              <p className="font-bold text-lg mb-1">{first_name} {last_name}</p>
              <p className="text-sm bg-green-400 text-white font-bold px-2 w-min text-center rounded-full">{relation}</p>
            </div>
            {/* <button onClick={handleClick} className="text-gray-500 transition hover:bg-gray-300 p-2 rounded-lg">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            </button> */}
        </div>
    )
}

export default Contact
