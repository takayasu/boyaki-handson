import PostBoyaki from "../component/PostBoyaki";
import ViewSwitcher from "../component/ViewSwitcher";

const EntryForm = (props) => {

    return (
        <>
            <ViewSwitcher />
            <PostBoyaki postHandler={props.postHandler} signOut={props.signOut} />
        </>
    );


};

export default EntryForm;