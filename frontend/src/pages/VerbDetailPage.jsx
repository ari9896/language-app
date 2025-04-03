import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../lib/axios';

const VerbDetailPage = () => {
  const { id } = useParams(); // this is the name we gave it in the route
  const [ verb, setVerb ] = useState(null)
  const [ hovered, setHovered ] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  useEffect(() => {
    const fetchVerb = async () => {
      try {
        const response = await axiosInstance.get(`hebrew/verb/${id}`)
        setVerb(response.data);
        console.log(verb)
      } catch (error) {
        console.error("Error fetching verb:", error);
      }
    }

    fetchVerb();
  }, [id])

  if (!verb) return <p>Loading...</p>

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      {/* Giant Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 text-center">
        {/* Big Hebrew Verb */}
        <h1 className="text-5xl font-bold text-gray-800 mb-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {hovered ? verb.hebrewInfinitive[1] : verb.hebrewInfinitive[0]}
        </h1>

        {/* Tiny Hebrew Form */}
        <p className="text-sm text-gray-500 mb-6">
          {verb.hebrewInfinitive[2]}
        </p>

        {/* Verb Meaning */}
        <p className="text-2xl font-medium text-gray-700">
          {verb.meaning}
        </p>

        <p>{verb.class}</p>
        <p>{verb.roots}</p>
      </div>
    </div>

      {/* Users will be able to upload their own custom sentences for them to look at. */}
    </>
  )
}

export default VerbDetailPage