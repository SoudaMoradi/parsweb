import React from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import ListContent from "./ListContent";

function Content(props) {
    return (
        <div className="flex-1 flex bg-green-400">
            <div className="flex ">
                <Button label={'ارسال تیکت پشتیبانی'}/>
                <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText/>
                    </span>
            </div>
            <ListContent/>
        </div>


    );
}

export default Content;