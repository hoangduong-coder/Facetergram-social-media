import './status.css'
import MyAvatar from '../../../Images/myAvatar.jpeg';
import {PhotoLibrary, EmojiEmotions, MoreHoriz} from '@material-ui/icons';
import FullStatusView from '../FullStatusView/FullStatusView';
import {useRef, useState, useEffect} from 'react';
export default function Status() {
    const [fullStt, setFullStt] = useState(false);
    const handleClick = () => setFullStt(!fullStt);
    const ref = useRef();
    const handleClickOutside = e => {
        if(ref.current.contains(e.target)){
            return;
        }
        setFullStt(false);
    };
    useEffect(() => {
        if(fullStt){
            document.addEventListener("mousedown", handleClickOutside);
        } 
        else{
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [fullStt])
    return (
        <div className="status">
            <div className="statusWrapper" ref={ref}>
                <div className="topStt">
                    <img src={MyAvatar} alt="avatar" id="ava"/>
                    <input type="text" placeholder="What's on your mind?" onClick={e => handleClick()} name="stt" id="sttText"/>
                    {
                        fullStt && <FullStatusView action={e => handleClick()}/>
                    }
                </div>
                <hr id="sttLine"/>
                <div className="bottomStt">
                    <ul>
                        <li className="sttOptions">
                            <PhotoLibrary htmlColor="#B22222"/>
                            <p className="sttOptionsName">Photo/Video</p>
                        </li>
                        <li className="sttOptions">
                            <EmojiEmotions htmlColor="#FFD700"/>
                            <p className="sttOptionsName">Feeling/Activity</p>
                        </li>
                        <li className="sttOptions">
                            <MoreHoriz htmlColor="#000080"/>
                            <p className="sttOptionsName">More options</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
