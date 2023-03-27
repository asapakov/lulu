import React, {useEffect, useState} from "react";
import './App.scss';
import Block_1 from "./components/Block_1";
import Block_2 from "./components/Block_2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "smooth-scroll";
import Block_3 from "./components/Block_3";
import {data} from './data/index';
import Block_0 from "./components/Block_0";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const updateScrollPosition = (e) => {
            e.stopPropagation();
            let scroll = e.deltaY;
            if(scroll < 0 && page > 1) {
                setPage(page - 1)
            }
            if(page < 3 && scroll > 0) {
                setPage(page + 1)
            }
        }
        window.addEventListener("wheel", updateScrollPosition);
        return () => {window.removeEventListener("wheel", updateScrollPosition);}
    }, [window.scrollY, page]);

    return (
        <div className="app">
            {/*<Header />*/}
            <Block_0 >
                <Block_1 data={data.block_1} page={page}/>
                <Block_2 data={data.block_2} page={page}/>
                <Block_3 data={data.block_3} page={page}/>
            </Block_0>

            {/*<Footer />*/}
        </div>
    )
}

export default App;