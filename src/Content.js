import React from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import ListContent from "./ListContent";
import {Dropdown} from "primereact/dropdown";
import {Divider} from "primereact/divider";


function ContentSupport({part,issue,closed,icon,date,time}) {
    return(
        <div className="w-8 h-fit shadow-5">
            <div className="flex gap-2 p-3">
                <Button label={"ارسال تیکت پشتیبانی"}/>
                <InputText/>
            </div>
            <div className="flex justify-content-end align-items-center flex-wrap gap-2 p-3">
                <Dropdown/>
                <span>مشاهده</span>
            </div>
            <div className="flex justify-content-between align-items-center">
                <div className="flex justify-content-start align-items-center gap-3 p-3">
                    <i className="pi pi-caret-down"></i>
                    <span>آخرین بروزرسانی</span>
                    <i className="pi pi-caret-up"></i>
                    <span>وضعیت</span>
                </div>
                <div className="flex justify-content-start align-items-center gap-3 p-3">
                    <i className="pi pi-caret-down"></i>
                    <span>بخش</span>
                    <i className="pi pi-caret-up"></i>
                    <span>موضوع</span>
                </div>
            </div>
            <Divider/>
            <div className="flex justify-content-start align-items-center gap-3 p-3">
                <div>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                <div>
                    <i className={`${icon}`}/>
                    <span>{closed}</span>
                </div>
                <span>{part}</span>
            </div>
            <Divider/>
        </div>


    )}








function Content(props) {

    const items=[
        {part:"بخش",issue:"موضوع",closed:"بسته شده",icon:"pi-minus-circle",date:"2023/06/03",time:"(11:58)"},
    ]


    return (
        <div className="flex-1 flex">
            <div className="flex-1 flex justify-content-center align-items-start pt-8">

                {
                    items.map((i)=>{return <ContentSupport part={i.part} issue={i.issue} closed={i.closed} icon={i.icon} date={i.date} time={i.time}/>})
                }
            </div>

            <ListContent/>
        </div>
    );
}






export default Content;