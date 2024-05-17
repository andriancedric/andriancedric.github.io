// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import React from "react";
// import DemoImage from '..../public/Sports App.png'


export default function Home() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section id="home">

                {/* Kode untuk isi dari hero section*/}                  
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1e1e1e] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                    <div class="flex flex-col items-start ml-16 mr-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <h2 class="text-4xl mt-6 leading-8 text-gray-1000">
                            Hello, I'm
                        </h2>
                        <h1 class="text-8xl font-bold tracking-tight text-gray-900 sm:text-8xl">
                            Andrian Cedric
                        </h1>
                        <p class="text-2xl mt-6 leading-8 text-gray-1000">
                             A young man who love with UI/UX design. For now, I live in Jakarta and work at <a href="https://moonlay.com" className="font-bold hover:italic">Moonlay Technologies</a> as UI/UX Designer (#Moonlayers).
                        </p>
                    </div>
                    <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1e1e1e] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                </div>
                
                {/* Kode untuk isi dari section introduction*/}  
                {/* <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Hello, it's me, Andrian!</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Passionate to create simple, useful, and effective designs.</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                A young man who love with UI/UX design. For now, I live in Jakarta and work at <a href="https://moonlay.com" className="font-bold hover:italic">Moonlay Technologies</a> as UI/UX Designer (#Moonlayers).
                            </p>
                            <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                As my former lead said, "Design is continous improvement. Keep practising and exploring." I believe that exploration will leads us to broader view and better experience.
                                So, this website will be my showcase of design explorations based on real problems that I face everyday.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src={require('../img/Moonlay Website.png')}
                                alt="Sports App Exploration Design"
                            />
                        </div>
                    </div>
                </div> */}
            
        </section>
);
}