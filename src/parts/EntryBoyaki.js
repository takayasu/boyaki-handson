import EntryForm from "./EntryForm";

const postHandler = (value) => {
    console.log(value);
};

const signOut = () => {
    console.log("Signout");
};

const EntryBoyaki = (props) => {
    return (
        <>
            <EntryForm postHandler={postHandler} signOut={signOut} />
        </>
    );
};

export default EntryBoyaki;