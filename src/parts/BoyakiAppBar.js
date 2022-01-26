import { AppBar,Toolbar,Typography,Button } from "@mui/material";

const BoyakiAppBar = (props) => {
    return (
        <>
             <AppBar position="static">
                <Toolbar> 
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Boyaki
                    </Typography>
                    <Button color="inherit">MyPage</Button>
                </Toolbar>
            </AppBar>     
        </>
    );
};

export default BoyakiAppBar;