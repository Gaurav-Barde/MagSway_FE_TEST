import block1 from "../assets/block-1.png";
import block2 from "../assets/block-2.png";
import block3 from "../assets/block-3.png";
import block5 from "../assets/block-5.png";
import block6 from "../assets/block-6.png";

const HeroImageSection = () => {
  return (
    <div className="col-span-2">
      <div className="flex justify-center">
        <img src={block1} className="w-52 h-24" />
        <img src={block2} className="w-52 h-24" />
        <img />
      </div>
      <div className="flex justify-between">
        <img src={block3} className="w-72 h-36" />
        <img src={block1} className="w-72 h-32" />
        <img />
      </div>
      <div className="flex ml-28">
        <img src={block5} className="w-52 h-24" />
        <img src={block6} className="w-52 h-24" />
        <img />
      </div>
    </div>
  );
};

export default HeroImageSection;
