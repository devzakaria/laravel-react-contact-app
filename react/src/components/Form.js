import React from 'react'

function Form({children, submit, className}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputs = Array.from(e.target.elements).filter(e => e.getAttribute("name"))
        const data = {};
        const errors = {}
        inputs.forEach(input => data[input.name] = input.value)
        for(const key in data){
            if (data[key] === "") {
                errors[key] = "Please Fill The Input !!!"
            }
        }
        submit(data, errors);
    }
    return (
        <form className={ className && (className)} onSubmit={handleSubmit}>
            { children }
        </form>
    )
}

export default Form
