'use client'

import React from 'react'
import { Menu, Pen, X } from 'lucide-react'

export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="w-full">

            <section className="relative overflow-hidden py-20">
                <div className="relative">
                    <div className="mx-auto max-w-xl lg:max-w-7xl">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
                                Your Thoughts...Our Words
                            </span>
                            <h1 className="text-5xl font-bold">Latest news from our blogs</h1>
                        </div>
                        <div className="my-18 -mx-4 flex flex-wrap px-4">
                            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                                <a className="group block w-full" href="#">
                                    <img
                                        className="mb-5 block w-full rounded-lg"
                                        src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                        alt=""
                                    />
                                    <span className="mb-5 block text-gray-500">Blog of the Day</span>
                                    <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                                        The Power of Positive Thinking..
                                    </h4>
                                    <p className="max-w-xl text-lg text-gray-800">
                                        In a world filled with challenges and uncertainties, one of the most powerful tools we possess is the ability
                                         to shape our reality through the lens of positivity. The concept of positive thinking is not
                                         merely about wearing rose-colored glasses or denying...
                                    </p>
                                </a>
                            </div>
                            <div className="w-full px-4 lg:w-1/2">
                                <h1 className='text-xl font-semibold text-gray-900 mb-3'>Books Reviews...</h1>
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src="https://images.blinkist.io/images/books/63c6cd1f3784800008d66c09/1_1/470.jpg"
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">The Alchemist</span>
                                        <h4 className="text-sm font-semibold text-gray-900">
                                            This Masterpiece by Paulo Coelho is a captivating tale of self-discovery and destiny. Set against the backdrop of mystical lands and timeless wisdom...
                                        </h4>
                                    </div>
                                </a>
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src="https://images.blinkist.io/images/books/59a2d8e4b238e10005eeb756/1_1/470.jpg"
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">The Monk Who Sold His Ferrari</span>
                                        <h4 className="text-sm font-semibold text-gray-900">

                                            "The Monk Who Sold His Ferrari" by Robin Sharma is a compelling narrative that blends fiction with profound life lessons. The story follows Julian Mantle, a successful lawyer who...
                                        </h4>
                                    </div>
                                </a>
                                <a className="group mb-8 md:flex" href="#">
                                    <img
                                        className="h-40 w-48 rounded-lg"
                                        src="https://bookbins.in/wp-content/uploads/2022/11/Think-And-Grow-Rich-Napoleon-Hill-Buy-Online-Bookbins-1.png"
                                        alt=""
                                    />
                                    <div className="my-4 pt-2 md:ml-6 md:mt-0">
                                        <span className="mb-2 block text-gray-500">Think and Grow Rich</span>
                                        <h4 className="text-sm font-semibold text-gray-900">

                                            "Think and Grow Rich" by Napoleon Hill is a timeless classic in the genre of personal development and success literature. Hill distills the principles of success by...
                                        </h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-14 text-center">
                            <button
                                type="button"
                                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                View All Posts
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="my-8" />
          
           
        </div>
    )
}
