import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = '09/08/2024'

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

const Clock = () => {
  const intervalRef = useRef(null)

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000)

    return () => clearInterval(intervalRef.current || undefined)
  }, [])

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM)

    const now = new Date()

    const distance = +end - +now

    const days = Math.floor(distance / DAY)
    const hours = Math.floor((distance % DAY) / HOUR)
    const minutes = Math.floor((distance % HOUR) / MINUTE)
    const seconds = Math.floor((distance % MINUTE) / SECOND)

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  return (
    <div className="p-4 bg-gradient-to-br from-[#bfb48f] to-[#904e55] rounded">
      <h2 className="mt-5 mb-3 text-4xl font-date font-bold text-center text-transparent bg-gradient-to-r from-[#564e58] to-[#904e55] bg-clip-text ">
        ~ Sunday, 8 <span className="text-lg align-text-top">th</span>{' '}
        <span className="pr-2 text-2xl">of</span>
        <span> September</span> ~<br></br>
        <div className="pt-2 mt-2 text-3xl text-center bg-gradient-to-r from-[#564e58] via-[#564e58]  to-[#252627] bg-clip-text">
          09 <span className="text-2xl align-text-center">•</span> 08{' '}
          <span className="text-2xl align-text-center">•</span> 24
        </div>
      </h2>
      <div className="flex items-center w-full max-w-5xl mx-auto rounded bg-[#f2efe9]">
        <CountdownItem num={remaining.days} text="DAYS" />
        <CountdownItem num={remaining.hours} text="HOURS" />
        <CountdownItem num={remaining.minutes} text="MINUTES" />
        <CountdownItem num={remaining.seconds} text="SECONDS" />
      </div>
    </div>
  )
}

const CountdownItem = ({ num, text }) => {
  return (
    <div className="w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px] rounded-md border-slate-200 font-display-extrabold m-0">
      <div className="relative w-full overflow-hidden text-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            //   exit={{ y: '-100%' }}
            //   transition={{ ease: 'backIn', duration: 0.75 }}
            className="block text-2xl font-medium text-weddingmaroon md:text-4xl lg:text-6xl xl:text-7xl"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs font-light md:text-sm lg:text-base text-weddingblack">
        {text}
      </span>
    </div>
  )
}

export default Clock
