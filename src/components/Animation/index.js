import React, {useEffect, useState} from "react";
import { v1 } from "uuid";

const Animation = (props) => {
    const {images, className} = props;

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index + 1 > images.length - 1 ? 0 : index + 1);
        }, 20)
        return () => clearInterval(interval);
    }, [index])

    return(
        <div className={`animation ${className}`}>
            {images.map((img) => <img key={v1()} style={{display: images[index] == img ? 'block' : 'none'}} src={img}
                                      alt="logo"/>)}
        </div>
    )
}

export default Animation;