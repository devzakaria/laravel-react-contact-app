import React from 'react'

function Input({label, type = "text", name = "", placeholder = "", error}) {
    return (
      <div className="mb-5">
        {label && (
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-3 w-full">
            {label}
          </label>
        )}
        <input
          type={type}
          className="bg-gray-100 border rounded py-3 transition focus:border-indigo-700 px-4 w-full"
          placeholder={placeholder}
          name={name}
        />
        {error && (
          <p className="text-red-600 text-xs mt-0.5 italic">Please Fill The Input</p>
        )}
      </div>
    );
}

export default Input
