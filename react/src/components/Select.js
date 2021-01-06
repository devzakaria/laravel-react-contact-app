import React from 'react'

function Select({children, name, label}) {
    return (
      <div className="mb-5">
        {label && (
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-3 w-full">
            {label}
          </label>
        )}
        <select
          name={name}
          className="bg-gray-100 text-grey-darker border border-grey-100 rounded py-3 transition focus:border-indigo-700 px-4 w-full"
        >
          {children}
        </select>
      </div>
    );
}

export default Select
