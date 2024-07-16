"use client"

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full text-5xl text-center font-serif'>
        Dashboard
        <div>
            <Link href='/dashboard'>
                Dashboard
            </Link>
        </div>
        <div>
            <Link href='/'>
                inicio
            </Link>
            <button
            onClick={() => signIn()}
            className="text-white bg-blue-600 hover:bg-blue-400 w-full p-2 rounded-lg my-2"
          >
            Iniciar sesión con Google
          </button>
        </div>
    </div>
  )
}

export default page