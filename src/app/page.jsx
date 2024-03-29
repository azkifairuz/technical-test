import Image from "next/image";
import Navbar from "../components/Navbar";
import CardPokemon from "../components/CardPokemon";
import dummy from "../assets/dummy.png";
import Logo from "../assets/logo_pokemon.png";
import Link from "next/link";
export default function Home() {
  const pokemons = [
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
  ];
  return (
    <div>
      <Navbar
        leftContent={
          <Link href={"/"}>
            <Image
              src={Logo}
              className="text-white text-lg font-bold"
              width={163.057}
              height={60}
            />
          </Link>
        }
        rightContent={
          <div className="flex items-center gap-6">
            <Link href="/profile">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.999 4.00024C17.2006 3.99973 14.4509 4.73322 12.0245 6.1275C9.59805 7.52177 7.57977 9.52807 6.17107 11.9461C4.76237 14.3642 4.01253 17.1095 3.99638 19.9079C3.98023 22.7063 4.69834 25.4601 6.07904 27.8942C7.01226 26.6814 8.2119 25.6994 9.58521 25.0242C10.9585 24.349 12.4687 23.9986 13.999 24.0002H25.999C27.5293 23.9986 29.0395 24.349 30.4129 25.0242C31.7862 25.6994 32.9858 26.6814 33.919 27.8942C35.2997 25.4601 36.0178 22.7063 36.0017 19.9079C35.9855 17.1095 35.2357 14.3642 33.827 11.9461C32.4183 9.52807 30.4 7.52177 27.9736 6.1275C25.5472 4.73322 22.7975 3.99973 19.999 4.00024ZM35.885 32.1522C38.5591 28.6662 40.0055 24.3938 39.999 20.0002C39.999 8.95424 31.045 0.000244141 19.999 0.000244141C8.95304 0.000244141 -0.000954056 8.95424 -0.000954056 20.0002C-0.00755693 24.3938 1.43886 28.6662 4.11304 32.1522L4.10304 32.1882L4.81304 33.0142C6.68881 35.2072 9.01781 36.9674 11.6395 38.1735C14.2612 39.3795 17.1132 40.0028 19.999 40.0002C24.0537 40.0077 28.0138 38.776 31.349 36.4702C32.7709 35.4878 34.0602 34.3263 35.185 33.0142L35.895 32.1882L35.885 32.1522ZM19.999 8.00024C18.4077 8.00024 16.8816 8.63238 15.7564 9.7576C14.6312 10.8828 13.999 12.4089 13.999 14.0002C13.999 15.5915 14.6312 17.1177 15.7564 18.2429C16.8816 19.3681 18.4077 20.0002 19.999 20.0002C21.5903 20.0002 23.1164 19.3681 24.2417 18.2429C25.3669 17.1177 25.999 15.5915 25.999 14.0002C25.999 12.4089 25.3669 10.8828 24.2417 9.7576C23.1164 8.63238 21.5903 8.00024 19.999 8.00024Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link href="/auth/login">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99902 35.0002V5.00024H19.999V8.33358H8.33236V31.6669H19.999V35.0002H4.99902ZM26.6657 28.3336L24.374 25.9169L28.624 21.6669H14.999V18.3336H28.624L24.374 14.0836L26.6657 11.6669L34.999 20.0002L26.6657 28.3336Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        }
      />
      <main className="flex min-h-screen flex-col items-start justify-start gap-10 bg-surface pt-10 px-28">
        <button className="bg-primary hover:bg-red-500 text-white  font-bold py-2 px-4 rounded flex gap-2 items-center justify-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10.7988"
              y="2.40015"
              width="2.4"
              height="19.2"
              fill="white"
            />
            <rect
              x="2.39844"
              y="10.8003"
              width="19.2"
              height="2.4"
              fill="white"
            />
          </svg>
          <span>Tambah Pokemon</span>
        </button>
        <div className="flex gap-6 flex-wrap justify-center items-center">
          {pokemons.map((pokemon, index) => (
            <CardPokemon
              key={index} // Pastikan ada key yang unik
              img={pokemon.img}
              name={pokemon.name}
              elemen={pokemon.elemen}
              skil={pokemon.skil}
              index={index + 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
