import { useEffect, useState } from "react";
import BoyakiList from "./BoyakiList";

import {API, graphqlOperation,Auth } from 'aws-amplify';
import { listPostsSortedByTimestamp,listPostsBySpecificOwner } from '../graphql/queries';
import { onCreatePost } from '../graphql/subscriptions';

const BoyakiListData = (props) => {

    const [data,setData] = useState([]);
    const [nextToken,setToken] = useState(null);

    const {mode} = props;




    const getAllPosts = async (type, nextToken = null) => {
        const res = await API.graphql(graphqlOperation(listPostsSortedByTimestamp, {
            type: "post",
            sortDirection: 'DESC',
            limit: 20, //default = 10
            nextToken: nextToken,
        }));
        setData(res.data.listPostsSortedByTimestamp.items);
        setToken(res.data.listPostsSortedByTimestamp.nextToken);
        //setIsLoading(false);
    }

    const getAllPostsByOwner = async (type, nextToken = null) => {

        const userid = (await Auth.currentSession()).getIdToken().payload['cognito:username'];
        const res = await API.graphql(graphqlOperation(listPostsBySpecificOwner, {
          owner: userid,
          sortDirection: 'DESC',
          limit: 20,
          nextToken: nextToken,
        }));
        setData(res.data.listPostsBySpecificOwner.items);
        setToken(res.data.listPostsBySpecificOwner.nextToken);
        //setIsLoading(false);
      }

    useEffect(()=>{
        mode == 'All' ? getAllPosts('') : getAllPostsByOwner('');

        // const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
        //     next: (msg) => {
        //       console.log('allposts subscription fired')
        //       const post = msg.value.data.onCreatePost;
        //       setData(data.push(post));
        //     }
        //   });
        //   return () => subscription.unsubscribe();
    },[mode]);


    return (
        <>
            <BoyakiList list={data}/>
        </>
    );

};

export default BoyakiListData;