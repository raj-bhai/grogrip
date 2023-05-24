import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as dashboardAction from '../../redux/action/dashboard';
import axios from "axios";

import { Spreadsheet, DataViewer } from "./react-spreadsheet"

const Sheet = (props) => {

    const dispatch = useDispatch()
    const headerbox = " bg-gray-600 text-white border-[500px] "
    const classNameItem = " max-w-[400px] min-w-[300px] w-[300px] text-[14px] px-[5px] "
    const Tasks = useSelector(state => state.dashboard.Task);
    const Sheet_ = useSelector(state => state.dashboard.Sheet);
    const Titles = [`Item`, "Comment", "STARTING", "Clients", "Script", "Voice Over", "Video", "Thumbnaiil", "Uploaded", "SCRIPT PAID", "CLIENT PAID"]

    const [data, setData] = useState([[{ value: "" }], [{ value: "" }]]);

    const [activeItem, setActiveItem] = useState(null);
    const [openPopup, setOpenPopup] = useState(false)

    //console.log(Tasks[0].title)


    useEffect(() => {
        if (activeItem?.column == 4) {
            console.log("open popup")
            setOpenPopup(true)
        } else {
            setOpenPopup(false)
        }
    }, [activeItem])

    const GetValue = (index, rowIndex) => {
        let taskName = Tasks[rowIndex]?.title
        let channelName = Tasks[rowIndex]?.channelName
        if (index == 0) {
            return taskName
        }
        if (index == 3) {
            return channelName
        }
        return ""
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(dashboardAction.updateTask(data))
    //         // console.log("Hello mf")
    //     }, 5000)
    // }, [])

    const BindData_ = async () => {
        if (Sheet_?.data) {
            let arr = []
            Sheet_?.data?.forEach((element, index) => {
                let arr1 = []
                element.forEach((x, i) => {
                    let obj = x;
                    // if (i == 3) {
                    //     obj.readOnly = true
                    // }
                    arr1.push(obj)
                });
                arr.push(arr1)
            });
            console.log("arr :", arr)
            setData(arr)
        }
    }



    const BindData = async () => {
        const row = 10;
        const column = Tasks?.length + 1;
        let arr = []
        for (let i = 0; i < column; i++) {
            let Row = []
            for (let j = 0; j < row; j++) {
                console.log("GG :", GetValue(j, 0))
                console.log("PP :", Tasks[0]?.title)
                let obj = {
                    value: GetValue(j, i),
                    className: j == 0 ? classNameItem : " max-w-[150px] text-[14px] px-[5px] "
                }
                Row.push(obj);
            }
            arr.push(Row);
        }
        await setData(arr)
        //await dispatch(dashboardAction.updateTask(data))
    }

    useEffect(() => {
        BindData_()
    }, [Sheet_])



    // const [data, setData] = useState([
    //     [
    //         {
    //             value: "NASA warns of horrific solar flares! Earth will be impacted",
    //             className: classNameItem
    //         },
    //         {
    //             value: ""
    //         },
    //         {}
    //     ],
    //     [
    //         { value: "Kyle Busch under contract with RCR under these 5 conditions!", className: classNameItem },
    //         { value: "" }
    //     ],
    //     [{ value: "Why El Chapo will never escape from his new Prison Cell", className: classNameItem },
    //     { value: "GG" }
    //     ],
    //     [{ value: "Is A NASCAR SPLIT Possible? Or Just An OVERREACTION?", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    //     [{ value: "", className: classNameItem }, { value: "" }],
    // ])
    const header = [[
        { value: "Item", className: headerbox + " ", },
        { value: "Comment", className: headerbox },
        { value: "STARTING", className: headerbox, },
        { value: "Clients", className: headerbox, },
        { value: "Script", className: headerbox, },
        { value: "Voice Over", className: headerbox, },
        { value: "Video", className: headerbox, },
        { value: "Thumbnail", className: headerbox, },
        { value: "Uploaded", className: headerbox, },
        { value: "SCRIPT PAID", className: headerbox, },
        { value: "CLIENT PAID", className: headerbox, }
    ]]

    const DataEditor = (item) => {
        console.log("GG :", item.cell)
        item.onChange
        return (
            <div className="border-green-500" >
                {/* <h1 className=" text-white " >{item.cell.value}</h1> */}
            </div>
        )
    }

    const updateTask = (arr) => {

    }

    const DataViewer_ = (props) => {
        console.log(props)
        return (
            // <div className=" w-[100px] h-[50px] bg-yellow-200 " >
            //     <h1>{props.cell.value}</h1>
            // </div>
            DataViewer
        )
    }


    return (
        <>
            {
                openPopup &&
                <div className=" w-[300px] h-[300px] bg-yellow-200 absolute top-[0px] right-[0px] z-50 " >
                    <div className="w-[200px] h-[50px] bg-white " >
                        <h1 className="text-[#000] " >progress</h1>
                    </div>
                </div>
            }
            <Spreadsheet
                // hideColumnIndicators 
                columnLabels={Titles}
                //rowLabels={["", "", "", "", "", "", "", "", ""]}
                // hideRowIndicators
                // data={Sheet_?.data ? Sheet_.data : []}
                data={data}
                className=" text-[#000] "
                darkMode={true}
                onChange={async (item) => {
                    setData(item)
                    // await dispatch(dashboardAction.updateTask(item))
                }}
                onActivate={(item) => {
                    setActiveItem(item)
                    // console.log("active item", item)
                }}
            //  DataViewer={DataViewer_}
            // onSelect={(point) => {
            //     console.log("onselect :", point )
            // }}
            />
        </>
    )
}

export default Sheet;