import { AppBar,Toolbar,Typography,Button } from "@mui/material";

const BoyakiAppBar = (props) => {

    const {user} = props;

    return (
        <>
             <AppBar position="static">
                <Toolbar> 
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Boyaki
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        {user.username}
                    </Typography>
                    <Button color="inherit">MyPage</Button>
                </Toolbar>
            </AppBar>     
        </>
    );
};

export default BoyakiAppBar;