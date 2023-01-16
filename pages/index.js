import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import nuggs from '../assets/Nuggs.png'

const Home = () => {

const [userInput, setUserInput] = useState('')
const onUserChangedText = (event) => {
  //use this console.log statement to test text input, then comment out
  //console.log(event.target.value)
  setUserInput(event.target.value)
}

  return (
    <div className="root">
      <Head>
        <title>Nugg - virtual budtender</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <Image src={nuggs} 
                    alt='logo'
                    width={240}
                    height={308} />
            <h1>Meet Nugg</h1>
          </div>
          <div className="header-subtitle">
            <h2>Your virtual budtender for navigating the legal cannabis marketplace.</h2>
          </div>
          <div className='prompt-instructions'>
            <p>Tell Nugg what you are looking for in your cannabis experience and get a strain suggestion!</p>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
            placeholder="Examples: 'help falling asleep', 'relieve back pain', 'boost creativity'" 
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText} 
            />
          <div className='prompt-buttons'>
            <a className='generate-button' onClick={null}>
              <div className='generate'>
                <p>Generate</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/*<div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
  </div>*/}
    </div>
  )
}

export default Home
