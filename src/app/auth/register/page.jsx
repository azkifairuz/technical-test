"use client";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "../../../assets/logo_pokemon.png";
import mdiEye from "../../../assets/mdi_eye.svg";
import mdiHide from "../../../assets/mdi_hide.svg";
import Image from "next/image";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTnc, setAgreeTnc] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTncChange = () => {
    setAgreeTnc(!agreeTnc);
  };
  const isButtonDisabled =
    !password || password !== confirmPassword || !agreeTnc;
  return (
    <main className="bg-surface h-screen pt-20 flex gap-10 justify-center items-center flex-col">
      <div>
        <Image src={Logo} alt="Pokemon Logo" width={271.762} height={100} />
      </div>
      <div className="w-[480px] flex justify-center items-start flex-col gap-5 py-5 px-10 bg-white rounded-xl shadow-md">
        <h6 className="text-primary items-stretch text-base font-bold font-sans">
          Daftar
        </h6>
        <form action="" className="flex flex-col gap-3 w-full">
          <label className="text-sm">Nama</label>
          <input
            className="p-3 rounded-md items-stretch"
            type="text"
            placeholder="Masukan Nama"
          />
          <label className="text-sm">Email</label>
          <input
            className="p-3 rounded-md items-stretch"
            type="text"
            placeholder="Masukan Email"
          />
          <label className="text-sm">Password</label>
          <div className="w-full flex gap-1 rounded-md p-3">
            <input
              className="w-full outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Password"
              onChange={handlePasswordChange}
            />
            <Image
              className="cursor-pointer"
              src={showPassword ? mdiHide : mdiEye}
              alt="Your SVG"
              width="22"
              height="22"
              onClick={togglePasswordVisibility}
            ></Image>
          </div>
          <label className="text-sm">Konformasi Password</label>
          <div className="w-full flex gap-1 rounded-md p-3">
            <input
              className="w-full outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Konfirmasi Password"
              onChange={handleConfirmPasswordChange}
            />
            <Image
              className="cursor-pointer"
              src={showPassword ? mdiHide : mdiEye}
              alt="Your SVG"
              width="22"
              height="22"
              onClick={togglePasswordVisibility}
            ></Image>
          </div>
          <div className="flex gap-3 justify-center items-center h-fit">
            <input
              type="checkbox"
              id="tnc"
              className="w-5 h-5 rounded-lg accent-primary border bg-primary border-gray-400 cursor-pointer"
              onChange={handleTncChange}
            />
            <label
              htmlFor="tnc"
              className=" cursor-pointer pt-3 text-xs  self-start"
            >
              Dengan ini saya menyetujui semua{" "}
              <strong className="text-primary font-bold">
                Syarat & Ketentuan
              </strong>{" "}
              yang berlaku
            </label>
          </div>
        </form>
        <Link href="/auth/login " className="w-full">
          <button
            disabled={isButtonDisabled}
            className={`p-3 bg-primary hover:bg-red-500 rounded-md text-white w-full ${
              isButtonDisabled && "opacity-50 cursor-not-allowed"
            }`}
          >
            Daftar
          </button>
        </Link>
      </div>
      <div className="text-sm">
        Sudah Punya Akun?{" "}
        <strong className="text-primary  text-sm cursor pointer">
          <Link href="/auth/login">Masuk</Link>
        </strong>
      </div>
    </main>
  );
}
