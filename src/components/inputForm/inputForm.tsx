import React from 'react';

const InputForm:React.FC<any> = ({name,value,onChange}) => {
    return (
        <>
            <label htmlFor={name} className='font-semibold text-md'>Your Url</label>
            <input 
                type="url"
                className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm'
                placeholder='https://example.com' 
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            />   
        </>
    );
}

export default InputForm;
