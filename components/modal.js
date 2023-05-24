import React, { useState } from "react";
import {
    FaTimes,
    FaYoutube,
    FaScroll,
    FaMicrophone,
    FaPhotoVideo,
    FaUpload,
    FaDownload,
    FaEye,
    FaAngleDown,
    FaAngleUp,
    FaDotCircle
} from "react-icons/fa";
import Avatar from 'react-avatar';
import StatusType from "../constants/StatusType";

//bg-gradient-to-r from-[#0B5345] to-[#154360]

const DashboardModal = (props) => {

    let data = props.data

    const [selectedTypes, setSelectedTypes] = useState(0);

    const [selectedFile, setSelectedFile] = useState();
    const [showDropdown, setShowDropdown] = useState(false);

    const hiddenFileInput = React.useRef(null);

    const docs = [
        { uri: "https://drive.google.com/file/d/0B1__nrEW0YRQSGZEYzhrcTdJdmNVNmtmU3pIcjlIZ2Z6QWNv/view?usp=sharing&resourcekey=0-WpQEeR8oRpRcj5yMoPXlrw" },
        { uri: "https://doc-10-5s-docs.googleusercontent.com/docs/securesc/vr7onrptkh4491ips2kmk5k0nn6tcik3/bvi57eb76995dogu20gtccbo48hir17h/1662302550000/06406782797360772114/13196667846116969778/0B1__nrEW0YRQSGZEYzhrcTdJdmNVNmtmU3pIcjlIZ2Z6QWNv?e=download&ax=AI9vYm69YTYUj0ezwfMEQvCm7rHiP2hDvJPiIHoujP9EbG94_THmsDxoMrUo-c9Y4Q5YzTJ1QZYYp6TeaXc1K9DvXJKrvNsgKTjKr_lI_LOouVvIGCsvJBFapwc0tOrZ_L-pYRLzs1Ao5jddOeBrc-Ca7reLKhpCrhcDKfEVsYLAOOY3Md11WGmM7YiA8vvSxlV-EAUGcJic2u66LMzKHdzP5o1Oyt0nQhXJJYxLBPE0qeTteDZ8DDYIvbnSBb2RNEr40sJlV6Ya3DcIwOeQA_qkHBmC2Grb33o6kWzt1w5cZ-w_7cCN_2chPgE7mRbzQHuv3YEyQaSKwNpmatCBWSz_ESc0kJ_oQrt9Kdt0gMtfy4nUi8Ot2cTVH5qeb871BRHaoCl-x3xMOMdbG4W5h-Lw2tQ_IHlqExQ_cXC074opJIticnAyKCLRNC_aSK3BSbc4A1JBIiscbjUlHhCfKfJkfvugc5vv6TdRN3TM_82YxIlAayy4IS4cCN0ZKsGzxdlWsqKxguJVhcetQWIG6dLnPn9-fIrg5adZuMRTxJrovPGi_q8NZSFB_eaTQKyOXUVBTO6SC3cBgpGciidEWe8rcvIqThJDQ7TSo0E_qvhlS8o4D7pUJHODeZyilc-WZIpRfVYedPBeJZugxfECg1F_rAK0IlXLlzsKFED-fXdszj9fLtlRVb_LLhfW7m4pSKpMKSO5nQABFrVvMH9AUCfYR0HjC_lGpUEF_Zs&uuid=0ac4c392-ef55-4336-8e8d-9e13cc39c6af&authuser=0&nonce=bm121i6s2ku9q&user=13196667846116969778&hash=6o102v6hbi2cn6857i86mokhtrl4o8rj" }, // Local File
    ];

    const focusedTextColor = "#F8C471"

    const Types = [
        {
            name: "Script"
        },
        {
            name: "Voice Over"
        },
        {
            name: "Video"
        },
        {
            name: "Thumbnail"
        }
    ]


    const ScriptUI = (props) => {
        return (
            <div>

            </div>
        )
    }

    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            // selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };

    const Upload_UI = () => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <button onClick={() => hiddenFileInput.current?.click()}
                    className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center animate-bounce " type="file">
                    <h1 className=" text-[#17202A] font-bold " >Upload</h1>
                    <FaUpload
                        size={20}
                        color="#17202A"
                        className="ml-[5px]"
                    />
                </button>
                <input type="file" ref={hiddenFileInput} onChange={onFileUpload()} style={{ display: 'none' }} />
            </div>
        )
    }

    const Download_UI = () => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <button onClick={() =>
                    window.open(docs[0].uri)
                } className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center animate-bounce" type="file">
                    <h1 className=" text-[#17202A] font-bold " >View</h1>
                    <FaEye
                        size={20}
                        color="#17202A"
                        className="ml-[5px] mt-[2px]"
                    />
                </button>
                <button onClick={() =>
                    // window.open(docs[1].uri)
                    null
                } className="w-[150px] h-[40px] bg-white rounded-md flex justify-center items-center ml-[100px] animate-bounce " type="file">
                    <h1 className=" text-[#17202A] font-bold " >Download</h1>
                    <FaDownload
                        size={20}
                        color="#17202A"
                        className="ml-[5px]"
                    />
                </button>
                {/* <DocViewer documents={docs}
                    style={{ width: 500, height: 500 }}
                    config={{
                        header: {
                            disableHeader: false,
                            disableFileName: false,
                            retainURLParams: false
                        }
                    }}
                /> */}
            </div >
        )
    }

    const Status_UI = (status) => {
        return (
            <div className="w-[100%] h-[90%] border-[0px] flex justify-center items-center" >
                <div className="h-[40px] w-[250px] bg-white rounded-md flex justify-center items-center animate-bounce ">
                    <h1 className=" text-[#17202A] font-bold " >{status}</h1>
                </div>
            </div>
        )
    }

    const ShowUI = () => {

        //script
        if (selectedTypes === 0 && !data?.ScriptUploaded) {
            if (data?.ScriptAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(data?.Script)
            }
        }
        if (selectedTypes === 0 && data?.ScriptUploaded) {
            return Download_UI()
        }

        //voiceover
        if (selectedTypes === 1 && !data?.VoiceOverUploaded) {
            if (data?.VoiceOverAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(data?.VoiceOver)
            }
        }
        if (selectedTypes === 1 && data?.VoiceOverUploaded) {
            return Download_UI()
        }

        //video
        if (selectedTypes === 2 && !data?.VideoUploaded) {
            if (data?.VideoAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(data?.video)
            }
        }
        if (selectedTypes === 2 && data?.VideoUploaded) {
            return Download_UI()
        }

        //thumbnail
        if (selectedTypes === 3 && !data?.ThumbnailUploaded) {
            if (data?.ThumbnailAssignedToMe) {
                return Upload_UI()
            } else {
                return Status_UI(data?.Thumbnail)
            }
        }
        if (selectedTypes === 3 && data?.ThumbnailUploaded) {
            return Download_UI()
        }
    }

    const keydown = () => {
        if (selectedTypes < (Types.length - 1)) {
            setSelectedTypes(selectedTypes + 1)
        } else {
            setSelectedTypes(0)
        }
    }

    const KeyUp = () => {
        if (selectedTypes > 0) {
            setSelectedTypes(selectedTypes - 1)
        } else {
            setSelectedTypes(Types.length - 1)
        }
    }

    return (
        <div className="h-[100%] w-full">
            {/* <Input onKeyDown={() => console.log("hello mf") }/> */}
            <div className="h-[10px] w-[100% ] justify-end flex">
                <FaTimes
                    size={20}
                    color="white"
                    onClick={() => {
                        props.onClose()
                    }}
                />
            </div>
            <div className="border-[0px] flex justify-between items-center " >
                <div className="flex border-[0px] " >
                    <FaYoutube
                        color='#FF0000'
                        size={50}
                    />
                    <h1 className="mt-[10px] ml-[5px] text-white " >{data?.title}</h1>
                </div>
                <div className="flex items-center" >
                    <Avatar
                        color={Avatar.getRandomColor('sitebase', ['white'])}
                        name={data?.channelName ? data.channelName : "Channel Name"}
                        round={true}
                        size={30}
                        className="mr-[5px]"
                    />
                    <h1 className="mr-[50px] text-white" >{data?.channelName ? data.channelName : "Channel Name"}</h1>
                </div>
            </div>
            <div>
                <div className="flex" >
                    <div className="border-[0px] w-[14%] h-[500px] mt-[10px] " >
                        {
                            Types.map((x, i) =>
                                <div key={i} className="border-[0px] relative w-[100%] pl-[10px] flex cursor-pointer rounded-md h-[50px]  items-center "
                                    style={{
                                        // backgroundColor: selectedTypes === i ? "yellow" : null 
                                        background: selectedTypes === i ? "linear-gradient(#0B5345, #154360)" : null
                                    }}
                                    onClick={() => {
                                        setSelectedTypes(i);
                                        setShowDropdown(false)
                                    }}
                                >
                                    {(x.name === "Script") &&
                                        <FaScroll
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Voice Over") &&
                                        <FaMicrophone
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Video") &&
                                        <FaYoutube
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }
                                    {(x.name === "Thumbnail") &&
                                        <FaPhotoVideo
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            size={selectedTypes === i ? 28 : 25}
                                        />
                                    }

                                    <h1 className=""
                                        style={{
                                            color: selectedTypes === i ? 'white' : 'gray',
                                            fontSize: selectedTypes === i ? 17 : 14,
                                            marginLeft: selectedTypes === i ? 10 : 5,
                                        }}
                                    >{x.name}</h1>
                                    {
                                        (x.name === "Script" && data?.ScriptAssignedToMe) &&
                                        <FaDotCircle
                                            size={selectedTypes === i ? 8 : 7}
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            className="absolute right-[10px] "
                                        />
                                    }
                                    {
                                        (x.name === "Voice Over" && data?.VoiceOverAssignedToMe) &&
                                        <FaDotCircle
                                            size={selectedTypes === i ? 8 : 6}
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            className="absolute right-[10px] "
                                        />
                                    }
                                    {
                                        (x.name === "Video" && data?.VideoAssignedToMe) &&
                                        <FaDotCircle
                                            size={selectedTypes === i ? 8 : 7}
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            className="absolute right-[10px] "
                                        />
                                    }
                                    {
                                        (x.name === "Thumbnail" && data?.ThumbnailAssignedToMe) &&
                                        <FaDotCircle
                                            size={selectedTypes === i ? 8 : 7}
                                            color={selectedTypes === i ? 'white' : 'gray'}
                                            className="absolute right-[10px] "
                                        />
                                    }
                                </div>
                            )
                        }

                    </div>
                    <div className="border-[0px] relative w-[80%] ml-[20px] h-[500px] mt-[10px] rounded-md flex-col bg-gradient-to-r from-[#0B5345] to-[#154360] justify-center items-center ">
                        {
                            selectedTypes === 0 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.ScriptAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ScriptAssignedToMe ? "bold" : null,
                                        }}
                                    >Assigned To : {data?.ScriptAssigned}</h1>
                                    {
                                        data?.ScriptAssignedToMe &&
                                        <h1 className="ml-[5px]"
                                            style={{
                                                color: data?.ScriptAssignedToMe ? focusedTextColor : "white",
                                                fontWeight: data?.ScriptAssignedToMe ? "bold" : null,
                                            }}
                                        > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex items-center" >
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.ScriptAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ScriptAssignedToMe ? "bold" : null,
                                        }}
                                    >Status : </h1>
                                    <h1 className="text-white ml-[5px]"
                                        style={{
                                            color: data?.ScriptAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ScriptAssignedToMe ? "bold" : null,
                                        }}
                                    >{data?.Script}</h1>
                                    {
                                        data?.ScriptAssignedToMe && (
                                            showDropdown ?
                                                <FaAngleUp
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                /> :
                                                <FaAngleDown
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                />
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 1 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.VoiceOverAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VoiceOverAssignedToMe ? "bold" : null,
                                        }}
                                    >Assigned To : {data?.VoiceOverAssigned}</h1>
                                    {
                                        data?.VoiceOverAssignedToMe &&
                                        <h1 className="text-white ml-[5px]"
                                            style={{
                                                color: data?.VoiceOverAssignedToMe ? focusedTextColor : "white",
                                                fontWeight: data?.VoiceOverAssignedToMe ? "bold" : null,
                                            }}
                                        > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.VoiceOverAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VoiceOverAssignedToMe ? "bold" : null,
                                        }}
                                    >Status : </h1>
                                    <h1 className="text-white ml-[5px]"
                                        style={{
                                            color: data?.VoiceOverAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VoiceOverAssignedToMe ? "bold" : null,
                                        }}
                                    >{data?.VoiceOver}</h1>
                                    {
                                        data?.VoiceOverAssignedToMe && (
                                            showDropdown ?
                                                <FaAngleUp
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                /> :
                                                <FaAngleDown
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                />
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 2 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.VideoAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VideoAssignedToMe ? "bold" : null,
                                        }}
                                    >Assigned To : {data?.VideoAssigned}</h1>
                                    {
                                        data?.VideoAssignedToMe &&
                                        <h1 className="text-white ml-[5px]"
                                            style={{
                                                color: data?.VideoAssignedToMe ? focusedTextColor : "white",
                                                fontWeight: data?.VideoAssignedToMe ? "bold" : null,
                                            }} > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.VideoAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VideoAssignedToMe ? "bold" : null,
                                        }}
                                    >Status : </h1>
                                    <h1 className="text-white ml-[5px]"
                                        style={{
                                            color: data?.VideoAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.VideoAssignedToMe ? "bold" : null,
                                        }}
                                    >{data?.video}</h1>
                                    {
                                        data?.VideoAssignedToMe && (
                                            showDropdown ?
                                                <FaAngleUp
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                /> :
                                                <FaAngleDown
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                />
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {
                            selectedTypes === 3 &&
                            <div className="flex justify-between " >
                                <div className="flex px-[20px] py-[10px]">
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.ThumbnailAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ThumbnailAssignedToMe ? "bold" : null,
                                        }}
                                    >Assigned To : {data?.ThumbnailAssigned}</h1>
                                    {
                                        data?.ThumbnailAssignedToMe &&
                                        <h1 className="text-white ml-[5px]"
                                            style={{
                                                color: data?.ThumbnailAssignedToMe ? focusedTextColor : "white",
                                                fontWeight: data?.ThumbnailAssignedToMe ? "bold" : null,
                                            }}
                                        > (you)</h1>
                                    }
                                </div>
                                <div className="px-[20px] py-[10px] flex" >
                                    <h1 className="text-white"
                                        style={{
                                            color: data?.ThumbnailAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ThumbnailAssignedToMe ? "bold" : null,
                                        }}
                                    >Status : </h1>
                                    <h1 className="text-white ml-[5px]"
                                        style={{
                                            color: data?.ThumbnailAssignedToMe ? focusedTextColor : "white",
                                            fontWeight: data?.ThumbnailAssignedToMe ? "bold" : null,
                                        }}
                                    >{data?.Thumbnail}</h1>
                                    {
                                        data?.ThumbnailAssignedToMe && (
                                            showDropdown ?
                                                <FaAngleUp
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                /> :
                                                <FaAngleDown
                                                    color={focusedTextColor}
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    size={20}
                                                    className="mt-[5px] ml-[5px] cursor-pointer "
                                                />
                                        )
                                    }
                                </div>
                            </div>
                        }
                        {
                            showDropdown &&
                            <div className="absolute top-[40px] -right-[20px] w-[170px] rounded-md bg-white " >
                                {
                                    StatusType.map((x, index) =>
                                        <div key={index} className="w-[100%] h-[35px] border-[0px] items-center pl-[20px] flex hover:bg-sky-700 cursor-pointer "
                                            onClick={() => {
                                                setShowDropdown(false)
                                                if (selectedTypes === 0) {
                                                    data.Script = x.name
                                                }
                                                if (selectedTypes === 1) {
                                                    data.VoiceOver = x.name
                                                }
                                                if (selectedTypes === 2) {
                                                    data.video = x.name
                                                }
                                                if (selectedTypes === 3) {
                                                    data.Thumbnail = x.name
                                                }
                                            }}
                                        >
                                            <h1 className="text-[#17202A] w-[100%] leading-loose hover:text-white items-center hover:font-bold" >{x.name}</h1>
                                        </div>)
                                }
                            </div>
                        }
                        {
                            ShowUI()
                        }
                        {/* //  <Upload_UI />
                        // <Download_UI /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardModal

