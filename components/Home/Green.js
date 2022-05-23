import {useState} from 'react'
import Numbers from './Numbers'

export default function Green() {

    return (

        <div class='bg-green-500 w-full h-[400px]'>
           <p className="text-white pt-12 text-4xl font-bold text-center">
               Our Library by the numbers
           </p>
           <p className="text-emerald-300 text-center pt-8 text-lg w-[850px] mx-auto">
           So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
           </p>
           <Numbers/>

        </div>




    )


}