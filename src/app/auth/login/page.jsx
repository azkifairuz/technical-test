"use client";
import React, { useState } from "react";
import Link from 'next/link'
import Logo from "../../../assets/logo_pokemon.png";
import mdiEye from "../../../assets/mdi_eye.svg";
import mdiHide from "../../../assets/mdi_hide.svg";
import Image from "next/image";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="bg-surface h-screen flex gap-10 justify-center items-center flex-col">
      <div>
        <Image src={Logo} alt="Pokemon Logo" width={271.762} height={100}/>
      </div>
      <div className="w-[480px] flex justify-center items-start flex-col gap-5 py-5 px-10 bg-white rounded-xl shadow-md">
        <h6 className="text-primary items-stretch text-base font-bold font-sans">
          Masuk
        </h6>
        <form action="" className="flex flex-col gap-3 w-full">
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
          <p className="text-primary cursor-pointer pt-3 text-sm font-bold self-end">
            Lupa password?
          </p>
        </form>
        <button className="p-3 bg-primary hover:bg-red-500 rounded-md rounded-md text-white w-full">
          Masuk
        </button>
      </div>
      <div className="text-sm">
        Belum Punya Akun?{" "}
        <strong className="text-primary text-sm cursor pointer">
          <Link href="/auth/register">Daftar Sekarang</Link>
        </strong>
      </div>
    </main>
  );
}
