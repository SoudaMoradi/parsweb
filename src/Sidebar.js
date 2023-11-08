import React from "react";

import {Avatar} from "primereact/avatar";


function ListItems({icon,title}) {
    return<div className="flex flex-column align-items-center m-3 cursor-pointer w-full">
        <Avatar icon={icon}/>
        <span>{title}</span>
    </div>;
}

function Sidebar(props) {


    const items=[
        {icon:"t",title:"user"},
        {icon:"t",title:"service"},
        {icon:"t",title:"domain"},
        {icon:"f",title:"billing"},
        {icon:"g",title:"support"},
        {icon:"f",title:"Affiliates"},
        {icon:"f",title:"store"},
    ]


    return <div className="flex flex-column align-items-center w-1">
        <img alt={"logo"} src={process.env.PUBLIC_URL + "/logo_.png"} className="w-3rem mt-3"/>

        {
            items.map((i)=>{return<ListItems title={i.title} icon={i.icon}/>})
        }

    </div>;
}



export default Sidebar;