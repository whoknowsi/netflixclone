import React, { useState, useEffect } from 'react';
import './Row.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { width } from '@mui/system';


const Row = ({ title, items }) => {

    const listLength = items.results.length;

    // Change resolutions
    const handleResize = () => {
        if (window.innerWidth <= 800) {
            setWidthImg(listLength * 150);
        } else {
            setWidthImg(listLength * (window.innerWidth / 8));
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        handleResize();
    }, []);


    // useState
    const [rowScroll, setRowScroll] = useState(0);
    const [widthImg, setWidthImg] = useState();

    const handleLeftArrow = () => {
        let x = rowScroll + Math.floor(Math.round(window.innerWidth) / (widthImg/listLength)) * (widthImg/listLength);
        if (x > 0) x = 0;
        setRowScroll(x);
    }
    const handleRightArrow = () => {
        let x = rowScroll - Math.floor(Math.round(window.innerWidth) / (widthImg/listLength)) * (widthImg/listLength);
        let listW = listLength * (widthImg/listLength);
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - (widthImg/listLength)*0.3;
        }
        setRowScroll(x);
    }

    if(widthImg) {
        return (
            <article className="movieRow">
                <h2>{title}</h2>
                <div className="movieRowListArea">
                    <div className="movieRowList" style={{
                        marginLeft: rowScroll,
                        width: widthImg
                    }}>
                        <div className="movieRowArrowLeft" style={
                            rowScroll === 0 ? {
                                display: "none"
                            } : {
                                display: "flex"
                            }
                        } onClick={handleLeftArrow}>
                            <ArrowBackIosIcon className="arrowLeft" style={{
                                fontSize: 40,
                                width: (widthImg/listLength)*0.3,
                                height: (widthImg/listLength*1.5)
                            }} />
                        </div>
                        <div className="movieRowArrowRight" onClick={handleRightArrow}>
                            <ArrowForwardIosIcon className="arrowRight" style={{
                                fontSize: 40,
                                width: (widthImg/listLength)*0.3,
                                height: (widthImg/listLength*1.5)
                            }} />
                        </div>
                        {items.results.map((item, key) => (
                            <div key={key} className="movieRowItem">
                                <img src={"https://image.tmdb.org/t/p/w300/" + item.poster_path} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </article>
    
    
        )
    } else {
        return(null);
    }
}

export default Row
