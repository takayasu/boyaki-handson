import PostBoyaki from "../component/PostBoyaki";
import ViewSwitcher from "../component/ViewSwitcher";

import {useMode} from "./BoyakiListData";

const EntryForm = (props) => {

    const {mode,change} = props;

    return (
        <>
            <ViewSwitcher change={change} mode={mode} />
            <PostBoyaki postHandler={props.postHandler} signOut={props.signOut} />
        </>
    );


};

export default EntryForm;