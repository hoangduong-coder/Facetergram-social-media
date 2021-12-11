import './Post.css';
import MyAvatar from '../../../Images/myAvatar.jpeg';
import DisplayEmoji from './displayEmoji.jsx';
import { MoreHoriz, Public,Comment,ReplyAll } from '@material-ui/icons';
export default function Post(props){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postUpper">
                    <img src={MyAvatar} alt="myAvatar" id="postAvatar"/>
                    <div className="postInfo">
                        <h4>Howard</h4>
                        <div className="postTime">
                            <Public className="postPrivacy" fontSize="small"/>
                            <p>Just now</p>
                        </div>
                    </div>
                    <MoreHoriz className="morePost"/>
                </div>
                <div className="postMiddle">
                    {props.details}
                </div>
                <div className="postBottom">
                    <div className="postBottomGeneral">
                        <p>32 Reactions</p>
                        <p>2 comments</p>
                    </div>
                    <hr/>
                    <div className="postBottomOptions">
                        <DisplayEmoji />
                        <div className="postOptions">
                            <Comment/>
                            <p>Comment</p>
                        </div>
                        <div className="postOptions">
                            <ReplyAll/>
                            <p>Share</p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}