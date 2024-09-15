import { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductModal from "./ProductModal";

const Products = ({ images }) => {
  const [isLoading, setIsloading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const handlerCloseModule = () => {
    setIsModalOpen(false);
  };

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
      {selectedProduct && isModalOpen && (
        <ProductModal
          isModalOpen={isModalOpen}
          selectedProduct={selectedProduct}
          onClose={handlerCloseModule}
        />
      )}

      <span className="block border-b-2 border-[#537072] w-full mt-4"></span>
      <div className="w-full  flex flex-col  items-center mx-auto py-16">
        <h2 className=" text-3xl mb-2 font-bold">
          Проекти нашої команди дизайнерів
        </h2>
        <div className="grid grid-cols-3 gap-8 m-10">
          {isLoading ? (
            <Loader />
          ) : (
            images.map((item, index) => (
              <div
                key={index}
                className="relative group  cursor-pointer hover:scale-105 transition-all duration-300 shadow bg-[#f4ebdb]"
                onClick={() => {
                  setSelectedProduct(item);
                  setIsModalOpen(true);
                }}
              >
                <img
                  className="w-[100%] h-[100%] object-cover rounded-2xl transition-all duration-300 group-hover:brightness-50 border-none
                  "
                  src={item.url}
                  alt={item.name}
                />{" "}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[#f4ebdb] text-2xl font-bold">
                    {item.name}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
