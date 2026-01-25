import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { FiDownload } from "react-icons/fi";

const LabCanvas = ({
  background,
  items,
  setItems,
  selectedId,
  setSelectedId,
}) => {
  const [draggingId, setDraggingId] = useState(null);
  const [resizingId, setResizingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [overTrash, setOverTrash] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const canvasRef = useRef(null);
  const trashRef = useRef(null);

  const offset = useRef({ x: 0, y: 0 });
  const startSize = useRef({ size: 0, mouseX: 0 });
  const deletePath = useRef('');

  // ======================
  // EXPORT
  // ======================
  const exportImage = async () => {
    if (!canvasRef.current) return;

    setIsExporting(true);

    // aguarda o React remover os elementos visuais
    await new Promise((resolve) => setTimeout(resolve, 50));

    const dataUrl = await toPng(canvasRef.current, {
      cacheBust: true,
      backgroundColor: '#000',
    });

    setIsExporting(false);

    const link = document.createElement('a');
    link.download = 'lab-export.png';
    link.href = dataUrl;
    link.click();
  };

  // ======================
  // DRAG
  // ======================
  const onDragStart = (e, id) => {
    e.stopPropagation();
    const item = items.find((i) => i.id === id);

    offset.current = {
      x: e.clientX - item.x,
      y: e.clientY - item.y,
    };

    setDraggingId(id);
    setSelectedId(id);
  };

  // ======================
  // RESIZE
  // ======================
  const onResizeStart = (e, id) => {
    e.stopPropagation();
    const item = items.find((i) => i.id === id);

    startSize.current = {
      size: item.width,
      mouseX: e.clientX,
    };

    setResizingId(id);
    setSelectedId(id);
  };

  const onMouseMove = (e) => {
    if (draggingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === draggingId
            ? {
                ...item,
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
              }
            : item
        )
      );

      if (trashRef.current) {
        const t = trashRef.current.getBoundingClientRect();
        setOverTrash(
          e.clientX >= t.left &&
            e.clientX <= t.right &&
            e.clientY >= t.top &&
            e.clientY <= t.bottom
        );
      }
    }

    if (resizingId) {
      const delta = e.clientX - startSize.current.mouseX;
      const newSize = Math.max(48, startSize.current.size + delta);

      setItems((prev) =>
        prev.map((item) =>
          item.id === resizingId
            ? {
                ...item,
                width: newSize,
                height: newSize,
              }
            : item
        )
      );
    }
  };

  const onMouseUp = () => {
    if (draggingId && overTrash && trashRef.current) {
      const item = items.find((i) => i.id === draggingId);
      const trash = trashRef.current.getBoundingClientRect();

      const startX = item.x + item.width / 2;
      const startY = item.y + item.height / 2;
      const endX = trash.left + trash.width / 2;
      const endY = trash.top + trash.height / 2;

      deletePath.current = `
        M ${startX} ${startY}
        C ${startX} ${startY - 150},
          ${endX} ${endY - 150},
          ${endX} ${endY}
      `;

      setDeletingId(draggingId);

      setTimeout(() => {
        setItems((prev) => prev.filter((i) => i.id !== draggingId));
        setDeletingId(null);
        setSelectedId(null);
      }, 500);
    }

    setDraggingId(null);
    setResizingId(null);
    setOverTrash(false);
  };

  return (
    <div
      ref={canvasRef}
      className="flex-1 relative overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onClick={() => setSelectedId(null)}
      style={{
        backgroundImage: background ? `url(${background})` : 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* STICKERS */}
      {items.map((item) => {
        const isDeleting = deletingId === item.id;

        return (
          <div
            key={item.id}
            className={`absolute ${
              selectedId === item.id ? 'ring-2 ring-white' : ''
            }`}
            style={{
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
              offsetPath: isDeleting ? `path('${deletePath.current}')` : 'none',
              offsetDistance: isDeleting ? '100%' : '0%',
              transition: isDeleting
                ? 'offset-distance 0.5s ease-in, transform 0.5s ease, opacity 0.5s ease'
                : 'none',
              transform: isDeleting ? 'scale(0.1)' : 'none',
              opacity: isDeleting ? 0 : 1,
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              draggable={false}
              onMouseDown={(e) => onDragStart(e, item.id)}
              className="w-full h-full cursor-move object-contain select-none"
            />

            {/* RESIZE (não aparece no export) */}
            {!isExporting && (
              <div
                onMouseDown={(e) => onResizeStart(e, item.id)}
                className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full cursor-se-resize"
              />
            )}
          </div>
        );
      })}

      {/* EXPORT BUTTON (não aparece no export) */}
      {!isExporting && (
        <button
          onClick={exportImage}
          className="absolute bottom-6 left-6 bg-black/90 hover:bg-gray-600 text-white px-5 py-3 rounded-full uppercase text-sm tracking-widest"
        >
          <FiDownload />
        </button>
      )}

      {/* TRASH (não aparece no export) */}
      {!isExporting && (
        <div
          ref={trashRef}
          className={`
            absolute bottom-6 right-6 w-16 h-16 rounded-full
            flex items-center justify-center
            bg-black-600 hover:bg-gray-600 shadow-lg
            ${overTrash ? 'animate-pulse scale-110' : ''}
          `}
        >
          <span className="text-white text-2xl">🗑️</span>
        </div>
      )}
    </div>
  );
};

export default LabCanvas;
