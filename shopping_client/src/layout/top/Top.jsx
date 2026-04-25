
import Logo from "./comps/Logo";
import Search from "./comps/Search";
import Navigation from "./comps/Navigation";

export default function Top({updateMainContent}) {
    return ( 
        <header className="h-14 w-[100%] xl:w-xl xl:m-auto top-0 bg-red-700 dark:bg-gray-700 md:h-11 flex items-center justify-between ">
            <Logo />
            <Search />
            <Navigation updateMainContent={updateMainContent}/>
        </header>
     );
}
