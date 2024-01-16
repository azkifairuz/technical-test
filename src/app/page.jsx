import Image from "next/image";
import Navbar from "../components/Navbar";
import CardPokemon from "../components/CardPokemon";
import dummy from "../assets/dummy.png";
export default function Home() {
  const pokemons = [
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
    { img: dummy, name: "Bulbasaur", elemen: "Grass", skil: "Poison" },
  ];
  return (
    <div>
      <Navbar />
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
          {pokemons.map((pokemon,index) => (
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
