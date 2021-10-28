import React, {useState} from "react";
import "../components/ChildArea.css";
import { memo } from "react";

const ChildArea = memo((props) => {
  console.log("ChildAreaがレンダリングされた");
  const { open, onClickClose } = props;


  return (
    <>
      {open ? (
        <div className="entire">
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
