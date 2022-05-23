import {useState} from 'react'

export default function Numbers() {

    return (   

           <div className=" flex justify-evenly pt-12 " >
                 <div className='card bg-emerald-50 w-[260px] h-[113px]'>
                       
                        <p className='text-green-700 text-center pt-4 text-3xl font-bold'>
                           1,021,638
                        </p>
                        <p className='text-center text-emerald-400 pt-1 font-bold '>
                          People
                       </p>

                 </div>

                 <div className='card bg-emerald-50 w-[260px] h-[113px]'>
                       
                       <p className='text-green-700 text-center pt-4 text-3xl font-bold'>
                          3,101,557
                       </p>
                       <p className='text-center text-emerald-400 pt-1 font-bold '>
                          Books
                       </p>

                </div>

                 <div className='card bg-emerald-50 w-[260px] h-[113px]'>
                       
                        <p className='text-green-700 text-center pt-4 text-3xl font-bold'>
                           1,841
                        </p>

                        <p className='text-center text-emerald-400 pt-1 font-bold '>
                          Manuscripts
                        </p>

                 </div>

                 <div className='card bg-emerald-50 w-[260px] h-[113px]'>
                       
                        <p className='text-green-700 text-center pt-4 text-3xl font-bold'>
                           104
                        </p>
                        <p className='text-center text-emerald-400 pt-1 font-bold '>
                          Rare Books
                        </p>

                 </div>
                 
           </div>  







           )



} 
