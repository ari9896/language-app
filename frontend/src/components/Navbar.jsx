import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 mb-8 fixed top-0 left-0 right-0 flex 
      justify-between items-center z-50">
        {/* Left: Language Master */}
        <div className="text-3xl font-bold">
            Language Master
        </div>

        {/* Right: Navbar links */}
        <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/nouns" className="hover:text-gray-300">Nouns</Link>
            <Link to="/verbs" className="hover:text-gray-300">Verbs</Link>
            <Link to="/hebrew-verbs-uploader" className="hover:text-gray-300">Verb Uploader</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar