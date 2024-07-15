import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SomosDynamosNew from '@/components/SomosDynamosNew'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <SomosDynamosNew />
        <Footer />
    </div>
  )
}

export default page