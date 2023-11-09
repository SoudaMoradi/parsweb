import {Avatar} from "primereact/avatar";



function ItemContent({title,icon}) {
    return(
        <div className="flex gap-2 w-6 justify-content-end p-2">
            <span>{title}</span>
            <Avatar icon={icon}/>
        </div>
    )
}



function ListContent(props) {


    const itmes=[
        {icon:"icon",title:"پشتیبانی"},
        {icon:"icon",title:"اخبار"},
        {icon:"icon",title:"مرکز آموزش"},
        {icon:"icon",title:"دانلود فایل"},
        {icon:"icon",title:"وضعیت شبکه"},
        {icon:"icon",title:"ارسال تیکت پشتیبانی"},
    ]

    return <div className="flex flex-column w-3 align-items-center pt-8">
       <div className="flex align-items-center">
           <span className="font-bold text-4xl">پشتیبانی</span>
       </div>

        <p>درخواستهای پشتیبانی ناحیه کاربری/ناحیه کاربری/</p>
           <p>پشتیبانی</p>

           {
               itmes.map((i)=>{return<ItemContent title={i.title} icon={i.icon}/>})
           }

    </div>;
}




export default ListContent;