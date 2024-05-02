import React from 'react'

export function Quotes() {

  return (

    <>
<h1 className='text-2xl text-black font-bold font-serif ml-6'>Quotes-</h1>

      <div className="carousel w-1/2 flex mx-auto">


        <div id="item1" className="carousel-item w-full">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/5d7121a2621fa50001fc829f/1568678177638-W2QTNI5J78DK78LEY1F6/L%27Engle%2C+Madeleine.jpg"
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black"> Madeleine L'Engle</p>
              <p className="mt-1 text-base text-gray-600">American Writer</p>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAem39R-jMAQQyRFhyX7RPTbUN70XFBYNEpfm2eq0UOA&s"
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action."  </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black"> A. P. J. Abdul Kalam</p>
              <p className="mt-1 text-base text-gray-600">Former President of India</p>
            </div>
          </div>
        </div>



        <div id="item3" className="carousel-item w-full">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <img
                className="relative h-48 w-48 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-V06a4FgApgD7-UXLhrCYAQ6qfFw8Px4DtRpbX_3pg&s"
                alt=""
              />
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."  </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black"> Robert Frost</p>
              <p className="mt-1 text-base text-gray-600">American Poet</p>
            </div>
          </div>
        </div>



      </div>

      {/* button */}
      <div className="flex justify-center w-full py-2 gap-2 mb-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
      </div>
    </>

  )
}
