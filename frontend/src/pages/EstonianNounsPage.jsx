import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const EstonianNounsPage = () => {
    const [ estonianNouns, setEstonianNouns ] = useState()

    // upon loading
    useEffect(() => {
      const estonianNouns = async () => {
          const response = await fetch('http://localhost:4000/estonian/nouns')
          /* the dead json string is turned 
          into a live object/array? */
          const json = await response.json()
          // reflects the change in the page
          if (response.ok) {
            setEstonianNouns(json)
          }
      }
      fetchEstonianNouns()   
    }, [])
  
    return (
      <>
        <div className="estonian-noun-card">
          <h1>Estonian Nouns</h1>
          {estonianNouns && estonianNouns.map((noun) => (
            <>
              <span>
                <h3>{noun.nomSing}</h3>
                <p>{noun.engTrans}</p>
              </span>
  
              <p>nominative singular: {noun.nomSing}</p>
              <p>nominative plural: {noun.nomPlur}</p>
              <p>genitive singular: {noun.genSing}</p>
              <p>genitive plural: {noun.genPlur}</p>
              <p>partitive singular: {noun.partSing}</p>
              <p>partitive plural: {noun.partPlur}</p>
              --------------------------------
            </>
          ))}
        </div>
      </>
    )
  }

export default EstonianNounsPage