import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const getFirstLetter = (name) => {
    if(name){
        return name.charAt(0);
    }else{
        return "";
    }
};

const PostItem = ({post}) => {

    console.log('PostItem',post);
    return (
        <>
            <Card raised={true} sx={{margin: '10px'}}>
                <CardHeader avatar={<Avatar sx={{bgcolor: red[500]}}>{getFirstLetter(post.owner)}</Avatar>} title={post.owner}> </CardHeader>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{post.content}</Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default PostItem;