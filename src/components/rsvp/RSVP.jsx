// import React, { useState, useEffect } from 'react'
// import { createClient } from '@supabase/supabase-js'
// import supabaseRsvp from '../config/supabaseRsvpClient'

// const RSVP = () => {
//   const [name, setName] = useState('')
//   const [attending, setAttending] = useState('')
//   const [number, setNumber] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setName('')
//     setAttending('')
//     setNumber('')

//     if (!name || !attending || !number) {
//       setFormError('Please fill in all fields correctly')
//       return
//     }
//     const { data, error } = await supabaseRsvp
//       .from('weddingrsvp')
//       .insert([{ name, attending, number }])

//     if (error) {
//       console.log(error)
//       setFormError('Please fill in all fields correctly')
//     }
//     if (data) {
//       setFormError(null)
//     }
//   }

//   return (
//     <div className="h-auto text-center Parent">
//       <div className="container px-10 py-10 mx-auto mt-20 font-display">
//         <div className="box-border flex flex-col items-center justify-center px-20 py-10 rounded-lg bg-weddingmaroon ">
//           <h1 className="flex justify-center pb-5 text-4xl font-medium text-weddinggold">
//             Thanks for RSVP'ing!
//           </h1>
//           <h2 className="text-xl text-center text-weddingwhite ">
//             We can't wait to see you!
//           </h2>
//           <h2 className="mt-5">All Fields Are Required</h2>

//           <div>
//             <form action="" onSubmit={handleSubmit}>
//               <div className="mt-4 text-center input-box text-weddinggold">
//                 <label>
//                   Name on Invitation: <br></br>
//                   <input
//                     className="mt-2 text-center text-black rounded-md"
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </label>
//               </div>
//               <div className="mt-4 mb-4 text-center password-box text-weddinggold">
//                 <label>
//                   Are You Able to Attend? <br></br>
//                   <input
//                     className="mt-2 text-center text-black rounded-md"
//                     type="radio"
//                     required
//                     name="Yes"
//                     text="Yes"
//                   />
//                   <span className="pl-2">Yes</span>
//                   <br></br>
//                   <input
//                     className="mt-2 text-center text-black rounded-md"
//                     type="radio"
//                     name="No"
//                     text="No"
//                     required
//                   />
//                   <span className="pl-2">No</span>
//                 </label>
//               </div>
//               <div className="mt-4 mb-4 text-center password-box text-weddinggold">
//                 <label>
//                   Number of Guests on Invitation: <br></br>
//                   <input
//                     className="mt-2 text-center text-black rounded-md"
//                     type="number"
//                     placeholder="Guest Count"
//                     name="number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                     required
//                   />
//                 </label>
//               </div>
//               <label className="text-weddingwhite ">
//                 <button
//                   type="submit"
//                   className="relative inline-flex items-center justify-start px-5 py-3 mt-6 overflow-hidden font-bold rounded-full cursor-pointer animate-bounce animate-infinite animate-delay-100 animate-fill-both group"
//                 >
//                   {' '}
//                   <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
//                   <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-weddinggold group-hover:-translate-x-8"></span>
//                   <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-weddingwhite group-hover:text-gray-900">
//                     Submit
//                   </span>
//                   <span className="absolute inset-0 border-2 rounded-full border-weddinggold"></span>
//                 </button>
//               </label>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RSVP
