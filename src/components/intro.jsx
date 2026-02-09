import logocard from '../assets/logocard.jpg'
const Intro = ()=>{
    return(
        <div  className='relative w-[95%] flex  md:flex-row md:h-[20%] sm:h-[20%] m-4 border-[1px] border-b-0 border-[#2C1335] mt-14 overflow-x-hidden'>
            
              <div className='w-[50%] mx-auto'>
                  <img src={logocard} alt="postcard" className='h-full w-full md:p-20 sm:pt-15 sm:object-fill sm:ml-4 ' />
               </div> 
               <div className='sm:w-full md:w-[40%] h-full md:p-23 sm:p-12'> 
                <h1 className='text-[#673219] font-extrabold text-3xl'>healhty appetite for you </h1>
                <p className='text-[#2C1332] gap-2 align-middle text-xl'> 
                    Welcome to a simple food platform built for real life. <br />
                    Low effort meals, quick to make,
                    <br /> and packed with flavor-because eating well shouldn’t feel like a chore.
                    Whether you’re in a rush, craving something savory, <br />
                    or just trying to make better food choices, we’ve got you. <br />
                    From easy snacks to satisfying meals, everything here is designed to save time without sacrificing taste or health.
                    You eat quick. You eat savory. <br />And you eat healthy-without overthinking it.
                </p>
               
                </div>     
        </div>
    )
}
export default Intro;