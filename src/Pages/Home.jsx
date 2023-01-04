import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
    const [navbar, setNavbar] = useState(false);
    return ( 
        <div className="home">
             <div>
                <div>
                    <div>
                        <nav className="flex mt-8">
                          <br />
                                <Link to="/" className="md:text-2xl inline text-xl mt-2 text-slate-200 ml-4 md:ml-36 font-serif">Martha Ochuko O.</Link>
                            
                                <div className='md:hidden float-right ml-40'>  
                                <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg> 
                                     ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </button>
             </div>
           
             <div
                        className={`flex-1 justify-self-center md:ml-96 p-2 pb-3  md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                                    <Link to="/about" className="text-xl block md:inline mt-8 text-slate-200 font-serif mr-10">About</Link>
                                    <Link to="/projects" className="text-xl md:inline block mt-8 text-slate-200 font-serif mr-10">Projects</Link>
                                    <Link to="/resume" className="text-xl block md:inline  mt-8 text-slate-200 font-serif mr-10">Resume</Link>
                                    <Link to="/contact" className="text-xl text-slate-200 mt-8 font-serif block md:inline mr-10">Contact</Link>
                                    </div>    
                        </nav>   

                        
                        <div className="text-center md:mt-28 mt-10 font-serif p-6 text-slate-300">
                            <h1 className="md:text-6xl text-4xl font-bold">Hey There! 👋🏾</h1>
                            <h2 className="md:text-4xl text-2xl mt-10">I'm a Front End Developer who builds websites <br /> with good interface. 
                            I am also confident in my ability to come up <br /> with beautiful and responsive designs. </h2>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <div className="flex mt-10">
                                    <div className=" h-10 w-10 flex items-center font-mono justify-center md:text-xl">
                                        <a href="https://github.com/Mataoseeker" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">GitHub</a>
                                        <a href="https://www.linkedin.com/in/marthaosika/" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">LinkedIn</a>
                                        <a href="https://twitter.com/martha_ochuko" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">Twitter</a>
                                        <a href="" className="md:m-10 m-1 border p-3 border-slate-900 rounded-lg text-slate-200 font-bold">Blog</a>
                                    </div>
                                    </div>
                                    </div>
                                    <a href="/about">
                                        <div className="flex justify-center">
                                            <div className="flex mt-14">
                                                <p className="text-2xl text-slate-300">About</p>
                                                <svg class="w-7 h-7 m-1 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                            </div>
                                        </div>

                                    </a>
                        </div>
                    </div>
                </div>
             </div>
        </div>
     );
}
 
export default Home ;