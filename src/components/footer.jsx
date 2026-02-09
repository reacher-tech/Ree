import { Mail, Phone, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return(
    <div className="relative overflow-hidden m-4 p-2 h-52">
      
      <div className="relative w-[97%] mx-auto h-full">
        
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 opacity-75 blur-sm"></div>
        
        
        <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-[#eedac7] via-[#452406] to-[#2C1332]   p-[1.5px] ">
          <div className="bg-[#eedac7] rounded-lg h-full"></div>
        </div>
        
      
        <div className="relative h-36 p-2 flex">
          <div className='w-[70%] h-full'>
          <h1 className="font-extrabold text-xl text-[#2C1332] pl-2 m-2">Ree`</h1>
          <div className="m-4 sm:w-full">
            <input 
              type="email"
              className="border-2 border-white w-[50%] p-2 outline-none "
              placeholder="Enter your email"
            />
            <button 
              className="bg-[#2c1332] text-white px-6 py-2 hover:bg-amber-800 transition-colors w-fit border-white border-2 rounded">
              subscribe
            </button>
          </div>
          <p className="text-2xl text-[#2C1332] pl-2 m-2 sm:text-sm md:text-2xl">© 2026 Ree`. All rights reserved.</p>
          </div>
            <div className='flex flex-col gap-4 p-2'>
            <a href="tel:+234810288-395" 
            className='text-xl text-[#2C1335] hover:text-amber-950 transition-colors flex gap-4 border-b-[1px] border-[#f4e8f7]'>
              <Phone size={24}/>+2348002880395
            </a>
            <a href=" " 
            className='text-xl text-[#2C1335] hover:text-amber-950 transition-colors flex gap-4 border-b-[1px] border-[#f4e8f7]'>
              <Mail size={24}/>princessonyinyec12@gmail.com
            </a>
            <a href="https://github.com/reacher-tech "
             className='text-xl text-[#2C1335] hover:text-amber-950 transition-colors flex gap-4 border-b-[1px] border-[#f4e8f7] '>
              <Github size={24}/>reacher-tech
            </a>
            <a href="https://www.linkedin.com/in/princess-aribodor-983b39291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " 
            className='text-xl text-[#2C1335] hover:text-amber-950 transition-colors flex gap-4 border-b-[1px] border-[#f4e8f7]'>
              <Linkedin  size={24}/> princess Aribodor
            </a>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer;