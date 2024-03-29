import Image from "next/image";

import Merch from "@/app/components/merch";
import DragAndDrop from "@/app/components/dragndrop";
import Shop from "@/app/components/shop";

import bg from '../../public/imgs/background.png'

const style = {
  backgroundColor: '#e6e6e6',
  backgroundImage: `url(${bg.src})`,
  backgroundRepeat: 'repeat',
  backgroundSize: 'contain'
}


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between" style={style}>
      <div className="hidden md:block">
        <DragAndDrop />
      </div>
      <Shop />
    </main>
  );
}
