import EntryForm from "./EntryForm";

const postHandler = (value) => {
    console.log(value);
};

const EntryBoyaki = (props) => {
    return (
        <>
            <EntryForm postHandler={postHandler} signOut={props.signOut} />
        </>
    );
};

export default EntryBoyaki;