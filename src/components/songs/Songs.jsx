import React, { useState, useEffect } from 'react'
import supabase from '../../config/supabaseClient'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import state from '../../config/state'
import { useNavigate } from 'react-router-dom'

const Songs = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (
      state.currentUser === null ||
      state.currentUser === import.meta.env.VITE_NOACCESS_USER
    ) {
      navigate('/')
    } else if (state.currentUser === import.meta.env.VITE_MAIN_USER) {
      return
    } else if (state.currentUser === import.meta.env.VITE_SECOND_USER) {
      return
    }
  })

  const [song, setSong] = useState('')
  const [artist, setArtist] = useState('')
  const [genres, setGenres] = useState('')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState(null)
  const [formSuccess, setFormSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSong('')
    setArtist('')
    setGenres('')
    setType('')
    setMessage('')

    const { error } = await supabase
      .from('songs')
      .insert([{ song, artist, genres, type, message }])
    if (error) {
      e.preventDefault
      console.log(error)
      setFormError('Uh-oh! There is an Error. Let Hamal know!')
    } else {
      e.preventDefault
      console.log('Working!')
      setFormSuccess('You Rock!')
      return
    }
  }
  return (
    <div className="h-auto text-center Parent">
      <div className="container px-10 py-10 mx-auto mt-20 font-display">
        <div className="inline-flex space-x-4">
          <WhubBtn />
          <LogoutBtn />
        </div>
        <div className="box-border flex flex-col items-center justify-center px-20 py-10 mt-5 rounded-lg bg-weddingmaroon ">
          <h1 className="flex justify-center pb-5 text-4xl font-medium text-weddinggold">
            Got some tunes?
          </h1>
          <h2 className="text-xl text-center text-weddingwhite ">
            Share them with us!
          </h2>
          <br></br>
          <div className="text-sm font-bold">*Required</div>
          <br />
          <div>
            <form id="rsvpform" action="" onSubmit={handleSubmit}>
              <div className="font-bold text-center input-box text-weddinggold">
                <label>
                  *Song Name: <br></br>
                  <input
                    className="mt-2 text-center text-black rounded-md focus:text-green-700"
                    type="text"
                    placeholder="Song Name"
                    name="song"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mt-4 font-bold text-center input-box text-weddinggold">
                <label>
                  *Artist: <br></br>{' '}
                  <input
                    className="mt-2 text-center text-black rounded-md focus:text-green-700"
                    type="text"
                    placeholder="Artist?"
                    name="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mt-4 mb-4 font-bold text-center text-weddinggold">
                Genre: <br></br>
                <select
                  className="mt-2 text-center text-black rounded-md focus:text-green-700"
                  id="genrebox"
                  name="genre"
                  value={genres}
                  onChange={(e) => setGenres(e.target.value)}
                >
                  <option value="select">Select...</option>
                  <option value="Afrobeats">Afrobeats</option>
                  <option value="Bachata">Bachata</option>
                  <option value="Bhangra">Bhangra</option>
                  <option value="Blues">Blues</option>
                  <option value="Bollywood">Bollywood</option>
                  <option value="Classical">Classical</option>
                  <option value="Country">Country</option>
                  <option value="Cumbia">Cumbia</option>
                  <option value="Folk">Folk</option>
                  <option value="Hip Hop">Hip Hop</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Line Dance">Line Dance</option>
                  <option value="Merengue">Merengue</option>
                  <option value="Pop">Pop</option>
                  <option value="R&B">R&B</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Rock">Rock</option>
                  <option value="Salsa">Salsa</option>
                  <option value="Slow Dance">Slow Dance</option>
                  <option value="Soca">Soca</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mt-4 mb-4 font-bold text-center text-weddinggold">
                Dinner or Dance Music: <br></br>
                <select
                  className="mt-2 text-center text-black rounded-md focus:text-green-700"
                  id="typebox"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="select">Select...</option>
                  <option value="Dance">Dance</option>
                  <option value="Dinner">Dinner</option>
                </select>
              </div>

              <div className="mt-4 mb-4 font-bold text-center password-box text-weddinggold">
                <label>
                  Anything Else? <br></br>
                  <textarea
                    className="p-2 mt-2 text-sm text-left text-black rounded-md focus:text-weddingmaroon "
                    placeholder=""
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    cols={25}
                  />
                </label>
              </div>
              <label className="text-weddingwhite ">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-start px-5 py-3 mt-6 overflow-hidden font-bold rounded-full cursor-pointer animate-bounce animate-infinite animate-delay-100 animate-fill-both group"
                >
                  {' '}
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-weddingwhite opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 bg-weddinggold group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out text-weddingwhite group-hover:text-gray-900">
                    Send!
                  </span>
                  <span className="absolute inset-0 border-2 rounded-full border-weddinggold"></span>
                </button>
                {formError && (
                  <>
                    <p className="text-xl font-bold text-center text-weddingwhite">
                      {formError}
                    </p>
                  </>
                )}
                {formSuccess && (
                  <>
                    <p className="text-xl font-bold text-center text-weddingwhite">
                      {formSuccess}
                    </p>
                  </>
                )}
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Songs
