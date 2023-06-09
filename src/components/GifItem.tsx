import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faExpand } from '@fortawesome/free-solid-svg-icons';

import { ImageProps } from "../props/ImageProps";
import { downloadGif } from "../helpers/downloadGif";
import { Modal } from "../shared/components/modal/modal";

export const GifItem = (props: ImageProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const url = props.images.downsized.url;
  const fileName = props.title;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="card">

        <img src={url} alt={fileName} />
        <div className="card-footer">
          <span onClick={openModal}>
          <FontAwesomeIcon icon={faExpand} />
          </span>
          <span onClick={() => downloadGif(url,fileName)}>
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </div>
      </div>

      <Modal show={modalIsOpen} handleClose={closeModal} >
           <img src={url} alt={fileName} />
        </Modal>
    </>
  )
}
