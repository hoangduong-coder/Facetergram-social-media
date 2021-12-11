import './RightColumn.css';
import {Cake, Search, Event} from '@material-ui/icons';
import noAva from '../../Images/unknownAvatar.jpeg';
import avatar2 from '../../Images/avatar2.jpg';
import avatar3 from '../../Images/avatar3.jpg';
import avatar5 from '../../Images/avatar5.png';
export default function RightColumn(){
    return(
        <div class="rightCol">
            <div className="rightWrapper">
                <div>
                    <h4>Today's notification</h4>
                    <div className="noticeWrapper">
                        <Cake className="cakeIcon" htmlColor="#FFFFFF"/>
                        <span className="birthdayList">
                            <b className="b-notice">Brian Tran</b> and <b className="b-notice">3 others</b> have birthday today.
                        </span>
                    </div>
                    <div className="noticeWrapper">
                        <Event htmlColor="#FFFFFF" className="eventIcon"/>
                        <span className="birthdayList">
                            You have <b className="b-notice">2 memories</b> and <b className="b-notice">1 event</b>.
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="trendsWrapper">
                    <h4>Trends for you</h4>
                </div>
                <hr/>
                <div className="onlineWrapper">
                    <h4>Online</h4>
                    <div class="searchNameBar">
                        <Search/>
                        <input 
                            placeholder="Search a name or a group" 
                            type="text" 
                            id="searchOnline" 
                            name="search" 
                            autoComplete="off"
                        />
                    </div>
                    <ul className="onlineList">
                        <li className="personOnline">
                            <img src={noAva} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Brian Tran</span>
                        </li>
                        <li className="personOnline">
                            <img src={avatar3} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Hien Huynh</span>
                        </li>
                        <li className="personOnline">
                            <img src={avatar2} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Hien Ho</span>
                        </li>
                        <li className="personOnline">
                            <img src={avatar5} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Philips Tri</span>
                        </li>
                        <li className="personOnline">
                            <img src={noAva} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Phan Tri</span>
                        </li>
                        <li className="personOnline">
                            <img src={noAva} alt="avatar" id="onlineAvatar"/>
                            <span className="onlineName">Clone nick</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}