import Image from "next/image";
import Navbar from "../../components/Navbar";
import { link } from "fs";
import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <Navbar
        leftContent={
          <Link href={"/"} className="flex gap-3 items-center justify-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8145 2.5L5.24927 12.5L14.8145 22.5L16 21.366L7.51945 12.5L16 3.63397L14.8145 2.5Z"
                fill="white"
              />
            </svg>
            <p className="text-white font-bold text-xl">Profile</p>
          </Link>
        }
        rightContent={<p></p>}
      />
      <main className="flex justify-center gap-[100px] items-center mt-24">
        <div className="flex flex-col gap-6">
          <div className="w-[240px] h-[240px]   flex justify-center items-center  rounded-[12px]">
            <svg
              width="61"
              height="61"
              viewBox="0 0 61 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1909_10190)">
                <path
                  d="M23.0078 20.6895C23.0078 22.1813 22.4152 23.612 21.3603 24.6669C20.3054 25.7218 18.8747 26.3145 17.3828 26.3145C15.891 26.3145 14.4602 25.7218 13.4053 24.6669C12.3504 23.612 11.7578 22.1813 11.7578 20.6895C11.7578 19.1976 12.3504 17.7669 13.4053 16.712C14.4602 15.6571 15.891 15.0645 17.3828 15.0645C18.8747 15.0645 20.3054 15.6571 21.3603 16.712C22.4152 17.7669 23.0078 19.1976 23.0078 20.6895Z"
                  fill="#E51C23"
                />
                <path
                  d="M8.00781 3.81445C6.01869 3.81445 4.11103 4.60463 2.70451 6.01115C1.29799 7.41768 0.507813 9.32533 0.507812 11.3145V48.8145C0.507813 50.8036 1.29799 52.7112 2.70451 54.1178C4.11103 55.5243 6.01869 56.3145 8.00781 56.3145H53.0078C54.9969 56.3145 56.9046 55.5243 58.3111 54.1178C59.7176 52.7112 60.5078 50.8036 60.5078 48.8145V11.3145C60.5078 9.32533 59.7176 7.41768 58.3111 6.01115C56.9046 4.60463 54.9969 3.81445 53.0078 3.81445H8.00781ZM53.0078 7.56445C54.0024 7.56445 54.9562 7.95954 55.6595 8.6628C56.3627 9.36606 56.7578 10.3199 56.7578 11.3145V35.6895L42.5941 28.3882C42.2424 28.212 41.8442 28.1509 41.4559 28.2135C41.0676 28.2761 40.7088 28.4592 40.4303 28.737L26.5178 42.6495L16.5428 36.0045C16.1827 35.7647 15.7507 35.6568 15.3201 35.6992C14.8895 35.7416 14.4868 35.9316 14.1803 36.237L4.25781 45.0645V11.3145C4.25781 10.3199 4.6529 9.36606 5.35616 8.6628C6.05942 7.95954 7.01325 7.56445 8.00781 7.56445H53.0078Z"
                  fill="#E51C23"
                />
              </g>
              <defs>
                <clipPath id="clip0_1909_10190">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0.5 0.0644531)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* <h1 className="text-primary font-bold text-center text-xl cursor-pointer">Ubah Image</h1> */}
        </div>
        <div className="flex flex-col gap-10">
          <div className="shadow-[0px_0px_7px_0px_rgba(0,0,0,0.5)] rounded-lg p-5 w-[808px] flex flex-col items-start justify-center">
            <h1 className="text-primary font-bold text-xl">Profil</h1>
            <form action="" className="flex flex-col gap-3 w-full">
              <label className="text-sm text-[#8D7777]">Nama</label>
              <input
                className="p-3 font-semibold text-[#453E3E] rounded-md items-stretch"
                type="text"
                placeholder="Masukan Email"
                value="Pokemon Lovers"
              />
              <label className="text-sm text-[#8D7777]">Email</label>
              <input
                className="p-3 font-semibold text-[#453E3E] rounded-md items-stretch"
                type="text"
                placeholder="Masukan Email"
                value="johnDoe@gmail.com"
              />
              <label className="text-sm text-[#8D7777]">Password</label>
              <input
                className="p-3 font-semibold text-[#453E3E] rounded-md items-stretch"
                type="password"
                placeholder="Masukan Email"
                value="johnDoe@gmail.com"
              />
            </form>
          </div>
          <button className="rounded-md p-3 bg-primary w-fit self-end text-white font-bold">
            Ubah Profil
          </button>
        </div>
      </main>
    </div>
  );
}
