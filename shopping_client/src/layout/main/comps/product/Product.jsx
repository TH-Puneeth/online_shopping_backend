import { useState } from "react"
import LoginState from "../../../../authentication/LoginStatus"
import UserSignIn from "../../../../authentication/UserSignIn";
import SignInDialog from "../../../../authentication/SignInDialog";
export default function Product({product,updateMainContent, current}){
    return(
        <>
        <div className="w-full h-[50px] md:top-11 bg-white dark:bg-black">
            <button onClick={()=> updateMainContent(current)} className="block w-[50px] h-[30px] ml-2 mt-2 cursor-pointer flex">
                <svg className="h-[100%] w-[40px] mt-[1px]">
                    <line x1="50%" y1="20%" x2="25%" y2="50%" className="stroke-2 stroke-black dark:stroke-white" />
                    <line x1="25%" y1="50%" x2="80%" y2="50%" className="stroke-2 stroke-black dark:stroke-white" />
                    <line x1="25%" y1="50%" x2="50%" y2="80%" className="stroke-2 stroke-black dark:stroke-white" />
                </svg>
            </button>
        </div>
        {
            product==null ? <div className="absolute top-11 bottom-0 right-0 left-0 flex flex-row items-center justify-center">Loading..</div> :
                <div className="md:flex md:justify-evenly md:items-start">
                    <ProductCard product={product} updateMainContent={updateMainContent} current={current} />
                    <div className="w-[90%] h-200 md:w-[45%]"></div>
                </div>
        }
        </>
    )
}

function ProductCard({product, updateMainContent, current}){
    return (
        <div className="w-[90%] md:w-[45%]">
            <CardImage image1={product.image1} image2={product.image2} image3={product.image3} image4={product.image4} image5={product.image5} />
            <CardTitle title={product.name} />
            <CardDescritpion description={product.description} />
            <CardPrice price={product.price} />
            <CardAction product={product} updateMainContent={updateMainContent} current={current} />
        </div>
    )
}
function CardImage({image1, image2, image3, image4, image5}){
    const [imageIndex, setImageIndex] = useState(0);
    let images = [image1, image2, image3, image4, image5];

    return (
        <div>
            <div className="w-full h-[250px]">
                <img src={images[imageIndex]} alt="no" className="h-full w-full object-contain" />
            </div>
            <div className="w-full md:w-[80%] md:m-auto h-[80px] flex items-center justify-evenly gap-1">
                <img src={image1} alt="no" onClick={()=>setImageIndex(0)} className="h-[70%] w-[20%] rounded-sm border border-gray-300 object-contain" />
                <img src={image2} alt="no" onClick={()=>setImageIndex(1)} className="h-[70%] w-[20%] rounded-sm border border-gray-300 object-contain" />
                <img src={image3} alt="no" onClick={()=>setImageIndex(2)} className="h-[70%] w-[20%] rounded-sm border border-gray-300 object-contain"/>
                <img src={image4} alt="no" onClick={()=>setImageIndex(3)} className="h-[70%] w-[20%] rounded-sm border border-gray-300 object-contain" />
                <img src={image5} alt="no" onClick={()=>setImageIndex(4)} className="h-[70%] w-[20%] rounded-sm border border-gray-300 object-contain" />
            </div>
        </div>
    )
}
function CardTitle({title}){
    return (
        <h1 className="h-[50px] font-weight-5 text-lg flex items-center">{title}</h1>
    )
}
function CardDescritpion({description}){
    return (
        <p className="text-sm p-1">{description}</p>
    )
}
function CardPrice({price}){
    return (
        <div className="font-bold h-[50px] flex items-center">{price}</div>
    )
}
function CardAction({product, updateMainContent, current}){
    const [userLoggedIn, setUserLoggedIn] = useState(LoginState.getStatus())
    let handleAddToCart = ()=>{
    if(userLoggedIn){
        alert("Success");
    }
    else{
        updateMainContent(<SignInDialog updateMainContent={updateMainContent} setUserLoggedIn={setUserLoggedIn} current={<Product product={product} updateMainContent={updateMainContent} current={current} />} />)
    }
}
    return (
        <div className="h-[60px] flex items-center justify-evenly">
            <button onClick={()=>handleAddToCart(updateMainContent)} className="block bg-red-700 text-white text-sm w-[35%] md:w-[25%] h-[60%] flex items-center justify-center rounded-md cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black active:border-0 active:bg-red-700 active:text-white">Add to cart</button>
            <button className="block bg-red-700 flex items-center justify-center  text-white text-sm w-[25%] h-[60%] rounded-md cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black active:border-0 active:bg-red-700 active:text-white">Buy</button>
        </div>
    )
}
