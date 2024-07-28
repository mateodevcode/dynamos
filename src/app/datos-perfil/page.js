import Navbar from '@/components/navbar/Navbar'
import ClientDatosPerfil from '@/components/datos-perfil/ClientDatosPerfil'
import Footer from '@/components/footer/Footer'
import BarraDeNavegacion from '@/components/navbar/Navbar'


const page = () => {
  
  return (
    <>
    <BarraDeNavegacion />
    <ClientDatosPerfil />
    <Footer />
    </>
  )
}

export default page