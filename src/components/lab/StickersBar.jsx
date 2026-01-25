import Sticker1 from '../../assets/lab/f1.png';
import Sticker2 from '../../assets/lab/f2.png';
import Sticker3 from '../../assets/lab/f3.png';
import Sticker4 from '../../assets/lab/f4.png';
import Sticker5 from '../../assets/lab/f5.png';
import Sticker6 from '../../assets/lab/f6.png';
import Sticker7 from '../../assets/lab/f7.png';
import Sticker8 from '../../assets/lab/f8.png';
import Sticker9 from '../../assets/lab/f9.png';
import Sticker10 from '../../assets/lab/f10.png';
import Sticker11 from '../../assets/lab/f11.png';
import Sticker12 from '../../assets/lab/f12.png';
import Sticker13 from '../../assets/lab/f13.png';
import Sticker14 from '../../assets/lab/f14.png';
import Sticker15 from '../../assets/lab/f15.png';
import Sticker16 from '../../assets/lab/f16.png';
import Sticker17 from '../../assets/lab/f17.png';
import Sticker18 from '../../assets/lab/f18.png';
import Sticker19 from '../../assets/lab/f19.png';
import Sticker20 from '../../assets/lab/f20.png';
import Sticker21 from '../../assets/lab/f21.png';
import Sticker22 from '../../assets/lab/f22.png';
import Sticker23 from '../../assets/lab/f23.png';
import Sticker24 from '../../assets/lab/f24.png';


const stickers = [
  { id: 1, src: Sticker1 },
  { id: 2, src: Sticker2 },
    { id: 3, src: Sticker3 },
    { id: 4, src: Sticker4 },
    { id: 5, src: Sticker5 },
    { id: 6, src: Sticker6 },
    { id: 7, src: Sticker7 },
    { id: 8, src: Sticker8 },
    { id: 9, src: Sticker9 },
    { id: 10, src: Sticker10 },
    { id: 11, src: Sticker11 },
    { id: 12, src: Sticker12 },
    { id: 13, src: Sticker13 },
    { id: 14, src: Sticker14 },
    { id: 15, src: Sticker15 },
    { id: 16, src: Sticker16 },
    { id: 17, src: Sticker17 },
    { id: 18, src: Sticker18 },
    { id: 19, src: Sticker19 },
    { id: 20, src: Sticker20 },
    { id: 21, src: Sticker21 },
    { id: 22, src: Sticker22 },
    { id: 23, src: Sticker23 },
    { id: 24, src: Sticker24 },
];

const StickersBar = ({ addSticker }) => {
  return (
    <div
      className="
        h-32
        bg-black
        border-t
        border-white/10
        flex
        items-center
        px-6
        gap-6
        overflow-x-auto
        overflow-y-hidden
        flex-shrink-0
      "
    >
      {stickers.map((sticker) => (
        <button
          key={sticker.id}
          onClick={() => addSticker(sticker.src)}
          className="
            flex-shrink-0
            w-20
            h-20
            flex
            items-center
            justify-center
            hover:scale-110
            transition
          "
        >
          <img
            src={sticker.src}
            alt=""
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
        </button>
      ))}
    </div>
  );
};

export default StickersBar;
