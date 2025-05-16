import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Bapa Cece</h1>
      <Image src="/bapa.jpg" width={1000} height={1000} alt="bapa" />
      <p>Bapa nuju di bogor tangal 16 mei 2025</p>
      <p>bapa hoyong terang naon sih coding teh</p>

      <video width="600" controls>
        <source src="/video.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video tag.
      </video>
    </>
  );
}
