import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const sideBarList = [
    {
        name: 'Home',
        icon: <HomeOutlinedIcon/>,
        link: '/home'
    },
    {
        name: 'Explore',
        icon: <ExploreOutlinedIcon/>,
        link: '/explore'
    },
    {
        name: 'Playlists',
        icon: <QueueMusicOutlinedIcon/>,
        link: '/playlist'
    },
    {
        name: 'About Us',
        icon: <InfoOutlinedIcon/>,
        link: '/about'
    }
];