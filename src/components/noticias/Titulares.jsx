"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Titulares = () => {
  const titulares = [
    { "titulo": "Noticia_01", "id": "12", "pic": "https://picsum.photos/id/227/700/400" },
    { "titulo": "Noticia_02", "id": "42", "pic": "https://picsum.photos/id/247/700/400" },
    { "titulo": "Noticia_03", "id": "7", "pic": "https://picsum.photos/id/265/700/400" }
  ];

  const [noticiaIndex, setNoticiaIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setNoticiaIndex((prevIndex) => (prevIndex + 1) % titulares.length);
        setFadeIn(true);
      }, 300); // Ajusta este valor según la duración de tu animación de fadeOut
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const seleccionarNoticia = (id) => {
    setFadeIn(false);
    setTimeout(() => {
      const index = titulares.findIndex(noticia => noticia.id === id);
      if (index !== -1) {
        setNoticiaIndex(index);
      }
      setFadeIn(true);
    }, 300); // Ajusta este valor según la duración de tu animación de fadeOut
  }

  const noticia = titulares[noticiaIndex];

  return (
    <div className="relative flex flex-col w-full max-w-full mx-auto bg-zinc-900 dark:bg-zinc-700">
      <div className="flex flex-col custom:flex-row">
        <div className={`w-fit transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            className=''
            alt={noticia.titulo}
            width={1080}
            height={700}
            src={noticia.pic}
          />
        </div>
        <div className="flex flex-col justify-between py-4 px-8">
          <div>
            <h1 className={`w-fit text-2xl font-bold text-white mb-4 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>{noticia.titulo}</h1>
            <p className={`custom:w-[15rem] text-justify text-sm text-white dark:text-zinc-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>Una carta es flex-col un medio de comunicación escrita por un remitente y enviado a un destinatario. Habitualmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo o en el anverso. </p>
          </div>
          <div className='flex gap-3 w-fit mx-auto mt-6'>
            {titulares.map((titular) => (
              <div
                onClick={() => seleccionarNoticia(titular.id)}
                key={titular.id}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer hover:scale-125 active:scale-100 ${titular.id === noticia.id ? "bg-teal-800 dark:bg-amber-500" : "bg-white"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titulares;