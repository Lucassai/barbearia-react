import { HouseIcon, CalendarIcon, User } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="inset-shadow-sm inset-shadow-blue-200 rounded-t-3xl bg-(--dark-blue) text-white mt-8 fixed bottom-0 w-full">
      <div className="flex container mx-auto justify-around  items-center">
        <button className="shadow-black shadow-md  bg-(--light-blue) text-black p-2 rounded-full hover:bg-(--dark-blue) transition-colors">
          <HouseIcon />
        </button>
        <button className=" shadow-black shadow-md bg-(--light-blue) text-black p-5 rounded-full hover:bg-(--dark-blue) transition-colors  ">
          <CalendarIcon />
        </button>
        <button className="shadow-black shadow-md  bg-(--light-blue) text-black p-2 rounded-full hover:bg-(--dark-blue) transition-colors">
          <User />
        </button>
      </div>
    </footer>
  )
}
export default Footer
