import './LeftColumn.css';
import { useState } from 'react';
import myAvatar from '../../Images/myAvatar.jpeg';
import logo1 from '../../Images/leftLogo1.png';
import logo2 from '../../Images/leftLogo2.png';
import logo3 from '../../Images/leftLogo3.png';
import logo4 from '../../Images/leftLogo4.jpg';
import avatar2 from '../../Images/avatar2.jpg';
import avatar3 from '../../Images/avatar3.jpg';
import avatar4 from '../../Images/avatar4.jpg';
import {People, LiveTv, Event, OndemandVideo, GroupWork, Work, Bookmark, WbSunny, ExpandMore, ExpandLess} from '@material-ui/icons'

function ExpandList() {
    return(
        <div>
            <li className="leftItem">
                <Work htmlColor="#906B52" className="leftIcon"/>
                <span className="leftItemName">Jobs</span>
            </li>
            <li className="leftItem">
                <Bookmark htmlColor="#800000" className="leftIcon"/>
                <span className="leftItemName">Saved list</span>
            </li>
            <li className="leftItem">
                <WbSunny htmlColor="#F9D71C" className="leftIcon"/>
                <span className="leftItemName">Weather</span>
            </li>
        </div>
    )
}
function ExpandOptions(props){
    if (props.isDisplayed) {
        return(
            <div>
                <ExpandList/>
                <button className="showMoreLeft" onClick={props.displayFunc}>
                    <ExpandLess className="leftIconMore"/>
                    <p className="leftItemMore">Show less</p>
                </button>
            </div>
        )}
    else {
        return(
            <button className="showMoreLeft" onClick={props.displayFunc}>
                <ExpandMore className="leftIconMore"/>
                <p className="leftItemMore">Show more</p>
            </button> 
        )} 
}
export default function LeftColumn(){
    const[display, setDisplay] = useState(false);
    const expand = () => setDisplay(!display);
    return(
        <div className="leftCol">
            <div className="leftWrapper">
                <ul className="leftList">
                    <li className="leftItem">
                        <img src={myAvatar} alt="avatar" id="avatarLeft"/>
                        <span className="leftItemUser">Howard</span>
                    </li>
                    <li className="leftItem">
                        <People htmlColor="#0000CD" className="leftIcon"/>
                        <span className="leftItemName">Friends</span>
                    </li>
                    <li className="leftItem">
                        <LiveTv htmlColor="#B22222" className="leftIcon"/>
                        <span className="leftItemName">Live</span>
                    </li>
                    <li className="leftItem">
                        <Event htmlColor="#8B0000" className="leftIcon"/>
                        <span className="leftItemName">Events</span>
                    </li>
                    <li className="leftItem">
                        <OndemandVideo htmlColor="#006400" className="leftIcon"/>
                        <span className="leftItemName">Watch videos</span>
                    </li>
                    <li className="leftItem">
                        <GroupWork htmlColor="#1E90FF" className="leftIcon"/>
                        <span className="leftItemName">Groups</span>
                    </li>
                </ul>
                <ExpandOptions isDisplayed={display} displayFunc={() => expand()}/>
                <hr className="leftItemHr"/>
                <ul className="history">
                    <h4>Recently</h4>
                    <li className="historyItem">
                        <img src={logo1} alt="tictactoe" id="historyIcon"/>
                        <span className="historyItemName">Tic-tac-toe</span>
                    </li>
                    <li className="historyItem">
                        <img src={logo2} alt="nightmareFarm" id="historyIcon"/>
                        <span className="historyItemName">Nightmare farm</span>
                    </li>
                    <li className="historyItem">
                        <img src={logo3} alt="uno" id="historyIcon"/>
                        <span className="historyItemName">UNO!</span>
                    </li>
                    <li className="historyItem">
                        <img src={logo4} alt="funMathGroup" id="historyIcon"/>
                        <span className="historyItemName">Do math for fun</span>
                    </li>
                    <li className="historyItem">
                        <img src={avatar4} alt="tictactoe" id="historyIcon"/>
                        <span className="historyItemName">Sarah Tran</span>
                    </li>
                    <li className="historyItem">
                        <img src={avatar2} alt="nightmareFarm" id="historyIcon"/>
                        <span className="historyItemName">Hien Ho</span>
                    </li>
                    <li className="historyItem">
                        <img src={avatar3} alt="uno" id="historyIcon"/>
                        <span className="historyItemName">Hien Huynh</span>
                    </li>
                    <li className="historyItem">
                        <img src={logo4} alt="funMathGroup" id="historyIcon"/>
                        <span className="historyItemName">Do math for fun</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}