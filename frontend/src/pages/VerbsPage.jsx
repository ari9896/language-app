import React, { useEffect } from 'react'
import HebrewVerb from '../components/HebrewVerb.jsx'
import { useLanguageStore } from '../store/LanguageStore.js'

const VerbsPage = () => {
  const { isLoading, getHebrewVerbs, verbs } = useLanguageStore()

  useEffect(() => {
    getHebrewVerbs()
  }, [getHebrewVerbs])

  if (isLoading) {
    return <div>Loading verbs...</div>
  }

  if (verbs.length === 0) {
    return <div>No nouns found.</div>; // Handle the case where the array is empty
  }

  return (
    <>
      <div className='text-red-500 text-3xl font-bold'>Verbs Page</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {verbs.map((verb, ) => (
          <HebrewVerb key={verb._id} verb={verb} />
        ))}
      </div>
    </>
  )
}

export default VerbsPage