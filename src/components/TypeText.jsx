import { Typewriter } from 'react-simple-typewriter'

export default function TypeText() {
  return (
    <>
        <Typewriter
            words={['Web Desinger', 'Web Developer', 'Frontend Developer', 'Wordpress Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </>
  )
}