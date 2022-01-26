import { Button, List, ListItem, TextField } from "@mui/material";
import { useState } from "react";

const PostBoyaki = (props) => {

    const {postHandler,signOut} = props;

    const [value,setValue] = useState('Test');

    const handleChange = event => {
        setValue(event.target.value);
      };

    return (
        <>
            <TextField rows={8} multiline fullWidth value={value} onChange={handleChange}></TextField>
            <Button variant="contained" fullWidth color="primary" onClick={() => {postHandler(value)}}>Post</Button>
            <Button variant="contained" fullWidth color="secondary" onClick={() => {signOut()}}>Sign Out</Button>
        </>
    );

};

export default PostBoyaki;