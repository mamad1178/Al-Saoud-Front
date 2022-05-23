import {useState} from 'react'
import {
    InstantSearch 
}
from 'react-instantsearch-dom'
import Image from 'next/image'

export default function Search2() {

    return (
        <div>
        
            <div className='flex pl-20'>
                <aside className='w-[255px] bg-gray-100 h-[800px]   pt-5 '>
                    <div className='flex justify-between w-[240px] '>
                        <div className=' pl-4 font-bold '>
                            Related books :  
                        </div>
                        
                    </div>
                    <div className='border-b w-[205px] ml-4 mt-2.5 '>
            </div>
            <div className='mt-4 text-gray-400 ml-4 pb-2 '>
                 Category
             </div>
             <div class="flex-col justify-between  ">
                 <div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left  cursor-pointer" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class=" pl-2 form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                Arts (8)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Law (3)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Economy (9)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Education (2)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                History (1)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Islam (20)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Generalities (8)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Geography (6)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Management (19)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Literature (12)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Maghreb literature (4)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Linguistics (40)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Philosophy (22)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Psychology (14)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Religion(generalities) (3)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Sciences and technology (3)
                            </label>
                    </div>
                    <div class="form-check pl-4 pb-2 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                Political science  (3)
                            </label>
                    </div>
                    <div class="form-check pl-4 ">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" ></input>
                            <label class="form-check-label inline-block text-gray-800 " for="flexCheckChecked">
                                Sociology (3)
                            </label>
                    </div>
                 </div>
            </div>
             </aside>
             <main>
                 <div className='flex pl-60 pt-24'>
                   <div className='flex-col justify-between ml-4' >
                      <div className='ml-12  '>
                        <a href='#'>
                            <Image
                            
                            src="/book5.jpg"
                            width={170}
                            height={250}
                            />
                            <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                        </a>
                      </div>
                      <div className='ml-12 pt-8'>
                      <a href='#'>
                          <Image
                          src="/book6.jpg"
                          width={170}
                          height={250}
                          />
                          
                          <p class="text-indigo-900 pl-10">
                              Book's name
                          </p>
                          </a>
                      </div>
                      <div className='ml-12  pt-8'>
                      <a href='#'>
                          <Image
                            src="/book7.jpg"
                            width={170}
                            height={250}
                          />
                          
                           <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                        </a>
                      </div>
                      <div className='ml-12 pt-8'>
                      <a href='#'>
                          <Image
                            src="/book8.jpg"
                            width={170}
                            height={250}
                          />
                            <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                      </div>
                   </div>
                   <div className='flex-col justify-between ml-4'>
                        <div className='ml-12'>
                        <a href='#'>
                            <Image
                                src="/book-1.jpg"
                                width={170}
                                height={250}
                            />
                              <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                        </div>
                        <div className='ml-12 pt-8'>
                        <a href='#'>
                            <Image
                                src="/book-2.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book-3.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book-4.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                        </div>

                        <div className='flex-col justify-between ml-4'>
                        <div className='ml-12 '>
                        <a href='#'>
                            <Image
                                src="/book7.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                        </div>
                        <div className='ml-12 pt-8'>
                        <a href='#'>
                            <Image
                                src="/book-5.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div >
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book8.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book6.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                        </div>

                        <div className='flex-col justify-between ml-4'>
                        <div className='ml-12 '>
                        <a href='#'>
                            <Image
                                src="/book-5.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                        </div>
                        <div className='ml-12 pt-8'>
                            
                        <a href='#'><Image
                                src="/book-4.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book-1.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                            <div className='ml-12 pt-8'>
                            <a href='#'>
                            <Image
                                src="/book-3.jpg"
                                width={170}
                                height={250}
                            />
                             <p class="text-indigo-900 pl-10">
                                Book's name
                            </p>
                            </a>
                            </div>
                        </div>
                 </div>
                 
             </main>
         </div>
        




    </div>
  
  
  
  
  
        )
}