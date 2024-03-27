import Image from "next/image";

import Merch from "@/app/components/merch";
import DragAndDrop from "@/app/components/dragndrop";

import bg from '../../public/imgs/brand/FUNDO.png'


export default function Home() {
  return (
    <main className="flex min-h-screen justify-between" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="bg-white flex-1">
        <div className="flex flex-col justify-between min-h-screen">
          <Image
            className="mx-auto"
            alt=""
            src="/imgs/brand/OGOIN&LINGUINI_PSD_TRATAMENTO_LOGO.png"
            width={350}
            height={250}
          />
          <div className="bg-purple-400 py-4 border-t-2">
            <p className="text-sm text-center">© 2024. Site desenvolvido por Produto Marginal Records</p>
          </div>
        </div>
      </div>
      <div className="">
        <DragAndDrop />
      </div>
    </main>
  );
}
