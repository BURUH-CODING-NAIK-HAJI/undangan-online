import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Gift = () => {
  const [copy, setCopy] = useState(true);

  const handleClick = () => {
    setCopy(false);
    navigator.clipboard.writeText("12345678910");
    return;
  };
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-main bg-cover bg-center p-5 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full bg-white border-[3px] border-third mx-auto rounded-xl flex flex-col items-center justify-center gap-6 p-2">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiL-Z4N4ZWA1XzsRey-BtSFNExzQoAG2uAeL7dPDHJdgGs9DC7JhGgvu3qWs7uyQBuuKKBIZvNiL1BtT70JIgM4xWOw4zJegKAtf6Gp1jIIXN_nhCj32CZCKt1iC1JQD2rW4VT9HxGWD1zPSs030CiphPTU7CGD-aq30yPFm2spAhuza9Pb5kfFSJzT1g=w1200-h630-p-k-no-nu"
            alt="Bank BRI"
            width={200}
            height={200}
          />
          <h1 className="text-orange-600">No Rekening: 12345678910</h1>
          <button
            className={`bg-third ${
              !copy && "bg-green-600"
            } p-3 rounded-md text-white `}
            onClick={handleClick}
          >
            {copy ? "Copy No.Rek" : "No.Rek Berhasil Di Copy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Gift;
