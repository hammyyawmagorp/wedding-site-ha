import React from 'react'
import WhubBtn from '../btns/WhubBtn'
import LogoutBtn from '../btns/LogoutBtn'
import Reveal from '../../config/Reveal'
import ourpic from '../images/compressed/ourpic.jpeg'
import firstpic from '../images/compressed/firstpic.jpg'
import zoompic from '../images/compressed/zoompic.jpg'
import datepic from '../images/compressed/datepic.jpg'
import engagementpic from '../images/compressed/engagementpic.jpg'

const Story = () => {
  return (
    <div className="pt-5 mt-5 text-center">
      <div className="inline-flex pb-5 space-x-4 mp-5 ">
        <WhubBtn />
        <LogoutBtn />
      </div>
      <div className="flex justify-center px-5 py-5 text-center Parent text-weddingblack">
        <div className="container px-5 py-5 mx-auto mt-20 font-display">
          <div className="box-border flex flex-col items-center justify-center px-20 py-10 rounded-lg ">
            <section>
              <Reveal>
                <div className="inline-flex flex-col justify-center overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-400 ">
                  <img src={ourpic} alt="couple pic" className=""></img>
                </div>{' '}
              </Reveal>
              <Reveal>
                <p className="pb-5 mb-5 md:text-3xl sm:text-2xl md:px-5 sm:px-2">
                  <span className="text-5xl font-date">H</span>amal and Ayesha's
                  journey began in the most unexpected of times and places—a
                  Zoom meeting in the midst of the global pandemic in 2020.
                  Introduced by a mutual friend, sparks flew almost immediately,
                  at least for Hamal, who found Ayesha cute. Ayesha, on the
                  other hand, initially believed that Hamal was married and
                  chose to ignore him.
                </p>
              </Reveal>
            </section>
            <section>
              <Reveal>
                <div className="inline-flex flex-col justify-center overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-400 ">
                  <img src={zoompic} alt="couple pic" className=""></img>
                </div>{' '}
              </Reveal>
              <Reveal>
                <p className="pb-5 mb-5 md:text-3xl sm:text-2xl md:px-5 sm:px-2">
                  <span className="pr-1 text-5xl font-date">A</span>t that time,
                  Hamal was residing in Karachi, while Ayesha called Melbourne
                  home. It wasn't long before Ayesha realized that Hamal was
                  indeed single, and their paths converged in a more meaningful
                  way. They decided to take a Zoom sign language class together,
                  and through shared virtual experiences, a friendship slowly
                  blossomed. Hamal frequently commented on the mouth-watering
                  food photos Ayesha posted, a gesture that helped bridge the
                  distance between them. The way to a mans heart is truly
                  through the stomach.
                </p>
              </Reveal>
            </section>
            <section>
              <Reveal>
                <div className="inline-flex flex-col justify-center overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-400 ">
                  <img src={firstpic} alt="couple pic" className=""></img>
                </div>{' '}
              </Reveal>
              <Reveal>
                <p className="pb-5 mb-5 md:text-3xl sm:text-2xl md:px-5 sm:px-2">
                  <span className="pr-2 text-5xl font-date">W</span>
                  hen Hamal moved back home to New York in 2021, their
                  conversations became more frequent, and their bond grew
                  stronger. Despite their growing connection, they remained
                  cautious about entering into a relationship since they had not
                  yet met in person. Early in 2022, when Australia lifted travel
                  restrictions, Hamal flew to Melbourne to meet Ayesha for the
                  first time. By then, they had developed a close friendship
                  that laid the foundation for their relationship.
                </p>
              </Reveal>{' '}
            </section>
            <section>
              <Reveal>
                <div className="inline-flex flex-col justify-center overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-400 ">
                  <img src={datepic} alt="couple pic" className=""></img>
                </div>{' '}
              </Reveal>
              <Reveal>
                <p className="pb-5 mb-5 md:text-3xl sm:text-2xl md:px-5 sm:px-2">
                  <span className="pr-2 text-5xl font-date">T</span>heir first
                  date was at a Korean Fried Chicken shop, where Ayesha,
                  breaking with tradition, paid the bill. Their second date was
                  a “charming” breakfast at McDonald's{' '}
                  <span>{"(Macca's as the Aussie's know it)"}</span>, where
                  Hamal happily covered the cost. Since that initial meeting,
                  Hamal has made multiple trips to Australia, perfecting his
                  Australian accent along the way. Ayesha, too, has visited
                  Hamal and fell in love with New York, eagerly anticipating her
                  move there.
                </p>
              </Reveal>
            </section>
            <section>
              <Reveal>
                <div className="inline-flex flex-col justify-center overflow-hidden transition-transform rounded-lg shadow-md bg-blue sm:w-400 ">
                  <img
                    a={engagementpic}
                    src={engagementpic}
                    alt="couple pic"
                    className=""
                  ></img>
                </div>{' '}
              </Reveal>
              <Reveal>
                <p className="pb-5 mb-5 md:text-3xl sm:text-2xl md:px-5 sm:px-2">
                  <span className="pr-2 text-5xl font-date">T</span>he pinnacle
                  of their journey came on April 15, 2023, in Melbourne, where
                  they got engaged, surrounded by friends who made the day
                  unforgettable. Having navigated the challenges of a
                  long-distance relationship for nearly four years, they have
                  become experts at making the most of their time apart. Now, as
                  they prepare to close the distance, Hamal and Ayesha look
                  forward to building a future together, cherishing every moment
                  as their love story continues to unfold.
                </p>
              </Reveal>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
