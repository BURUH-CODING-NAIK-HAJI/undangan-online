import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Gift = () => {
  const [copy, setCopy] = useState(true);

  const handleClick = () => {
    setCopy(false);
    setTimeout(() => {
      setCopy(true);
    }, 2000);

    navigator.clipboard.writeText("12345678910");
    return;
  };
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-main bg-cover bg-center p-5 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white border-[3px] border-third mx-auto rounded-xl flex flex-col items-center justify-center gap-6 p-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WSNEo4yCjiHAIZacpGj-wUeuHkv2fKPRrpxj00s0Br_w2fvwq5O8TFVW3GI32YN2Hkw&usqp=CAU"
            alt="Bank"
            width={150}
            height={150}
          />
          <h1 className="text-orange-600">No Rekening: 12345678910</h1>
          <button
            className={`bg-third ${
              !copy && "bg-green-600 hover:bg-green-800"
            } p-3 rounded-md text-white  hover:bg-green-400`}
            onClick={handleClick}
          >
            {copy ? "Copy No.Rek" : "Berhasil diCopy✔️"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Gift;
