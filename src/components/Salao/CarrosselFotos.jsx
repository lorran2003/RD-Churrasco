import foto1 from "../../assets/image/salao/photograph/foto_salao(1).jpeg";
import foto2 from "../../assets/image/salao/photograph/foto_salao(2).jpeg";
import foto3 from "../../assets/image/salao/photograph/foto_salao(3).jpeg";
import foto4 from "../../assets/image/salao/photograph/foto_salao(4).jpeg";
import foto5 from "../../assets/image/salao/photograph/foto_salao(5).jpeg";
import foto6 from "../../assets/image/salao/photograph/foto_salao(6).jpeg";
import foto7 from "../../assets/image/salao/photograph/foto_salao(7).jpeg";
import foto8 from "../../assets/image/salao/photograph/foto_salao(8).jpeg";
import foto9 from "../../assets/image/salao/photograph/foto_salao(9).jpeg";
import foto10 from "../../assets/image/salao/photograph/foto_salao(10).jpeg";
import foto11 from "../../assets/image/salao/photograph/foto_salao(11).jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

const photograph = [
    {
        id: 1,
        img: foto1
    },
    {
        id: 2,
        img: foto2
    },
    {
        id: 3,
        img: foto3
    },
    {
        id: 4,
        img: foto4
    },
    {
        id: 5,
        img: foto5
    },
    {
        id: 6,
        img: foto6
    },
    {
        id: 7,
        img: foto7
    },
    {
        id: 8,
        img: foto8
    },
    {
        id: 9,
        img: foto9
    },
    {
        id: 10,
        img: foto10
    },
    {
        id: 11,
        img: foto11
    },
]

export default function CarrosselFotos() {
    return (

        <Swiper
            slidesPerView={1}
            pagination={true}
            navigation={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            loop={true}
        >
            {photograph.map((item) => (
                <SwiperSlide key={item.id} >
                    <div className="w-auto flex justify-center items-center">
                        <div className="bg-zinc-800 p-4 rounded-md">
                            <img src={item.img} alt="fotos do salão" className="shadow-md shadow-zinc-950 rounded-xl border-2 border-solid border-[#D70319]" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>


    )
}