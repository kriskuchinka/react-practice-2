'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Hero1 from './components/Hero1'
import MainContent1 from './components/MainContent1'
import Hero2 from './components/Hero2'
import MainContent2 from './components/MainContent2'
import Hero3 from './components/Hero3'
import MainContent3 from './components/MainContent3'
import Hero4 from './components/Hero4'
import MainContent4 from './components/MainContent4'
import Hero5 from './components/Hero5'

import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  return (
    <>
    <ParallaxProvider>
      <Hero1 />
      <MainContent1 />
      <Hero2 />
      <MainContent2 />
      <Hero3 />
      <MainContent3 />
      <Hero4 />
      <MainContent4 />
      <Hero5 />
    </ParallaxProvider>
    </>
  )
}
