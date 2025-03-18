import React from 'react'
import { Plan } from '../components/Plan'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'

export const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Plan />
        </div>
    )
}
