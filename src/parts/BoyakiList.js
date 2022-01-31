import PostItem from "../component/PostItem";




const BoyakiList = ({list}) => {

    if(!list){
        return (<>
            <h3>No Data</h3>
        </>);
    }
    return(
        <>
        
            {
                list.map(item => (
                    <PostItem key={item.id} post={item}></PostItem>
                ))
            }
        </>
    );
};

export default BoyakiList;