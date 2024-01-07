import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className='sidebar__twitterIcon'/>

            <SidebarOption active text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
            <SidebarOption text="Messages" Icon={MailOutlineIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SidebarOption text="Communities" Icon={PeopleOutlineIcon} />
            <SidebarOption text="Premium" Icon={TwitterIcon} />
            <SidebarOption text="Lists" Icon={ListAltIcon} />
            <SidebarOption text="Profile" Icon={PermIdentityIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />

            <Button variant='outlined' className='sidebar__tweet' fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;