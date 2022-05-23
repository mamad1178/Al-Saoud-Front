import {useState} from 'react'
import Image from 'next/image'
export default function Books() {

    return (

<div class="flex justify-around pb-12">
    <div>
            <Image
                src="/book-1.jpg"
                width={220} 
                height={350}
            
            />

            <p className='text-indigo-800 text-2xl w-auto' > 
                No place like here
            </p>
    
    </div>
    <div>
            <Image
                src="/book-2.jpg"
                width={220} 
                height={350}
            
            />
            <p className='text-indigo-800 text-2xl w-auto' > 
                Our child of the stars 
            </p>
    </div>
    <div>
            <Image
                src="/book-3.jpg"
                width={220} 
                height={350}
            
            />
            <p className='text-indigo-800 text-2xl' > 
                Midnight Musings
            </p>
    </div>
    <div>
            <Image
                src="/book-4.jpg"
                width={220} 
                height={350}
            
            />
             <p className='text-indigo-800 text-2xl w-64' > 
                I hope you get this message
            </p>
    </div>
    <div>
            <Image
                src="/book-5.jpg"
                width={220} 
                height={350}
            
            />
             <p className='text-indigo-800 text-2xl' > 
                I'll be there 
            </p>
    </div>
</div>




           )
 }