import "./navbar.css";
import {Search,People,Chat,Notifications} from '@material-ui/icons';
import myAvatar from "../../Images/myAvatar.jpeg";
import Logo from "../../Images/Logo.png";
import DisplayList from "./displayList";
export default function Navbar() {
    return(
        <nav>
            <div class="nav-left">
                <img src={Logo} alt="logo" id="logo"/>
                <ul>
                    <li class='icon'>
                        <People/>
                        <p class="numOfNews">1</p>
                    </li>
                    <li class='icon'>
                        <Chat/>
                        <p class="numOfNews">1</p>
                    </li>
                    <li class='icon'>
                        <Notifications/>
                        <p class="numOfNews">1</p>
                    </li>
                </ul>
            </div>
            <div class="nav-right">
                <div class="searchBar">
                    <Search/>
                    <input placeholder="Search ..." type="text" id="search" name="search" autoComplete="off"/>
                </div>
                    <DisplayList
                        image={<img src={myAvatar} alt="avatar" id="avatar"/>}
                        myClassName="user online"
                        ulClassName="optionsMenu"
                        liOptions={["Profile","Options","Logout"]}
                        otherInfo={
                            <li class="name">
                                <img src={myAvatar} alt="avatar" id="menuAvatar"/>
                                <h4>Howard</h4>
                            </li>
                        }
                    />
            </div>
        </nav>
    );
}