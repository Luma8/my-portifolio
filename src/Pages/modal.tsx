interface prop {
  title: string;
  descript: string;
  onClose: () => void;
  text: string;
}

const Modal: React.FC<prop> = ({ title, descript, onClose, text }) => {
  return (
    <div className="w-full h-full z-50 fixed modal-color top-0 left-0 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
      <div className="glass rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-black/50 animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-xl font-bold mb-4 gradient-text">
          {title}
        </h1>
        <p className="text-white/60 text-sm mb-6 leading-relaxed">
          {descript || 'No description available.'}
        </p>
        <button className="btn-glow rounded-xl bg-dark-300 px-6 py-2.5 text-sm font-semibold text-white/70 hover:bg-primary hover:text-dark transition-all duration-300" onClick={onClose}>
          {text}
        </button>
      </div>
    </div>
  )
}

export default Modal;