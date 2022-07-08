import React, {useState} from "react";
import About from "./About"
import Blogs from "./Blogs";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Controlls from './Controlls';
import Header from './Header';

export default function Home(){

    const [isActiveList, setIsActiveList] = useState([1,0,0,0,0])

    function pageNavigator(num) {
        const a = [0,0,0,0,0]
        a[num] = 1
        setIsActiveList(a)
        console.log(a)
    }

    return (
        <div className='main-content'>
            <Header isActive={isActiveList[0]}/>
            <main>
                <About isActive={isActiveList[1]}/>
                <Portfolio isActive={isActiveList[2]}/>
                <Blogs isActive={isActiveList[3]}/>
                <Contact isActive={isActiveList[4]}/>
            </main>
            <Controlls list={isActiveList} navigator={pageNavigator}/>
        </div>  
    )
}