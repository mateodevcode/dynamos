"use client";

import { FaWindowClose } from "react-icons/fa";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";
import BotonComercio from "./BotonComercio";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CompartirProductosModal = forwardRef(
  ({ isOpen, onClose, foto, nombre, descripcion }, ref) => {
    const [url, setUrl] = useState("url/producto.com");
    const socialDialogRef = useRef(null);

    useImperativeHandle(ref, () => ({
      close: () => socialDialogRef.current?.close(),
    }));

    useEffect(() => {
      if (isOpen && socialDialogRef.current && !socialDialogRef.current.open) {
        socialDialogRef.current.showModal();
      }
    }, [isOpen]);

    /*Copiar enlace para compartir*/
    
    /*----------------------------*/
   
    return (
      <dialog
        ref={socialDialogRef}
        onClose={onClose}
        className="rounded-xl w-fit px-8"
      >
        <div className="pt-8">
          <h2 className="text-3xl">{nombre}</h2>
          <p>{descripcion}</p>
          <FaWindowClose
            onClick={onClose}
            size="30"
            className="absolute top-[3%] text-teal-700 right-[3%] hover:scale-125 hover:text-rose-500 transition-all cursor-pointer active:scale-100"
          >
            Cerrar
          </FaWindowClose>
        </div>
        <div className="flex justify-between gap-4 w-[50%] my-4">
          <BsWhatsapp size={30} className="text-teal-700 transition-all hover:text-orange-400 hover:scale-125 cursor-pointer active:scale-100" />
          <FaInstagram  size={30} className="text-teal-700 transition-all hover:text-orange-400 hover:scale-125 cursor-pointer active:scale-100"/>
          <FaFacebookF  size={30} className="text-teal-700 transition-all hover:text-orange-400 hover:scale-125 cursor-pointer active:scale-100"/>
          <FaXTwitter  size={30} className="text-teal-700 transition-all hover:text-orange-400 hover:scale-125 cursor-pointer active:scale-100"/>
          <FaTiktok  size={30} className="text-teal-700 transition-all hover:text-orange-400 hover:scale-125 cursor-pointer active:scale-100"/>
        </div>
        <input className="py-[3px] px-4 rounded mr-2 mb-8 border-2 border-teal-700" type="text" value={url} />
        <BotonComercio
          buttonText="Copiar"
          bgColor="bg-orange-400"
          borderColor="none"
          borderWidth="none"
          textColor="text-white"
        />
      </dialog>
    );
  }
);

CompartirProductosModal.displayName = "Dialogo";

export default CompartirProductosModal;
