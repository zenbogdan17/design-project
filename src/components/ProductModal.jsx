import { useEffect, useRef, useState } from "react";
import { project } from "../constants/project";
import { fetchImages } from "../utils/fetchImages";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Slider from "react-slick";

const ProductModal = ({ isModalOpen, selectedProduct, onClose }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const dbPath = project.find((item) => item.name === selectedProduct.name);

    const getImages = async () => {
      const fetchedImages = await fetchImages(dbPath.dbName);
      setImages(fetchedImages);
    };

    getImages();
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i].url} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <>
      {isModalOpen && images.length > 1 && (
        <div>
          <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose}
          >
            <span
              className=" bg-white px-3 py-2 rounded-full fixed top-4 right-4 text-dark font-bold text-4xl cursor-pointer"
              onClick={onClose}
            >
              X
            </span>
            <div
              className="bg-[#f4ebdb] p-6 rounded shadow-lg relative w-[70%] pb-14 px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="slider-container ">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  {images.map((item, index) => (
                    <div
                      className="relative w-full h-[80vh] overflow-hidden rounded-lg shadow-lg"
                      key={index}
                    >
                      <img
                        className="object-cover w-full h-full"
                        src={item.url}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="button bg-[#2c4a52] text-[#f4ebdb] absolute bottom-4 left-10 p-2 rounded-md"
                    onClick={previous}
                  >
                    Назад
                  </button>
                  <button
                    className="button bg-[#2c4a52] text-[#f4ebdb] absolute bottom-4 right-10 p-2 rounded-md"
                    onClick={next}
                  >
                    Вперед
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
