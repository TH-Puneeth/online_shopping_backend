import { Fragment, useState } from "react";

export default function Hero(){
    const [data, setData] = useState(null);
    let content = <HeroContainer />;
    if(data==null){
        content = <HeroDefault />;

    }
    return (
        <Fragment>
            {content}
        </Fragment>
    );
}
function HeroContainer(){
    return (
        <div className=" h-40 md:h-80 flex items-center justify-between">
            <HeroMedia />
        </div>
    );
}
function HeroMedia(){
    return (
        <Fragment>
            <button className="h-[14%] w-[4%] ml-1 rounded-full cursor-pointer border border-black">Left</button>
            <img alt="no" className="w-[90%] h-[90%] rounded-xl border border-black" />
            <button className="h-[14%] w-[4%] mr-1 rounded-full cursor-pointer border border-black">Right</button>
        </Fragment>
    );
}
function HeroDefault(){
    return (
        <div className="h-40 md:h-80 flex flex-col items-center justify-center">
            <span className="text-[180%] font-bold">WELCOME</span>
            <span className="text-[90%]">Keep Shoppping</span>
        </div>
    );
}