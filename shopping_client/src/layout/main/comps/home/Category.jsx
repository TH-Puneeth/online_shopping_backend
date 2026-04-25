
import { useEffect, useState } from "react";
import ProductList from "../product/ProductList"
import Home from "./Home";
import { categoryData } from "../../../../data/ApiData";
import ServerIPAddress from "../../../../url/ServerIP";

let cardContainerStyle = "w-5/6 md:w-10/11 m-auto grid grid-cols-2 gap-5 md:gap-x-15 md:gap-y-6 md:grid-cols-4";
let cardStyle = "h-24 rounded-xl md:h-44 cursor-pointer";
let cardImageStyle = "w-full h-4/5 bg-white object-contain rounded-tl-xl rounded-tr-xl border border-b-0 border-gray-300";
let cardTitleStyle = "h-1/5 text-white bg-red-700 text-[80%] md:text-[80%] rounded-bl-xl rounded-br-xl md:h-1/6 flex md:items-center justify-center";

export default function Category({updateMainContent}){
    const [data, setData] = useState(null)
    if(data==null){
        fetch(ServerIPAddress +'/api/v1/categories',{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        });
    }

    return(
        <>
        
        <div className={cardContainerStyle}>
            
            { data==null ? <div className="h-20 absolute left-0 right-0 dark:text-gray-300 flex flex-row items-center justify-center">Loading...</div> : 
                data.map(category =>{
                    return(
                        <div onClick={()=>updateMainContent(<ProductList category={category.category} updateMainContent={updateMainContent} current={ <Home updateMainContent={updateMainContent}/> }/>)} className={cardStyle} key={category.id}>
                            <img src={category.image} className={cardImageStyle} />
                            <div className={cardTitleStyle}>{category.category}</div>
                        </div>)
                })
            }
            
        </div>
        </>
    );
}