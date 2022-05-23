import {useState} from 'react'
import Image from 'next/image'
export default function Cards2() {

    return (
        
            <div class="flex " >
                <div className=" flex pl-10 w-[830px] h-[250px]">
                <a href="#" class=" flex flex-col items-center bg-white  border  md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image 
                    
                    src="/Liguearabe.jpeg"
                    
                    width={550}
                    height={465}
                    />
                    <div class="p-4 leading-normal">
                    <h3 class="text-gray-400 pb-3">
                            11/11/2021
                        </h3>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-1">
                            تدريب : الفهرسة  في صيغة مارك 21
                        </h5>
                        <p class="mb-3 text-xl font-normal ">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <p class="mb-3 font-normal text-indigo-900">
                            Read more
                        </p>

                    </div>
                </a>
                </div>
               
            <div className='flex pl-24 w-[950px] h-[250px]'>
                <a href="#" class=" flex flex-col items-center bg-white  border md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image
                    src="/bouachrine.jpeg"
                    
                    width={550}
                    height={430}
                    />
                    <div class=" p-4 leading-normal">
                        <h3 class="text-gray-400 pb-3">
                            11/11/2021
                        </h3>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-1">
                            Formation au profit des aides-docu...
                        </h5>
                        <p class="mb-3 text-xl font-normal  ">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <p class="mb-3 font-normal text-indigo-900 ">
                            Read more
                        </p>
                    </div>
                </a>
            </div>
                

               
            </div>
        
        
           )
    }
    