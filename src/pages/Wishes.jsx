import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import { firestore } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import moment from "moment";

const Wishes = () => {
  // state
  const [datas, setDatas] = useState([]);

  // react-hook-form
  const { register, handleSubmit, reset } = useForm();
  const handleForm = ({ nama, ucapan, kehadiran }) => {
    if (!nama || !ucapan || !kehadiran) {
      alert("Lengkapi Semua Form");
      return;
    }
    reset();
    const docId = Date.now().toString();
    const wishesRef = doc(firestore, "wishes", docId);
    setDoc(wishesRef, {
      id: docId,
      nama: nama,
      ucapan: ucapan,
      kehadiran: kehadiran,
      createdAt: moment().format("LLLL"),
    })
      .then((res) => {
        alert("Data Berhasil Ditambahkan");
        window.location.reload();
      })
      .catch((err) => {
        alert("Data Gagal Ditambahkan");
      });
  };

  // get collection data
  const getWishesCollection = async () => {
    const collectionArr = [];
    const wishesRef = collection(firestore, "wishes");
    const collectData = await getDocs(wishesRef)
      .then((result) => {
        result.forEach((e) => {
          collectionArr.push(e.data());
        });
      })
      .catch((err) => {
        console.error(err);
      });
    return collectionArr;
  };

  // listener function agar realtime add data
  const listener = () => {
    let wishesRef = collection(firestore, "wishes");
    onSnapshot(wishesRef, (newRec) => {
      getWishesCollection()
        .then((res) => {
          setDatas(res);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  //clc
  useEffect(() => {
    getWishesCollection()
      .then((res) => {
        setDatas(res);
      })
      .catch((err) => {
        console.error(err);
      });

    // component did update
    return () => {
      listener();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-main bg-cover bg-left ">
      <Navbar />
      <div className="w-full min-h-screen bg-black bg-opacity-20 flex flex-col gap-5 items-center p-5">
        <h1 className="font-Open text-primary text-3xl text-center">
          Ucapkan Sesuatu Yang Baik Untuk Kami
        </h1>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="max-w-3xl w-full bg-slate-800 p-5 md:p-8 rounded-xl flex flex-col gap-4 mb-28"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-Open text-white">
              Nama :
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="px-3 py-2 rounded-md outline-primary"
              placeholder="Masukkan Nama"
              {...register("nama")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-Open text-white">
              Ucapan dan Doa :
            </label>
            <textarea
              className="px-3 py-2 rounded-md outline-primary h-32"
              placeholder="Masukkan Ucapan dan Doa untuk kami berdua:)"
              {...register("ucapan")}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-Open text-white">
              Kehadiran :
            </label>
            <select
              className="px-3 py-2 rounded-md outline-primary"
              {...register("kehadiran")}
            >
              <option value=""></option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <button className="bg-green-900 hover:bg-primary py-2 rounded-md text-white text-lg">
            Kirim
          </button>
          <div className="w-full flex flex-col-reverse">
            {datas.map((item) => (
              <div key={item.id} className="border-b-[1px] border-gray-500 p-2">
                <div className="w-full h-full flex flex-row gap-3 items-end">
                  <h1 className="text-primary font-bold text-xl">
                    {item.nama}
                  </h1>{" "}
                  <span className="text-orange-500 font-medium">
                    {item.kehadiran}
                  </span>
                </div>
                <small className="text-secondary">{item.createdAt}</small>
                <h2 className="text-white font-thin">Ucapan: </h2>
                <p className="text-white">{item.ucapan}</p>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Wishes;
