import React from "react";
import Navbar from "../components/Navbar";
import { SiHandshake } from "react-icons/si";
import { RiCalendarEventLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import Iframe from "react-iframe";

const Event = () => {
  return (
    <div className="w-full min-h-screen bg-secondary bg-cover bg-center ">
      <Navbar />
      <div className="max-w-5xl w-full mx-auto items-center p-5 flex flex-col gap-5">
        <h1 className="font-shalimar text-primary text-6xl text-center">
          Susunan Acara
        </h1>
        {/* Card */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-main bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <SiHandshake color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">AKAD NIKAH</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>Isekai, Kehidupan setelah kematian</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  Minggu <br />
                  32 Desember 2022
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>24.00 WIB</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-full border-[8px] border-third bg-main bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <GiEternalLove color="white" size={40} />
              </div>
              <h1 className="font-Bree text-3xl text-third">RESEPSI</h1>
              <div
                className="flex flex-col items-center justify-center text-third font-Open
               text-center"
              >
                <h2>Bertempat Di</h2>
                <p>Isekai, Kehidupan setelah kematian</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <RiCalendarEventLine color="white" size={40} />
                </div>
                <p>
                  12.00 WIB <br /> s/d Selesai
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center text-black font-Open">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <AiOutlineClockCircle color="white" size={40} />
                </div>
                <p>24.00 WIB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row mb-24">
          <div className="w-full h-full border-[8px] border-third bg-main bg-cover bg-top flex flex-col items-center justify-center p-3 rounded-3xl gap-2">
            <h1 className="font-Bree text-3xl text-third">LOKASI</h1>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.321961733729!2d106.69314651390361!3d-6.221207895496523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f967d81f7375%3A0x472f6fedeb1530f0!2sIsekai%20World%20Portal!5e0!3m2!1sen!2sid!4v1667618391870!5m2!1sen!2sid"
              className="rounded-xl w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
