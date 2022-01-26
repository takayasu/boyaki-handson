import { List, ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import {Person as PersonIcon,Public as PublicIcon} from '@mui/icons-material';
import { useState } from "react";

const ViewSwitcher = (props) => {

    const [isGlobal,toggleGlobal] = useState(true);

    return (
        <>
            <List>
                <ListItemButton selected={isGlobal} onClick={()=>{toggleGlobal(true)}}>
                    <ListItemIcon>
                        <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary="Global Timeline" />
                </ListItemButton>
                <ListItemButton  selected={!isGlobal} onClick={()=>{toggleGlobal(false)}}>
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