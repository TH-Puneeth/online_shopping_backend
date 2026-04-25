
export default function Search(){
    return(
        <div className="w-[70%] sm:w-[40%] md:w-[30%]  h-[70%] flex items-center">
            <input type="search" placeholder="Search by product" className="border-0 border-r-0 border-2-white rounded-tl-md rounded-bl-md dark:border-gray-700 bg-white dark:bg-black text-black dark:text-gray-300 text-sm w-[80%] sm:w-[85%] md:w-[85%] lg:w-[90%]  h-full p-3 focus:outline-0 "/>
            <button type="submit" className="h-full w-[20%] sm:w-[15%] md:w-[15%] lg:w-[10%] bg-black dark:bg-black  border-0 border-l-0  border-white dark:border-gray-700 rounded-tr-md rounded-br-md flex items-center justify-center">
                <svg className="h-[80%] w-[80%] ">
                    <circle cx="60%" cy="42%" r="25%" className="stroke-2 stroke-white dark:stroke-gray-300 fill-none " />
                    <line x1="20%" y1="85%" x2="43%" y2="60%" className="stroke-2 stroke-white dark:stroke-gray-300"/>
                </svg>
            </button>
        </div>
    );
}