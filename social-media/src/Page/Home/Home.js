import Navbar from "../../WebParts/navbar/Navbar";
import LeftCol from "../../WebParts/LeftColumn/LeftColumn"
import Feed from "../../WebParts/newsFeed/NewsFeed"
import RightCol from "../../WebParts/RightColumn/RightColumn"
import './home.css'

export default function Home(){
    return (
        <div>
            <Navbar/>
            <div class="body-part">
                <LeftCol/>
                <Feed/>
                <RightCol/>
            </div>
        </div>
    )
}