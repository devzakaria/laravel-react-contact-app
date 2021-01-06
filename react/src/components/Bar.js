import React from 'react'
import { Link } from 'react-router-dom'

function Bar({title}) {
    return (
        <div className="px-2 py-4 bg-indigo-700 shadow-md">
          <div className="flex items-center">
                <Link to="/" className="text-white px-2 py-0.5 rounded-lg hover:bg-indigo-500 transition mr-3">
                    <svg className="w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                {
                    title && (
                        <h1 className="text-white font-bold text-2xl">{title}</h1>
                    )
                }
          </div>
        </div>
    )
}

export default Bar
