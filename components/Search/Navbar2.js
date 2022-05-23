import {useState} from 'react'

export default function Cards() 
{

    return (
        <div>
            <nav className='bg-indigo-900/50 w-full h-[100px] pl-10 pt-6'>
                <div className="flex justify-between ">
                    <div>
                        <p className='font-bold text-white'>
                            NEWSLETTER 
                        </p>
                        <div className=' text-sm text-indigo-900'>
                            Subscribe to our Newsletter
                        </div> 
                    </div>
                    <div className='mr-48' >

                    
                    
                        <input type="text" className='w-[350px] h-11 px-6 ' placeholder='Email'  ></input>
                        
                    
                    
                        <button className=' h-11 px-6 ml-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-900   hover:bg-indigo-900'>
                        Subscribe
                        </button>
                    
                    </div>
                </div>
            </nav>
        </div>
            )
}