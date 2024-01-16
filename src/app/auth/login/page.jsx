"use client";
import Dialog from "../../../components/Dialog";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../../assets/logo_pokemon.png";
import pikachu from "../../../assets/password-reset.png";
import mdiEye from "../../../assets/mdi_eye.svg";
import mdiHide from "../../../assets/mdi_hide.svg";
import Image from "next/image";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [content, setContent] = useState("none");

  const handleCloseOverlay = () => {
    // Reset content when closing
    setIsOverlayVisible(!isOverlayVisible);

    setContent("default");
  };

  const handleResetPassword = () => {
    // Change content when resetting password
    setContent("passwordReset");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="bg-surface h-screen flex gap-10 justify-center items-center flex-col">
      <div>
        <Image src={Logo} alt="Pokemon Logo" width={271.762} height={100} />
      </div>
      <div className="w-[480px] flex justify-center items-start flex-col gap-5 py-5 px-10 bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]">
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
          <p
            onClick={handleCloseOverlay}
            className="text-primary cursor-pointer pt-3 text-sm font-bold self-end"
          >
            Lupa password?
          </p>
        </form>
        <Link href="/" className="w-full">
          <button className="p-3 bg-primary hover:bg-red-500 rounded-md  text-white w-full">
            Masuk
          </button>
        </Link>
      </div>
      <div className="text-sm">
        Belum Punya Akun?{" "}
        <strong className="text-primary text-sm cursor pointer">
          <Link href="/auth/register">Daftar Sekarang</Link>
        </strong>
      </div>
      {isOverlayVisible && content == 'default' &&  (
        <Dialog>
          <Dialog.Card>
            <Dialog.CloseButton onClick={handleCloseOverlay} />
            <Dialog.Header>Lupa Password?</Dialog.Header>
            <Dialog.Content>
              <p className="text-sm text-center text-[#8D7777]">
                Kami akan mengirim instruksi melalui email untuk mengganti
                password. Silakan masukkan email kamu.
              </p>
              <form action="" className="flex flex-col gap-3 w-full">
                <label className="text-sm">Email</label>
                <input
                  className="p-3 rounded-md items-stretch"
                  type="text"
                  placeholder="Masukan Email"
                />
              </form>
            </Dialog.Content>
            <Dialog.Button onClick={handleResetPassword}>
              Reset Password
            </Dialog.Button>
          </Dialog.Card>
        </Dialog>
      )}
      {content == 'passwordReset' &&  (
        <Dialog>
          <Dialog.Card>
            <Dialog.Content>
             <div className="flex flex-col justify-center items-center">
             <Image src={pikachu} width={223.256} height={160}></Image>
              <h1 className="text-primary text-xl font-bold">Email Sudah Terkirim</h1>
              <p className="text-sm text-center text-[#8D7777]">Silahkan cek email kamu untuk melakukan proses pergantian password yang baru.</p>
             </div>
            </Dialog.Content>
            <Dialog.Button onClick={handleCloseOverlay}>
              Tutup
            </Dialog.Button>
          </Dialog.Card>
        </Dialog>
      )}
    </main>
  );
}
