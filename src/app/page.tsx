import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Bapa Cece</h1>
      <Image src="/bapa.jpg" width={1000} height={1000} alt="bapa" />
      <p>Bapa nuju di bogor tangal 16 mei 2025</p>
    </>
  );
}
