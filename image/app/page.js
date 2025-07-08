import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-contain" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}
{/* <Image className="mx-auto object-cover"  width={100} height={100 } src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" /> */}