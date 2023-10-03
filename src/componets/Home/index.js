import { Link } from 'react-router-dom'
import LogoTitle from './../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetter'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    // Use setTimeout to set the letter class after a delay
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const nameArray = ['a', 'm', 'u', 'e', 'l']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _30`}>I</span>
            <span className={`${letterClass} _40`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FullStack Developer / Javascript Expert / YouTuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
