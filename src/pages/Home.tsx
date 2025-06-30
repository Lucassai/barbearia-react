import ImageCarousel from '../components/Carrossel'
import Footer from '../components/Footer'

function Home() {
  const carouselImages = [
    'https://ik.imagekit.io/lkxant9gz/Temporada%20de%20loiros%20Naturais.jpg?updatedAt=1750985703160',
    'https://ik.imagekit.io/lkxant9gz/Vulgo%20O%20arranca%20Cabelos(1).jpg?updatedAt=1750985591834',
    'https://ik.imagekit.io/lkxant9gz/Vulgo%20O%20arranca%20Cabelos.jpg?updatedAt=1750985446358',
    'https://ik.imagekit.io/lkxant9gz/Americano%20com%20Freestyle%20pro%20meu%20maninho%20@jv_herculan0%20Se%20voc%C3%AA%20busca%20um%20corte%20como%20esse%20me%20chama%20na%20DM%20pra%20gente%20marcar...._niter%C3%B3i%20_riodejaneiro%20_barbearia%20_hairstylist%20_freestyle%20_hightaper.jpg?updatedAt=1750975374325',
  ]

  return (
    <>
      <div className="bg-linear-to-t from-black to-(--dark-blue) min-h-screen">
        <div className="flex items-left">
          <h1 className="ml-10 shadow-sm shadow-blue-200 mt-10 max-w-2xl  text-3xl text-white p-3 font-bold mb-4 rounded-2xl">
            💈Barber
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <ImageCarousel
            images={carouselImages}
            autoPlay={true}
            interval={3000}
          />
        </div>
        <div className="flex flex-col items-left">
          <h1 className="ml-10 max-w-2xl  text-3xl text-(--light-blue) p-3 font-bold mb-4 rounded-2xl">
            Serviços
          </h1>
          <button className="bg-(--dark-blue) ml-10 mr-10 shadow-blue-300 shadow-sm mb-4 p-3 rounded-2xl text-white font-bold hover:bg-(--light-blue) hover:cursor-pointer hover:text-black transition-colors">
            Corte Tradicional
          </button>
          <button className="bg-(--dark-blue) ml-10 mr-10 shadow-blue-300 shadow-sm mb-4 p-3 rounded-2xl text-white font-bold hover:bg-(--light-blue) hover:cursor-pointer hover:text-black transition-colors">
            Limpeza de Pele
          </button>
          <button className="bg-(--dark-blue) ml-10 mr-10 shadow-blue-300 shadow-sm mb-4 p-3 rounded-2xl text-white font-bold hover:bg-(--light-blue) hover:cursor-pointer hover:text-black transition-colors">
            Sobrancelha
          </button>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
