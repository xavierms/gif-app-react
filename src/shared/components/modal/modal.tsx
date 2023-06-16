import './modal.css';

export const Modal = ({ handleClose, show, children }: {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} >
      <div className="modal">
        <section className="modal-main">
          <div className="modal-content">
            <button type="button" className="btn-close" onClick={handleClose}>
              <span className="icon-cross"></span>
              <span className="visually-hidden">Close</span>
            </button>
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};