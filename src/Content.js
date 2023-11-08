import React from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import ListContent from "./ListContent";

function Content(props) {
    return (
        <div className="flex-1 flex">

            <div className="flex-1 flex justify-content-center align-items-center">

                <div className="w-8">
                    <div className="flex gap-2  p-2">
                        <Button label={'ارسال تیکت پشتیبانی'}/>
                        <InputText/>
                    </div>
                    <div className="h-30rem bg-yellow-300">bottom</div>
                </div>

            </div>
            <ListContent/>

        </div>


    );
}

export default Content;