import React from "react";
import {importAll} from "../../utils/import";
import Animation from "../Animation";

const Block_2 = (props) => {
    const {page, data} = props;
    const images = importAll(require.context('../../assets/visual/Block_2', false, /\.(png|jpe?g|svg)$/));

    return (
            <div className={`slide slide-2 ${page === 2 ? 'slide-active' : ''}`} id="block_2">
                {/*<img src={images[25]} alt="logo"/>*/}
                <Animation className="slide-2-animation" images={images} />
                <div className="slide-2-content">
                    <h1>{data?.title}</h1>
                    <p>{data?.content_1}</p>
                    <p>{data?.content_2}</p>
                </div>
            </div>
    )
}

export default Block_2;