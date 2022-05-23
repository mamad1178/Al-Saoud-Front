import {useState} from 'react'
import Image from 'next/image'
export default function Table() {

    return (
        <div className='pt-12 ' >

        
        <table class="table-fixed w-full  ">
        <thead class='bg-indigo-900/20 h-[50px] '>
          <tr >
            <th>Central Library</th>
            <th>Number of copies</th>
            <th>Material</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className='text-center w-[100px] h-[200px]'>
          <tr className='border-b  '>
            <td>Call number : 194/2491</td>
            <td>1</td>
            <td>Books</td>
            <td><button className='bg-green-100 rounded-md text-green-700 w-[100px] h-[30px]'>Available </button></td>
            <td>Open Access</td>
          </tr>
          <tr className=' border-b mt-8 '>
            <td>Call number : 194/2491</td>
            <td>1</td>
            <td>Books</td>
            <td><button className='bg-green-100 rounded-md text-green-700 w-[100px] h-[30px]'>Available </button></td>
            <td>Open Access</td>
          </tr>
          <tr className='border-b'>
            <td>Call number : 194/2491</td>
            <td>1</td>
            <td>Books</td>
            <td><button className='bg-green-100 rounded-md text-green-700 w-[100px] h-[30px]'>Available </button></td>
            <td>Open Access</td>
          </tr>
        </tbody>
      </table>
      </div>
    )


}