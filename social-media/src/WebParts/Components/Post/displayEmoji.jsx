import {useRef, useState, useEffect} from 'react';
import './Post.css';
import Angry from '../../../Images/angryIcon.png';
import Funny from '../../../Images/funnyIcon.png';
import { ThumbUpAlt,Favorite,SentimentDissatisfiedTwoTone,ThumbDown } from '@material-ui/icons';
export default function DisplayEmoji(props){
    const ref = useRef();
    const [displayIcon, setDisplayIcon] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(undefined);
    const emojiList = [
        {
            id:1,
            icon: <ThumbUpAlt htmlColor="#0000cc"/>,
            text: 'Like',
            color: '#0000cc'
        },
        {
            id:2,
            icon: <Favorite htmlColor="#e60000"/>,
            text: 'Love',
            color: '#e60000'
        },
        {
            id: 3,
            icon: <img src={Funny} alt="funny" id="EmjIconImg"/>,
            text: 'Funny',
            color: '#ffbf00'
        },
        {
            id:4,
            icon: <SentimentDissatisfiedTwoTone htmlColor="#994d00"/>,
            text: 'Disappointed',
            color: '#994d00'
        },
        {
            id:5,
            icon: <ThumbDown htmlColor='#000080'/>,
            text: 'Dislike',
            color: '#000080'
        },
        {
            id: 6,
            icon: <img src={Angry} alt="angry" id="EmjIconImg"/>,
            text: 'Angry',
            color: '#990000'
        }
    ];
    const handleSelectIcon = (e) => {
        if(ref.current.contains(e.target)) {
            return;
        }
        setDisplayIcon(false)
    }
    const toggleIcon = (e) => setDisplayIcon(!displayIcon)
    useEffect(() => {
        if(displayIcon){
            document.addEventListener("mousedown", handleSelectIcon);
        }
        else {
            document.removeEventListener("mousedown", handleSelectIcon);
        }
        return () => {
            document.removeEventListener("mousedown", handleSelectIcon);
        };
    }, [displayIcon]);
    const handleChangeIcon = value => {
        setSelectedIcon(value);
        setDisplayIcon(false);
    }
    const defaultIcon = (
        <div class="this-icon">
            <ThumbUpAlt/>
            <p>{emojiList[0].text}</p>
        </div>
    )
    return(
        <div ref={ref}>
            <div className="postOptions" onClick={toggleIcon}>
                {selectedIcon || defaultIcon}
            </div>
            {displayIcon && (
                <div className="reactionList">
                    {
                        emojiList.map(i => (
                            <span 
                                className="icon-list" 
                                key={i.id} 
                                onClick={e => handleChangeIcon(
                                    <div class="this-icon">
                                        {i.icon}
                                        <p style={{color:i.color}}>{i.text}</p>
                                    </div>)}
                            >
                                <div className="Emj-Icon">{i.icon}</div>
                            </span>
                        ))
                    }
                </div>
            )
            }
        </div>
    )
}