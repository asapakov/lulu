import React from "react";
import {importAll} from "../../utils/import";
import Animation from "../Animation";

const Block_1 = (props) => {
    const {page, data} = props;
    const images = importAll(require.context('../../assets/visual/Block_1', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className={`slide slide-1 ${page === 1 ? 'slide-active' : ''}`} id="block_1">
            <Animation className="slide-1-animation" images={images}/>
            <div className="slide-1-content">
                <h1>{data?.title}</h1>
                <p>{data?.content_1}</p>
                <p>{data?.content_2}</p>
            </div>
        </div>
    )
}

export default Block_1;