import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import SomosDynamosNew from '@/components/dynamos/SomosDynamosNew'
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