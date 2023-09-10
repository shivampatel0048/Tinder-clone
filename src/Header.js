import React from "react";
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx1D8c6KRMd2wHzWiKeSTTwlidmcKOhk0FBilv7KHtaUnHtqiYc_ntuH6EyUN59w3oeg&usqp=CAU"
                alt="tinder__logo"
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header