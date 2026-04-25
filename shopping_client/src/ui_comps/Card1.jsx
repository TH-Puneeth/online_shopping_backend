export default function Card1({productPage,cartPage,updateMainContent,product}){
    return (
        <CardContainer product={product} productPage={productPage} cartPage={cartPage} updateMainContent={updateMainContent} />
    )
}

function CardContainer({ productPage,cartPage,updateMainContent,product}){
    return (
        <div key={product.id} className="h-[300px] rounded-lg border border-gray-300 dark:border-gray-600">
            <CardMedia url={product.image1} productPage={productPage} updateMainContent={updateMainContent} />
            <CardTitle title={product.name} />
            <CardSubTitle subTitle="" price={product.price} />
            <CardText text={product.description} />
            <CardAction cartPage={cartPage} updateMainContent={updateMainContent} />
        </div>
    )
}

function CardMedia({productPage,updateMainContent,url}){
    let mediaStyle = "h-[45%] w-[100%] object-contain dark:text-gray-300 cursor-pointer"
    return (
        <img src={url} alt="No" onClick={()=>updateMainContent(productPage)} className={mediaStyle} />
    )
}
function CardTitle({title}){
    return (
        <h1 className="h-[10%] w-[100%] text-[100%] pl-[10px] dark:text-gray-300">{title}</h1>
    )
}
function CardSubTitle({subTitle, price}){
    return (
        <div className="h-[10%] w-[100%] flex justify-between ">
            <span className="text-[80%] ml-[10px] text-green-500 dark:text-gray-300">{subTitle}4.5 Rating</span>
            <span className="hidden text-[80%] mr-[10px] text-black dark:text-gray-300">$ {price}</span>
        </div>
    )
}
function CardText({text}){
    return (
        <p className="h-[18%] w-[100%] text-[80%] pl-[10px] pt-[0px] pb-[8px] pr-[10px] overflow-auto dark:text-gray-300">{text}</p>
    )
}
function CardAction({cartPage, updateMainContent}){
    return (
        <div className="h-[17%] w-[100%] dark:text-gray-300 flex items-center">
            <button onClick={()=>updateMainContent(cartPage)} className=" text-[80%] ml-[4%] mr-[5%] font-bold text-violet-700 cursor-pointer">ADD TO CART</button>
        </div>
    )
}