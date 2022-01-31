import EntryForm from "./EntryForm";
import { createPost } from '../graphql/mutations';

import {API, graphqlOperation } from 'aws-amplify';

const createId = () => {
    return Date.now()*10 +  Math.floor(Math.random() * 9); 
};

const postHandler = async (value) => {
        const res = await API.graphql(graphqlOperation(createPost, { input: {
            id: createId(),
            type: 'post',
            content: value,
            timestamp: Math.floor(Date.now() / 1000),
        }})); 
};

const EntryBoyaki = (props) => {
    return (
        <>
            <EntryForm postHandler={postHandler} signOut={props.signOut} mode={props.mode} change={props.change} />
        </>
    );
};

export default EntryBoyaki;