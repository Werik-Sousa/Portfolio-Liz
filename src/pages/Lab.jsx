import { useState } from 'react';
import LabSidebar from '../components/lab/LabSidebar';
import LabCanvas from '../components/lab/LabCanvas';
import StickersBar from '../components/lab/StickersBar';

const Lab = () => {
  const [background, setBackground] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const addSticker = (src) => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        src,
        x: 200,
        y: 200,
        width: 120,
        height: 120,
      },
    ]);
  };

  return (
    <div className="w-screen h-screen flex bg-black overflow-hidden">
      {/* SIDEBAR SEM TOGGLE */}
      <LabSidebar setBackground={setBackground} />

      {/* ÁREA PRINCIPAL */}
      <div className="flex flex-col flex-1 min-w-0">
        <LabCanvas
          background={background}
          items={items}
          setItems={setItems}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <StickersBar addSticker={addSticker} />
      </div>
    </div>
  );
};

export default Lab;
