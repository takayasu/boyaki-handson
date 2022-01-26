import PostItem from "../component/PostItem";




const BoyakiList = ({list}) => {

    if(!list){
        return (<>
            <h3>No Data</h3>
        </>);
    }

    console.log(list);
    return(
        <>
            {
                list.map(item => (
                    <PostItem key={item.key} post={item}></PostItem>
                ))
            }
        </>
    );
};

export default BoyakiList;