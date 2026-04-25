import { useEffect, useState } from "react"
import Product from "./Product";
import Home from "../home/Home";
import { productData } from "../../../../data/ApiData";
import ServerIPAddress from "../../../../url/ServerIP";
import Card1 from "../../../../ui_comps/Card1";
import Cart from "../cart/Cart";

let jsonData;
export default function ProductList({category, updateMainContent, current}){
    const [data, setData] = useState(null);
    const [initialMessage, setInitialMessage] = useState("Loading..");
    let content;
    if(data==null){
        content = <div className="w-full h-[250px] flex items-end justify-center text-black dark:text-gray-300">{initialMessage}</div>;
        const url = ServerIPAddress +'/api/v1/products/'+category;
        fetchData({url,setInitialMessage, setData}); 
    }
    else{
        content = <FetchedData data={data} updateMainContent={updateMainContent} category={category} />
    }
    return(
        <>
        <div className="w-full md:top-11 bg-white dark:bg-black h-[50px] flex itmes-center justify-between">
            <button onClick={()=> updateMainContent(current)} className="h-[50px] w-[50px] cursor-pointer flex items-center justify-center">
                <svg className="h-[70%] w-[100%] md:w-[80%] mt-[1px]">
                    <line x1="50%" y1="20%" x2="25%" y2="50%" className="stroke-2 stroke-black dark:stroke-white" />
                    <line x1="25%" y1="50%" x2="80%" y2="50%" className="stroke-2 stroke-black dark:stroke-white" />
                    <line x1="25%" y1="50%" x2="50%" y2="80%" className="stroke-2 stroke-black dark:stroke-white" />
                </svg>
            </button>
            <div className="w-[95%] flex items-center justify-center text-center text-lg dark:text-gray-200">{category}</div>
            <div className="w-[50px]"></div>
        </div>
        
        {content}
        </>
    )
}

function fetchData({url,setInitialMessage, setData}){
    fetch(url, {
        method:'GET'
    })
    .then(response => {
        if(!response.ok){
            return 0;
        }
        return response.json();
    })
    .then(data => {
        if(data.statusCode==404){
            setInitialMessage(data.body);
        }
        else{
            setData(data);
        }
    })
}
function FetchedData({data, updateMainContent, category}){
    let cardContainerStyle = "w-10/11 mt-5 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-8 m-auto dark:bg-black ";
    let cardStyle = "h-15 md:h-40 flex flex-row md:block dark:text-gray-200 border border-gray-300 dark:border-gray-200 rounded-xl cursor-pointer";
    let cardImageStyle = "h-full md:h-[80%] w-[20%] md:w-full rounded-tl-xl rounded-bl-xl border-0 bg-white object-contain";
    let cardTitleStyle = "h-full md:h-[20%] w-[100%] dark:bg-gray-700  pl-4 md:p-0 flex items-center md:justify-center md:text-sm";

    return (
        <div className={cardContainerStyle}>
            {
            data.map( (products)=>{
                    return(
                        // <div key={products.id} className={cardStyle} onClick={()=> updateMainContent(<Product product={products} updateMainContent={updateMainContent} current={<ProductList updateMainContent={updateMainContent} category={category} />} />)}>
                        //     <img src={products.image1} alt="no" className={cardImageStyle} />
                        //     <div className={cardTitleStyle}>{products.name}</div>
                        // </div>
                        <Card1 key={products.id} product={products} updateMainContent={updateMainContent} productPage={<Product product={products} updateMainContent={updateMainContent} current={<ProductList updateMainContent={updateMainContent} category={category} />} />} cartPage={<Cart updateMainContent={updateMainContent}  />}/>
                    )
                    })    
            }
        </div>
    )
}