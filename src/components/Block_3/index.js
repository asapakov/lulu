import React from "react";

const Block_3 = (props) => {
    const {page, data} = props;

    return (
            <div className={`slide slide-3 ${page === 3 ? 'slide-active' : ''}`} id="block_3">
                <div className="slide-3-content">
                    <h1>{data.title}</h1>
                    <p>{data.content_1}</p>
                    <p>{data.content_2}</p>
                    <p>{data.content_3}</p>
                    <p>{data.content_4}</p>
                </div>
            </div>
    )
}

export default Block_3;