"use client"

import { FaWindowClose } from "react-icons/fa";
import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import Image from "next/image";

const ProductoModal = forwardRef(({ isOpen, onClose, foto, nombre, precio, descripcion }, ref) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    close: () => dialogRef.current?.close()
  }));

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);


  return (
    <dialog ref={dialogRef} onClose={onClose} className="rounded-xl w-2/4 h-3/5">
      <Image 
      width={300}
      height={300}
      alt={nombre}
      src={foto} className='w-full h-3/4' />
      <div className='p-8'>
        <h2 className='text-3xl'>{nombre}</h2>
        <p>{descripcion}</p>
        <FaWindowClose onClick={onClose} size="30" className="absolute top-[3%] text-teal-50 right-[3%] hover:scale-125 hover:text-rose-500 transition-all cursor-pointer active:scale-100" >Cerrar</FaWindowClose>
      </div>
    </dialog>

  );
});

ProductoModal.displayName = 'Dialogo';

export default ProductoModal;
