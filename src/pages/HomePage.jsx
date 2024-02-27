import React, { useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Products from "../components/Products/Products"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
        </>
    )
}

export default HomePage