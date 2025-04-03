import React, { useEffect } from 'react'
import { useLanguageStore } from '../store/LanguageStore'

const NounsPage = () => {
  const { nouns, isLoading, getNouns } = useLanguageStore();

  useEffect(() => {
    getNouns();
  }, [getNouns]);

  if (isLoading) {
    return <div>Loading nouns...</div>
  }

  if (nouns.length === 0) {
    return <div>No nouns found.</div>; // Handle the case where the array is empty
  }

  return (
    <>
      <div>Nouns Page</div>
      
      {nouns.map((noun) => (
        <div key={noun._id}>
          {noun.nomSing}
          {noun.nomPlur}
        </div>
      ))}
    </>
  )
}

export default NounsPage