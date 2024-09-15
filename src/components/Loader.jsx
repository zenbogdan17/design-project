import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center my-32">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#2c4a52"
        secondaryColor="#2c4a52"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
