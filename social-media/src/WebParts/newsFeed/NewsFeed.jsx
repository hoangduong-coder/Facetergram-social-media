import './NewsFeed.css'
import Status from '../Components/Status/Status'
import Post from '../Components/Post/Post'
import Pic1 from '../../Images/post1.jpg'
export default function NewsFeed(){
    return(
        <div class="feed">
            <div className="feedWrapper">
               <Status/>
               <Post details={<p>My first post</p>}/>
               <Post details={<img src={Pic1} alt="postPic" id="post-img"/>}/>
            </div>
        </div>
    )
}