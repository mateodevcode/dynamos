import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import SomosDynamos from '@/components/dynamos/SomosDynamosNew'

const page = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <SomosDynamos />
        <Footer />
    </div>
  )
}

export default page