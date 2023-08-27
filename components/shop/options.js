import React, { useEffect, useState } from 'react';

const Options = ({ data, onChange, customOpen }) => {
    const [selectedOption, setSelectedOption] = useState('option2');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        onChange(data[1].price)
    }, [])

    return (
        <div className='w-full'>
            {
                data.map((option, index) => {
                    return (
                        <div key={option.id} className='w-full text-white text-[20px] sm:text-[25px] flex items-start'>
                            <div className='flex items-center'>
                                <input
                                    type="checkbox"
                                    id={option.id}
                                    name="options"
                                    className='w-[20px] h-[20px] mt-2 '
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={(e) => {
                                        if (option.id === 'custom'){
                                            customOpen(true)
                                            handleChange(e);
                                        } else {
                                            if (e.target.checked) {
                                                handleChange(e);
                                                onChange(option.price)
                                            } else {
                                                setSelectedOption(''); // Uncheck the checkbox
                                            }
                                            customOpen(false)
                                        }
                                    }}
                                />
                            </div>
                            <label htmlFor={option.id} className='ml-2 flex-grow my-font '>
                                {option.value}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Options;
