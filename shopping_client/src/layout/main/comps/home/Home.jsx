import Category from "./Category";
import Hero from "./Hero";

export default function Home({updateMainContent}) {
    return ( 
        <>
            <Hero />
            <div className="pl-3 text-md text-black dark:text-gray-300 font-bold h-12 flex items-center md:pl-5 md:text-lg">
                Shob by Category
            </div>
            <Category updateMainContent={updateMainContent} />
            <br/>
        </>
     );
}

