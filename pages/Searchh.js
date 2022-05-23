import Head from 'next/head'
import Navbar from '../components/Search/Navbar'
import Secondly from '../components/Search/Secondly'
import Last from '../components/Search/Last'
import Search2 from '../components/Search/Search2'
import Navbar2 from '../components/Search/Navbar2'

export default function Searchh() {
    return (
<div>
        <Navbar/>

        <Secondly/>
        <Search2/>
         <Navbar2/>
        <Last/>
        
        </div>
    )
}