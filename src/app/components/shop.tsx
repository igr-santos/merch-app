'use client'

import Image from "next/image";
import Carousel from "nuka-carousel"
import products from '@/app/data/products'


export default function Shop() {
    return (
        <div className="container mx-auto py-6">
            <h2 className="text-[#ed1e79] underline mb-4 text-[26px] ps-6">Shop</h2>
            <div className="flex overflow-auto">
                <div className="flex gap-4">
                    {products.map((product, index) => (
                        <div key={`product-${index}`} className="flex flex-col gap-2 rounded-lg p-2 w-[270px] text-[14px] border border-[#ed1e79] bg-[#e6e6e6]">
                            <div className="flex justify-between rounded-lg bg-[#f4e95e] text-[#ed1e79] border border-[#ed1e79]">
                                <span className="py-1 ps-2">{product.title}</span>
                                <span className="py-1 px-2 rounded-lg border border-t-0 border-b-0 border-r-0 border-[#ed1e79]">R$ {product.price}</span>
                            </div>
                            <div className="">
                                <Carousel>
                                    {product.pictures.map((picture, pindex) => (
                                        <Image key={`picture-${index}${pindex}`} src={picture} width={270} height={200} alt="" />
                                    ))}
                                </Carousel>
                            </div>
                            <a href={product.url} target="_blank" className="rounded-lg bg-[#f4e95e] text-[#ed1e79] border border-[#ed1e79] py-2 text-center">Fazer pedido</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}