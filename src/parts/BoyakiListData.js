import BoyakiList from "./BoyakiList";

const testData = [
    {
      owner: 'Takayasu',
      content: 'ぼやき',
      key: 1
    },
    {
      owner: 'Takayasu',
      content: 'ぼやき2',
      key: 2
    }
  ];

const BoyakiListData = (props) => {

    return (
        <>
            <BoyakiList list={testData}/>
        </>
    );

};

export default BoyakiListData;