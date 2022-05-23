import Head from 'next/head'
import Navbar from '../components/Single/Navbar'
import Secondly from '../components/Single/Secondly'
import Last from '../components/Single/Last'
import Navbar2 from '../components/Search/Navbar2'
import Content from '../components/Single/Content'
export default function Searchh() {
    return (
<div>
        <Navbar/>

        <Secondly/>
        <Content />
        <Navbar2/>
        <Last/>
        
        
        </div>
    )
}