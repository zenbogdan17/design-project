import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";

import { sliderHolder } from "./constants/project";
import { fetchImages } from "./utils/fetchImages";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const fetchedImages = await fetchImages(sliderHolder);
      setImages(fetchedImages);
    };

    getImages();
  }, []);

  return (
    <>
      <Navbar />
      <Slider images={images} />
      <Products images={images} />
      <Footer />
    </>
  );
}

export default App;
