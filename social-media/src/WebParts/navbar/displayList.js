import { useState, useRef, useEffect } from "react";  
const DisplayList = ({image, myClassName, ulClassName, liOptions, otherInfo}) => {
    const ref = useRef();
    const [display, setDisplay] = useState(false);
    const handleClickOutside = e => {
        if(ref.current.contains(e.target)){
            return;
        }
        setDisplay(false);
    };
    useEffect(() => {
        if(display){
            document.addEventListener("mousedown", handleClickOutside);
        } 
        else{
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [display]);
    return(
        <div ref={ref} className="dropdown">
            <div onClick={e => setDisplay(!display)} className={myClassName}>
                {image}
            </div>
            {
                display && (
                    <ul className= {ulClassName}>
                        {otherInfo}
                        {liOptions.map(opt => (
                            <li className="options">
                                <a href="" target="blank" onClick={e => setDisplay(!display)}>{opt}</a>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
export default DisplayList;