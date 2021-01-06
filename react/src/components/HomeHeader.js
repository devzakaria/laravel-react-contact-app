import { useStoreActions } from 'easy-peasy';
import React from 'react'
import { useHistory } from 'react-router-dom'

function HomeHeader() {
    const history = useHistory();
    const search = useStoreActions(action => action.search);
    const handleClick = () => {
        history.push("/add");
    }
    const handleChange = (e) => {
        search(e.target.value);
    }
    return (
        <div className="px-2 py-4 bg-gradient-to-br from-indigo-700 to-purple-500 shadow-md">
            <h1 className="text-white font-bold text-4xl my-5">Contact List</h1>
            <div className="flex">
                <input type="text" className="bg-white h-10 px-5 rounded-lg text-sm w-full" placeholder="Search here" onChange={handleChange} />
                <button className="text-white px-1 rounded-lg ml-2 hover:bg-purple-400 transition" onClick={handleClick}>
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                </button>
            </div>
        </div>
    )
}

export default HomeHeader
