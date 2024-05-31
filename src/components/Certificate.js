// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {ClockIcon, BriefcaseIcon} from '@heroicons/react/20/solid'
import React from "react";

export default function Certificate() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section id="certificate">
            {/* Kode untuk isi dari hero section*/}      
            <div className="bg-grey">     
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                    <div className="mx-auto grid py-32 ax-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Certificate</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learn and teach. Knowledge is for everyone.</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-800">
                                In this page, you will see my obtained certificates, i.e. professional, class, internship, or speaker certificates.
                                </p>
                                {/* <p className="mt-6 max-w-xl text-base leading-7 text-gray-800 lg:max-w-lg">
                                    Portofolio dalam versi PDF dapat diunduh di sini.
                                </p> */}

                            </div>
                            {/* <div className = "py-4">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                    Unduh di sini
                                </a>
                            </div> */}
                        </div>
                        </div>
                        {/* <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                As my former lead said, "Design is continous improvement. Keep practising and exploring." I believe that exploration will leads us to broader view and better experience.
                                So, this website will be my showcase of design explorations based on real problems that I face everyday.
                            </p>
                            </div>
                        </div>
                        </div> */}
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src={require('../img/Certificate/CERTIFICATE_LANDING_PAGE~REKJ3HLTVE2A.jpeg')}
                                alt="Google UX Design Certificate"
                            />
                        </div>
                    <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                    >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                </div>
                </div>
            </div>
            
            {/* Sertifikat 1: Google UX Design */}
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                    >
                    <defs>
                        <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                        >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg> */}
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Certificate #1</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Google UX Design by Google on Coursera</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                        Those who earn the Google UX Design Professional Certificate have
                        completed seven courses, developed by Google, that include handson, practice-based assessments and are designed to prepare them for
                        introductory-level roles in UX design. They can complete the design
                        process from beginning to end: empathizing with users, defining their
                        pain points, coming up with ideas for design solutions, creating
                        wireframes and prototypes, and testing designs to get feedback.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {/* <iframe 
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" 
                        src={require("../img/Certificate/EF SET Certificate.pdf")}
                    /> */}
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/Certificate/CERTIFICATE_LANDING_PAGE~REKJ3HLTVE2A.jpeg')}
                        alt=""
                    />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        {/* <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.
                        </p> */}
                        <ul className="mt-8 space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                            <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Professional Specialization Certificate</strong> 
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Obtained at October 12, 2023</strong> 
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Authenticate the credential of the certificate by clicking button below.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://coursera.org/verify/professional-cert/REKJ3HLTVE2A"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                View credential here
                            </a>
                        </div>
                                    {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Sertifikat 2: EF Certificate SET */}
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                    >
                    <defs>
                        <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                        >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg> */}
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Certificate #2</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EF SET Certificate</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                        The achieved level is <b>75/100</b> on the EF SET score scale and C2 Proficient according to the Common European Framework of Reference (CEFR). The EF SET score is calculated as an average of the skill section scores.
                        </p>
                        
                        <p className="mt-6 text-xl leading-8 text-gray-700">You can read virtually any kind of text (factual, literary, technical) and accurately recognize and categorize style and tone. You can understand complex technical writing on unfamiliar subjects on a wide range of topics.</p>
                        
                        <p className="mt-6 text-xl leading-8 text-gray-700">You are comfortable in all situations, live or broadcast, that require full comprehension; you are almost never confused or searching for the meaning of words and phrases. You understand nuances of expression and tone, humor and emphasis in all live theatrical presentations, films or broadcast presentations.</p>
                    
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {/* <iframe 
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" 
                        src={require("../img/Certificate/EF SET Certificate.pdf")}
                    /> */}
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/Certificate/EF SET Certificate_photo.jpg')}
                        alt=""
                    />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        {/* <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.
                        </p> */}
                        <ul className="mt-8 space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                            <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Professional Specialization Certificate</strong> 
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Obtained at October 12, 2023</strong> 
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Authenticate the credential of the certificate by clicking button below.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://coursera.org/verify/professional-cert/REKJ3HLTVE2A"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                View credential here
                            </a>
                        </div>
                                    {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

             {/* Sertifikat 3: Pembicara Maju Indonesia*/}
             <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                    >
                    <defs>
                        <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                        >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg> */}
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Certificate #3</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Speaker Certificate - Peran UI/UX Designer: Membangun Industri Digital di Era Perkembangan Teknologi</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                        At July 31, 2022, I was invited by Maju Indonesia (@maju.idn on Instagram) to be a speaker for their webinar, <b>Peran UI/UX Designer: Membangun Industri Digital di Era Perkembangan Teknologi </b> (<i>UI/UX Role: Developing Digital Industry in Technology Advancing Era</i>)
                        </p>
                        
                        <p className="mt-6 text-xl leading-8 text-gray-700">In this webinar, I explain why a UI/UX Designer has a very important role in technological development. Starting from the Indonesian population who are increasingly digitally literate, to the change of industry to industry 4.0.
                        UI/UX Designers should have an important role in the software development life cycle (SDLC), especially in the formulation of problems and designing solutions before going into development by developers. However, many technology companies in Indonesia still do not fully understand
                        the role of UI/UX Designer in their business. Therefore, in this webinar, I present important and concise material about UI/UX, starting from the basic definition, study journey, several roles in the SDLC, several examples of UI/UX design, to the challenges of being a UI/UX Designer.</p>
                    
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {/* <iframe 
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" 
                        src={require("../img/Certificate/EF SET Certificate.pdf")}
                    /> */}
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/Certificate/Sertifikat Pembicara - Maju Indonesia.jpeg')}
                        alt=""
                    />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        {/* <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.
                        </p> */}
                        <ul className="mt-8 space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                            <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Appreciation Certificate</strong> 
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Obtained at July 31, 2022</strong> 
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            View the certificate by clicking button below.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://drive.google.com/file/d/1wwSiAgcBsp3XeeNGAbrhrvQ6s3rf1SQS/view?usp=sharing"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                View certificate here
                            </a>
                        </div>
                                    {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* Sertifikat 4: Pembicara GWM ITB*/}
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    {/* <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                    >
                    <defs>
                        <pattern
                        id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                        >
                        <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                        strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg> */}
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Certificate #4</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Speaker Certificate - UI/UX Design: An Interactive Introduction to Figma</h1>
                      
                        
                        <p className="mt-6 text-xl leading-8 text-gray-700">On November 26, 2021, I had the opportunity to bring a workshop at the Ganesha Monthly Workshop with the title <b>UI/UX Design: An Interactive Introduction to Figma</b>. The activity organized by the KM ITB Cabinet through the Coordinating Ministry for Innovation Work was attended by ITB campus masses and outside ITB and was greeted with high enthusiasm. 
                        The activity began with a basic explanation of UI/UX design, the importance of UI/UX in today's digital technology era, the process of making UI/UX design, and good tips in making UI/UX design, then continued with a question and answer session and hands-on practice in making UI/UX design using the Figma application. </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    {/* <iframe 
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" 
                        src={require("../img/Certificate/EF SET Certificate.pdf")}
                    /> */}
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/Certificate/Pembicara - GWM.jpeg')}
                        alt=""
                    />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                        {/* <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                            semper sed amet vitae sed turpis id.
                        </p> */}
                        <ul className="mt-8 space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                            <BriefcaseIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Appreciation Certificate</strong> 
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Obtained at November 26, 2021</strong> 
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            View the certificate by clicking button below.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://drive.google.com/file/d/1IQcH-9bFk1aWM9g2FEScfFpHomLrt6uc/view?usp=sharing"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                View certificate here
                            </a>
                        </div>
                                    {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             
            

        </section>
);
}