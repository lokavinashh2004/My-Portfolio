import React from 'react'
import Container from '../ui/Container'
import GradientText from '../ui/GradientText'

import { BsHeartFill } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="bg-darkBlue px-12 py-16 w-full">
        <Container className="flex flex-col items-center w-full">
          <p className="flex items-center gap-2 mx-auto font-light text-cyan-200 text-sm">
            Made with <BsHeartFill className="w-4 h-4 text-red-700" /> by
            <GradientText as="span" className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] text-sm">Varadarajan M</GradientText>
          </p>
        </Container>
      </footer>
  )
}

export default Footer