import React from "react";
import '../components/ChildArea.css';

const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
    {open ? ( <div className="entire">
        <p>子コンポーネント</p>
      </div>): null}
    </>
  );
};

export default ChildArea;
