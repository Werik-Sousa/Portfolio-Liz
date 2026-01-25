import { labBackgrounds } from '../../data';

const backgrounds = labBackgrounds.map((bg) => bg.image);
const LabSidebar = ({ setBackground }) => {
  return (
    <aside className="w-72 min-w-[12rem] bg-black border-r border-white/10 flex flex-col">
      <h3 className="text-white font-anton uppercase text-sm px-4 py-4 tracking-widest">
        Fundos
      </h3>

      <div className="flex-1 overflow-y-auto px-2 space-y-4 pb-6">
        {backgrounds.map((bg, index) => (
          <button
            key={index}
            onClick={() => setBackground(bg)}
            className="w-full hover:opacity-80 transition"
          >
            <img
              src={bg}
              alt=""
              className="w-full h-32 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default LabSidebar;
