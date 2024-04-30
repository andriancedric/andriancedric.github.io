import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {ClockIcon, TableCellsIcon, UserIcon, PencilSquareIcon, BriefcaseIcon} from '@heroicons/react/20/solid'
import React from "react";


export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <section id="portfolio">
            {/* Kode untuk isi dari hero section*/}      
            <div className="bg-grey">     
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
                    <div className="mx-auto grid py-32 ax-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">Portfolio</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A collection of designs. That is portfolio</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-800">
                                Welcome to my collection of design exploration. Start from real problems, these solutions are designed for solved the problems and enhance its UI/UX.
                                </p>
                                <p className="mt-6 max-w-xl text-base leading-7 text-gray-800 lg:max-w-lg">
                                    PDF version of my portfolio can be downloaded here.
                                </p>

                            </div>
                            {/* <div className = "py-4">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                    Download here
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
                                src={require('../img/Sports App.png')}
                                alt="Sports App Exploration Design"
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
            
            {/* Portofolio 1: Desain Interaksi untuk Laman Utama dan Laman Asesmen pada Situs Kuliah ITB dengan Pendekatan User-Centered Design */}
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                {/* <div className="absolute inset-0 -z-10 overflow-hidden">
                </div> */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Portfolio #1</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Interaction Design for Homepage and Online Assessment Page of LMS Kuliah ITB Website using Goal-Directed Design Approach</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            This is my final project (thesis) title to obtain my Informatics Engineering Bachelor degree (S.T.) at Institut Teknologi Bandung (ITB).
                            Start from my concern about learning management system (LMS) kuliah ITB has bad UI/UX design whereas this LMS is vital during online lecture, made me to developed
                            better UI/UX design as suggestion and guideline for further development which improve its user experience. 
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/TA2 1.png')}
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
                                <strong className="font-semibold text-gray-900">Bachelor Thesis (Final Project)</strong> 
                                <br/>Portfolio type.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">1 year (July 2020 - June 2021)</strong> 
                                <br/>Time spent for development.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <TableCellsIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Questionnaire, Interview, Literature</strong> 
                                <br/>This portfolio was using quantitative, qualitative, and secondary data research.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <UserIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Fitra Arifiansyah, S.Kom., M.T.</strong>
                                <br/>Lecturer of this project.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <PencilSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Figma</strong>
                                <br/>Tools for this portfolio.
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            This design created both on desktop and mobile prototype. You can access the prototype through this link
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://www.figma.com/proto/L5Yhp1RVNveW1ELMX1TAKA/Tugas-Akhir-Andrian-Dekstop-ver-2?page-id=0%3A1&scaling=scale-down&node-id=1%3A2"
        
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Desktop prototype
                            </a>
                        </div>
                        <div className = "py-2">
                            <a
                                href="https://www.figma.com/proto/2S5HbeRJunzOguPd1pQu3j/Tugas-Akhir-Andrian-Mobile-ver-2?page-id=0%3A1&node-id=1%3A2&viewport=303%2C1434%2C0.15470626950263977&scaling=scale-down"
        
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Mobile prototype
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

             {/* Portofolio 2: John Hi-Tech Contrindo*/}
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
                        <p className="text-base font-semibold leading-7 text-indigo-600">Portofolio #2</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">John Hi-Tech Contrindo</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            Sebuah perusahaan yang bergerak di bidang manufaktur untuk bahan-bahan kimia dalam konstruksi, khususnya semen dan beton. 
                            Perusahaan menginginkan untuk melakukan pembaruan pada desain website mereka, termasuk tampilan responsif pada mobile. 
                            Desain website disesuaikan dengan palet warna dan kebutuhan yang diberikan oleh perusahaan.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/JHTC.png')}
                        alt="John Hi-Tech Contrindo"
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
                                <strong className="font-semibold text-gray-900"><i>Freelance</i></strong> 
                                <br/>Jenis pekerjaan portfolio.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">2 pekan (Desember 2022)</strong> 
                                <br/>Durasi pengerjaan dari portfolio ini.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <TableCellsIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Wawancara dan Literatur</strong> 
                                <br/>Metode pengumpulan data pada portofolio ini, terdiri dari data kualitatif (wawancara), dan sekunder (literatur).
                            </span>
                            </li>
                            {/* <li className="flex gap-x-3">
                            <UserIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Fitra Arifiansyah, S.Kom., M.T.</strong>
                                <br/>Dosen pembimbing dari tugas akhir ini.
                            </span>
                            </li> */}
                            <li className="flex gap-x-3">
                            <PencilSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Figma</strong>
                                <br/>Kakas (<i>tools</i>) yang digunakan untuk membuat desain ini.
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Desain ini terdiri dari prototipe untuk desktop dan <i>mobile</i>. Anda dapat melihatnya melalui pranala berikut.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://www.figma.com/file/DGbFRdETo7oxD4h43V59ZK/John-Hi-Tech-Contrindo?node-id=213%3A27&t=tUBQ1nLZKLYuQQVa-1"
        
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Prototipe desktop dan <i>mobile</i>
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

            {/* Portofolio 3: The Gamelan in Hong Kong*/}
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
                        <p className="text-base font-semibold leading-7 text-indigo-600">Portofolio #3</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Gamelan in Hong Kong</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                        Sebuah konser pementasan budaya Indonesia 
                        yang diinisasi dan dipimpin oleh Lauryn Vania Kurniawan, mahasiswi asal Indonesia di Hong 
                        Kong Baptist University (HKBU). Konser ini bertujuan untuk memperkenalkan budaya 
                        Indonesia yang begitu kaya dan beragam kepada khalayak di Hong Kong. Situs web TGHK 
                        diinginkan oleh Lauryn untuk menjadi dokumentasi daring dari konser yang telah 
                        berlangsung pada tahun 2022. Situs web didesain oleh Lauryn dan rekannya, Sharon, 
                        kemudian dikembangkan dengan pengembang situs web WordPress.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/TGHK.png')}
                        alt="The Gamelan in Hong Kong"
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
                                <strong className="font-semibold text-gray-900"><i>Freelance</i></strong> 
                                <br/>Jenis pekerjaan portfolio.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">2 bulan (April-Juni 2022)</strong> 
                                <br/>Durasi pengerjaan dari portfolio ini.
                            </span>
                            </li>
                            {/* <li className="flex gap-x-3">
                            <TableCellsIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Wawancara dan Literatur</strong> 
                                <br/>Metode pengumpulan data pada portofolio ini, terdiri dari data kualitatif (wawancara), dan sekunder (literatur).
                            </span>
                            </li> */}
                            {/* <li className="flex gap-x-3">
                            <UserIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Fitra Arifiansyah, S.Kom., M.T.</strong>
                                <br/>Dosen pembimbing dari tugas akhir ini.
                            </span>
                            </li> */}
                            <li className="flex gap-x-3">
                            <PencilSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">WordPress</strong>
                                <br/>Kakas (<i>tools</i>) yang digunakan untuk membuat desain ini.
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Desain ini telah diimplementasi menjadi situs web. Anda dapat melihatnya melalui pranala berikut.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://thegamelaninhk.com"
        
                                className="disabled rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Situs web (sedang tidak tersedia)
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


             {/* Portofolio 4: Incodesia */}
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
                        <p className="text-base font-semibold leading-7 text-indigo-600">Portofolio #4</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Incodesia</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                        Sebuah ide bisnis yang dicetuskan untuk berpartisipasi dalam lomba Pengembangan Bisnis TIK oleh GEMASTIK XIII (2020). 
                        Ide dari bisnis ini adalah menjadi wadah bagi para mahasiswa untuk mencari proyek yang ditawarkan oleh project manager 
                        sebagai pekerjaan freelance mereka. Selain itu, untuk meningkatkan mutu para freelancer, Incodesia juga bekerja sama 
                        dengan startup akademi untuk memberi pelatihan bagi para freelancer.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src={require('../img/Incodesia 1.png')}
                        alt="Incodesia"
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
                                <strong className="font-semibold text-gray-900"><i>Lomba</i></strong> 
                                <br/>Jenis pekerjaan portfolio.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <ClockIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">6 bulan (April-Oktober 2020)</strong> 
                                <br/>Durasi pengerjaan dari portfolio ini.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <TableCellsIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Analisis SWOT dan Kualitatif</strong> 
                                <br/>Metode pengumpulan data pada portofolio ini, terdiri dari data kualitatif (wawancara) dan analisis bisnis (SWOT).
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <UserIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Dr. Isti Raafaldini Mirzanti, M.M.</strong>
                                <br/>Dosen pembimbing dari portofolio ini.
                            </span>
                            </li>
                            <li className="flex gap-x-3">
                            <PencilSquareIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Figma</strong>
                                <br/>Kakas (<i>tools</i>) yang digunakan untuk membuat desain ini.
                            </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Desain ini terdiri dari prototipe untuk <i>mobile</i>. Anda dapat melihatnya melalui pranala berikut.
                        </p>
                        <div className = "py-4">
                            <a
                                href="https://www.figma.com/file/Kdd4XtXSPHGrWiX8uqFzqQ/Incodesia?type=design&node-id=0%3A1&t=PBRijqccaVTw8ByF-1"
        
                                className="disabled rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Prototipe <i>mobile</i>
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