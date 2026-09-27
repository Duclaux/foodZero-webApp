import { TextAlignJustify } from "lucide-react"
import Container from "./Container"

function Navbar() {
  return (
    <Container style="flex items-center justify-between py-11.25">
      <div className="flex items-center justify-between w-full lg:w-fit gap-11">
        <img src="../src/assets/images/Logo.svg" alt="" className="w-50 h-auto lg:w-full"/>
        <TextAlignJustify size={30} color="white" className="cursor-pointer w-7 h-7 md:w-8 md:h-8 lg:w-13.75 lg:h-13.75"/>
      </div>

      <div className="hidden lg:flex text-white items-center gap-11">
        <p className="widgets-texte">+86 852 346 000</p>
        <button className="heading-5 px-11.5 py-5 border-2 border-white">Reservations</button>
      </div>
    </Container>
  )
}

export default Navbar
