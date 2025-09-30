import React from 'react'
import Container from '../ui/Container'
import GradientText from '../ui/GradientText'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-darkBlue px-12 py-16 w-full">
        <Container className="flex flex-col items-center w-full">
          {/* Contact Information */}
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="flex flex-wrap justify-center gap-6 text-cyan-200">
              <a 
                href="mailto:lokavinashh2004@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>lokavinashh2004@gmail.com</span>
              </a>
             
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://linkedin.com/in/lokavinashh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/lokavinashh2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-200 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>

          <p className="flex items-center gap-2 mx-auto font-light text-cyan-200 text-sm">
            Made with <BsHeartFill className="w-4 h-4 text-red-700" /> by
            <GradientText as="span" className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] text-sm">T.Lok Avinashh</GradientText>
          </p>
        </Container>
      </footer>
  )
}

export default Footer