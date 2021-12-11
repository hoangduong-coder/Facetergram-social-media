import './FullStatusView.css';
import MyAvatar from '../../../Images/myAvatar.jpeg';
import {Photo, VideoLibrary, EmojiEmotions, PersonAdd, Gif, AddLocationSharp} from '@material-ui/icons';
export default function FullStatusView(props){
    return(
        <div class="fullStatus">
            <div class="fullSttWrapper">
                <div className="upperFullStt">
                    <div className="upperInfo">
                        <img src={MyAvatar} alt="myAvatar" id="sttAvatar"/>
                        <p>Howard</p>
                    </div>
                    <span className="exitStt" onClick={props.action}>&#215;</span>
                </div>
                <div className="middleFullStt">
                    <textarea placeholder="Start a post here!" id="myStt" name="myStt"/>
                </div>
                <div className="bottomFullStt">
                    <ul>
                        <li className="fullSttOptions">
                            <Photo htmlColor="#B22222"/>
                        </li>
                        <li className="fullSttOptions">
                            <VideoLibrary htmlColor="#006400"/>
                        </li>
                        <li className="fullSttOptions">
                            <PersonAdd htmlColor="#000088"/>
                        </li>
                        <li className="fullSttOptions">
                            <Gif htmlColor="#FF6600"  className="gifIcons" fontSize="large"/>
                        </li>
                        <li className="fullSttOptions">
                            <EmojiEmotions htmlColor="#FFD700"/>
                        </li>
                        <li className="fullSttOptions">
                            <AddLocationSharp htmlColor="#663300"/>
                        </li>
                    </ul>
                    <button className="sttButton">Share</button>
                </div>
            </div>
        </div>
    )
}