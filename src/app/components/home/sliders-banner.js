
import Slider from "../components/Sliders/Slider";

const Slider_banner = () => {
  const slides = [
    {
      id: 1,
      content: "Launching with Purpose Performance Marketing Strategies that Strike Gold",
      buttonText: "Launch your business to new heights with us!",
      backgroundImage: "/Homepage-Hero-Banner.png",
    },
    {
      id: 2,
      content: "Launching with Purpose Performance Marketing Strategies that Strike Gold",
      buttonText: "Launch your business to new heights with us!",
      backgroundImage: "/Homepage-Hero-Banner.png",
    },
  ];

  return (
    <div>
      <h1>Welcome to our Homepage</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default Slider_banner;
