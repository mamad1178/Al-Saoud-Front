import {useState} from 'react'
import Image from 'next/image'


function NavLink({to, children}) {

}
function MobileNav({open, setOpen}) {

}


export default function Navbar() {
    const [open, setOpen] = useState(false)
        return (
            <nav className="flex filter  bg-white px-12 py-4 h-32 items-center justify-between">
                <MobileNav open={open} setOpen={setOpen}/>
                <div class=" w-1/6 ">
                    <div className="border-r flex px-3  "> 
                      <a href='/'>
                     <Image src="/al-saoud.png" alt="Vercel Logo" width={200} height={50}  /></a>
                    </div>
                    
                </div>
              
                 <div class="flex gap-20 "> 
                  <a href="#" class="text-slate-600 w-auto "  >Library Catalog</a> 
                  <a href="#" class="text-slate-600 w-auto"  >New Acquisitions</a> 
                  <a href="#" class="text-slate-600 w-auto"  >Find it Fast!</a> 
                  <a href="#" class="text-slate-600 w-auto"  >Request Material</a> 
                  <a href="#" class="text-slate-600 w-auto"  >Library Info</a> 
                  <a href="#" class="text-slate-600 w-auto"  >Contact</a> 
                 </div>

                 <div class="  justify-end pl-16"> 
                 <Image src="/login.png" alt="Vercel Logo" width={40} height={40}  />
                 </div>


                 
                
            </nav>
           
        )
    } 
    