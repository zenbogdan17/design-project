import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Slider = ({ images }) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (images && images.length > 0) {
      const loadImages = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.url;
          img.onload = () => resolve();
        });
      });

      Promise.all(loadImages).then(() => {
        setIsloading(false);
      });
    }
  }, [images]);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-4xl h-[80vh] overflow-hidden rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-full"
                  src={item.url}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
