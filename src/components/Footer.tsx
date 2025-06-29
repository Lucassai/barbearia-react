import { HouseIcon, CalendarIcon, User } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="flex container mx-auto justify-around  items-center">
        <button className="bg-(--light-blue) text-black p-2 rounded-full hover:bg-(--dark-blue) transition-colors">
          <HouseIcon />
        </button>
        <button className="bg-(--light-blue) text-black p-5 rounded-full hover:bg-(--dark-blue) transition-colors  ">
          <CalendarIcon />
        </button>
        <button className="bg-(--light-blue) text-black p-2 rounded-full hover:bg-(--dark-blue) transition-colors">
          <User />
        </button>
      </div>
    </footer>
  )
}
export default Footer
