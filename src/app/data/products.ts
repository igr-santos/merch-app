const number = "+5531982866512"

const products = [
    {
        title: "Camiseta Gola",
        pictures: ["/imgs/600x400.svg"],
        price: "179,99",
        variations: ["P", "M", "G", "GG", "XGG", "EXG"],
        url: `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent("Quero uma Camiseta Gola Ogoin e Linguini")}`
    },
    {
        title: "Adesivo Logo",
        pictures: ["/imgs/600x400.svg"],
        price: "10",
        variations: ["1", "2"],
        url: `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent("Quero um Adesivo Logo Gola Ogoin e Linguini")}`
    },
    {
        title: "Poster Luzes & Flashes",
        pictures: ["/imgs/600x400.svg"],
        price: "60",
        variations: ["Roxo", "Azul"],
        url: `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent("Quero um Poster Luzes e Flashes")}`
    },
    {
        title: "Bottoms",
        pictures: ["/imgs/600x400.svg"],
        price: "20",
        variations: ["1", "2", "3"],
        url: `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent("Quero Bottoms Ogoin e Linguini")}`
    },
]

export default products