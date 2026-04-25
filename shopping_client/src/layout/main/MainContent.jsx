import React, { useState } from 'react';
import Home from "./comps/home/Home";

function MainContent({mainContent, updateMainContent}) {
    
    if(mainContent==null){
        mainContent = <Home updateMainContent={updateMainContent} current={<Home updateMainContent={updateMainContent} />} />;
    }
    //setMainContent(content)
    return (
        <main className="xl:w-xl xl:m-auto bg-[#ffffff] dark:bg-black">
            {mainContent}
        </main>
    )
}

export default MainContent;