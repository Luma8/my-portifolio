interface prop {
  title: string;
  descript: string;
  onClose: () => void;
  text: string;
}

const Modal: React.FC<prop> = ({ title, descript, onClose, text }) => {
  return (
    <div className="w-[100%] h-[100%] z-50 fixed modal-color top-0 left-0 flex justify-center items-center">
      <div className="bg-[#101010] p-10 rounded-[10px]">
        <h1 className="text-[20px] font-bold mb-5">
          {title}
        </h1>
        <p className="text-[15px] mb-5">
          {descript}
        </p>
        <button className="rounded-md bg-[#222] p-2 text-[12px] font-bold hover:bg-[#8DA9C4] hover:text-[#111]" onClick={onClose}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default Modal;