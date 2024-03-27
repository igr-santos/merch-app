'use client'

import Image from "next/image";
import Carousel from "nuka-carousel"


export default function Merch() {
  const defaultProps = {
    width: 500,
    height: 500
  }

  return (
    <div>
      <Carousel>
        <Image src="/imgs/tronco-1.png" alt="Tronco 1" {...defaultProps} />
        <Image src="/imgs/tronco-2.png" alt="Tronco 2" {...defaultProps} />
        <Image src="/imgs/tronco-3.png" alt="Tronco 3" {...defaultProps} />
      </Carousel>
      <Carousel>
          <Image src="/imgs/perna-1.png" alt="Perna 1" {...defaultProps} />
          <Image src="/imgs/perna-2.png" alt="Perna 2" {...defaultProps} />
          <Image src="/imgs/perna-3.png" alt="Perna 3" {...defaultProps} />
      </Carousel>
    </div>
  );
}