import Image from "next/image";

export default function CardPokemon({ img, name, elemen, skil,index }) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-6 w-72 p-6 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.5)]">
      <h1 className="text-[#8D7777] self-start text-2xl">#{index}</h1>
      <Image src={img} alt="pokemon image" width={200} height={200} />
      <h1 className="text-primary text-center text-xl font-semibold">{name}</h1>
      <div className="flex gap-3">
        <div className="rounded-md py-2 px-3 text-white bg-[#8BC34A]">
          {elemen}
        </div>
        <div className="rounded-md py-2 px-3 text-white bg-[#AA22B0]">
          {skil}
        </div>
      </div>
    </div>
  );
}
