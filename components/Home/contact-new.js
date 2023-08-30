import React, { useState } from "react";
import axios from "axios";
import url from "../../constants/url";
import { ToastContainer, toast } from 'react-toastify';


const InputBox = ({ value, onChange, label, placeholder }) => {
    return (
        <>
            <p className=" text-[20px] mt-2 myfont " >{label}</p>
            <input
                className=" w-full h-[40px] text-[#000] text-[17px] rounded-md mt-1 pl-2 "
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
            </input>
        </>
    )
}



const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: ''
    });

    const isFormValid = formData.name && formData.email && formData.phone;

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await axios.post(`${url.apiRoot}/grogrip/submit-contact-form`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}` // Add token to request headers
                }
            });
            toast.success("Form submitted sucessfully !!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "colored",
            })
            setFormData({
                name: '',
                email: '',
                phone: '',
                comment: ''
            })
            // console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

    return (
        <div
            className={`${localStorage.getItem('token') ? 'page-content' : 'page-content--blurred'} w-full flex-wrap justify-center sm:gap-4 flex px-2 sm:px-8 sm:py-16 `}
        >
            <div className="w-[400px] invisible sm:visible sm:h-[200px] sm:h-[500px] relative flex justify-center " >
                <img
                    src="/images/Logo/logo-main2.png"
                    className=" absolute lg:top-1/4 lg:scale-[1.8] "
                    alt="grogrip"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%, 0 0, 0 0)' }}
                />
            </div>
            <div className=" w-[100%]  sm:w-[550px] z-[1000] bg-green-600 h-[100%] text-white text-[25px] my-font rounded-lg p-4 sm:p-8 leading-tight " >
                <h1 className=" my-font-bold text-[30px] text-yellow-200 leading-loose " >Contact Us</h1>
                <p className="sm:mb-8" >Leave a message and our team will get back to you in 12 hours</p>
                <InputBox
                    label={"Full name*"}
                    placeholder={"Type your names"}
                    value={formData.name}
                    onChange={(value) => setFormData({ ...formData, name: value })}
                />
                <InputBox
                    label={"Email*"}
                    placeholder={"Type your email"}
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                />
                <InputBox
                    label={"Phone along with country code"}
                    placeholder={"Type your whatsapp phone number"}
                    value={formData.phone}
                    onChange={(value) => setFormData({ ...formData, phone: value })}
                />
                <InputBox
                    label={"Leave a comment!!"}
                    placeholder={"How may I help you"}
                    value={formData.comment}
                    onChange={(value) => setFormData({ ...formData, comment: value })}
                />
                <div className="w-full flex  justify-center" >
                    <button
                        className={`w-[300px] mt-4 h-[45px] text-md rounded-lg ${isFormValid ? 'bg-green-500 hover:bg-green-700 hover:font-bold' : 'bg-green-300 cursor-not-allowed'}`}
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                    >
                        <p>SUBMIT NOW</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;