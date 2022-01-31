import { List, ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import {Person as PersonIcon,Public as PublicIcon} from '@mui/icons-material';
import { useState } from "react";

const ViewSwitcher = ({mode,change}) => {

    const [innermode,setInnerMode] = useState(mode);
 
    const changeMode = (mode) => {
        setInnerMode(mode);
        change(mode);
    };

    return (
        <>
            <List>
                <ListItemButton selected={innermode=='All'} onClick={()=>{changeMode('All')}}>
                    <ListItemIcon>
                        <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary="Global Timeline" />
                </ListItemButton>
                <ListItemButton  selected={innermode=='Owner'} onClick={()=>{changeMode('Owner')}}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </List>
        </>
    );
};

export default ViewSwitcher;