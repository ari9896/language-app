import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useLanguageStore } from '../store/LanguageStore';

const HebrewVerbsUploader = () => {
  const { createHebrewVerb } = useLanguageStore()

  const [ hebrewVerb, setHebrewVerb ] = useState({
    hebrewInfinitive: ["", "", ""], // these field names have to be EXACTLY like the ones in your model or else that specific field won't get saved!!!
    preposition: null,
    meaning: "",
    class: "",
    roots: "",
  });

  const updateArray = (index, value) => {
    setHebrewVerb((prevState) => {
      const updatedArray = [...prevState.hebrewInfinitive];
      updatedArray[index] = value; // Update the specific index
      return { ...prevState, hebrewInfinitive: updatedArray }; // Update the state
    });
  };

  const handlePrepositionClick = (preposition) => {
    setHebrewVerb((prevState) => ({
      ...prevState,
      preposition: prevState.preposition === preposition ? null : preposition
    }))
  }

  const handleVerbClassClick = (verbClass) => {
    setHebrewVerb((prevState) => ({ // prevState is always what the current state is. It doesn't need to be passed into the function.
      ...prevState,
      class: prevState.class === verbClass ? null : verbClass
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("State being submitted: ", hebrewVerb)
    const hasEmptySlot = hebrewVerb.hebrewInfinitive.some((item) => item === "");
    if (hasEmptySlot || !hebrewVerb.meaning || !hebrewVerb.class || !hebrewVerb.roots) {
      // not working
      toast.message("Make sure all fields are filled")
      return // not sure if I should place this in the try block or not
      // have it highlight the the empty field in red and tell the user that all fields must be completed
      // there's a glitch where if all fields minus class are selected and I click submit and then a class, everything deletes
    }
     
    try {
      await createHebrewVerb(hebrewVerb)
      console.log(hebrewVerb)
      setHebrewVerb({
        hebrewInfinitive: ["", "", ""],
        preposition: null,
        meaning: "",
        class: "",
        roots: "",
      })
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("There was an error submitting the Hebrew verb.");
    }
  }

  const prepositions = ["be", "le", "al"]
  /*[ , "?a?e?/?e?e?a", 
    "mi?ta?e? (to attend)",

    ] Add more classes as you encounter them. You don't have to have them all at the beginning.
     */
  const classes = ["?o?e?(et)", 
    "me?a?e?(et)", "me??a?e?(et)", "me?a??e?(et)", // I made a verb where I put the second of this subclass instead of the third. Fix it.
    "?o?e/a", "?a?(a)", "?e?(a)", "ma??i?(a)", "ma?a?i?(a)", "me?a?e/a", "ni??a?/ni??e?(et)", "mit?a?e?"] // feminine?
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <div>Hebrew Verbs Uploader</div>
        {/* Top Section: Display Information */}
        <div className='bg-white shadow-md rounded-xl p-6 mb-8"'>
          <p className="font-medium">Infinitive: {hebrewVerb.hebrewInfinitive[0]}</p>
          <p className="font-medium">Infinitive with niqqud: {hebrewVerb.hebrewInfinitive[1]}</p>
          <p className="font-medium">transliteration: {hebrewVerb.hebrewInfinitive[2]}</p>

          <p>The current preposition is: {hebrewVerb.preposition}</p>
          <p>Meaning: {hebrewVerb.meaning}</p>
          <p>Class: {hebrewVerb.class}</p>
          <p>Roots: {hebrewVerb.roots}</p>
        </div>

        <div className="min-h-screen bg-gray-100 p-8">
          <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-xl p-6 space-y-8'>
            {/* Form Container */}
            <div className="grid grid-cols-4 gap-8">

              {/* Column 1: Infinitive */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Infinitives</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={hebrewVerb.hebrewInfinitive[0]} onChange={(e) => updateArray(0, e.target.value)} 
                  placeholder='Hebrew without niqqud'
                />
                <input type="text" value={hebrewVerb.hebrewInfinitive[1]} onChange={(e) => updateArray(1, e.target.value)} placeholder='Infinitive Array'/>
                <input type="text" value={hebrewVerb.hebrewInfinitive[2]} onChange={(e) => updateArray(2, e.target.value)} placeholder='Infinitive Array'/>
              </div>

              {/* Column 2: Preposition */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Field 2
                </label>
                {prepositions.map((prep) => (
                  <button
                    type="button"
                    key={prep}
                    onClick={() => handlePrepositionClick(prep)}
                    className={`p-2 rounded-lg border ${
                      hebrewVerb.preposition === prep ? "bg-blue-500 text-white" : "bg-gray-200"
                    } hover:bg-blue-400`}
                  >
                    {prep}
                  </button>
                ))}
              </div>

              {/* Column 3: Meaning and roots */}
              <div>
                <input type="text" value={hebrewVerb.meaning} onChange={(e) => setHebrewVerb({...hebrewVerb, meaning: e.target.value })} placeholder='meaning' />
                <input type="text" value={hebrewVerb.roots} onChange={(e) => setHebrewVerb({...hebrewVerb, roots: e.target.value })} placeholder='roots'/>
              </div>

              {/* Column 4: Classes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Class</h3>
                <div className="grid grid-cols-3 gap-4 w-full max-w-screen-md mx-auto">
                  {classes.map((x) => (
                    <button
                      type="button"
                      key={x}  
                      onClick={() => handleVerbClassClick(x)}   
                      className={`p-2 rounded-lg border ${
                        hebrewVerb.class === x ? "bg-blue-500 text-white" : "bg-gray-200"
                      } hover:bg-blue-400 rounded-lg flex items-center justify-center aspect-square
                      `}       
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button type='submit' className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Submit</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default HebrewVerbsUploader