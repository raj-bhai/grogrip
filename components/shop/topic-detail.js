import React, {useState, useEffect} from "react";
import { planetVariants } from "../../utils/motion";


const Input = ({ label, placeholder, onChange }) => {
    return (
        <div className=" w-[60%] mt-8 " >
            <h1 className=" my-font text-[24px] text-white " >{label}</h1>
            <input type='text' className=" w-full h-[45px] rounded-lg text-gray px-4 mt-1" placeholder={placeholder}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            >
            </input>
        </div>
    )
}

const TopicDetail = ({updateTopic, updateReferral, updateContact, updateDoc}) => {

    const [topic, setTopic] = useState("");
    const [referral, setReferral] = useState("");
    const [contact, setContact] = useState("");
    const [doc, setDoc] = useState("");

    return (
        <div className=" w-[100%] h-[500px] px-8 " >
            <Input
                label="Topic Name*"
                placeholder={"Please let us know the topic of the video"}
                onChange={(text) => {
                    setTopic(text)
                    updateTopic(text)
                }}
            />
            <Input
                label="Reference (optional)"
                placeholder={"please let us know the reference of the topic"}
                onChange={(text) => {
                    setReferral(text)
                    updateReferral(text)
                }}
            />
            <Input
                label="Your contact details*"
                placeholder={"Email / whatsapp Number/ Discord"}
                onChange={(text) => {
                    setContact(text)
                    updateContact(text)
                }}
            />
            <Input
                label="Attach a document for the topic (for more than one topic)"
                placeholder={"Let us know about the topics with a document"}
                onChange={(text) => {
                    setDoc(text)
                    updateDoc(text)
                }}
            />
        </div>
    )
}

export default TopicDetail