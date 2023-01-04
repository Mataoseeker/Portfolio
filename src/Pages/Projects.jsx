import pic from "./img1.png";
import pic2 from "./img4.png";
import pic3 from "./img5.png";
import pic4 from "./img6.png";
const Projects = () => {
    return ( 
        <div className="projects">
            
           <main className="px-16 py-6 md:col-span-2">

           <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 gap-10 ">

        <div className=" border card border-slate-900 rounded-lg hover:shadow-lg">
           <img src={pic} alt="stew" className="w-auto md:h-72  rounded-t-lg object-contain" />
         
            <div className="m-4 text-center font-serif  text-gray-900">
                <span className="font-bold text-2xl "> Altschool React Examination </span>
            <span className="block  text-xl">A simple React website that implements Router, Nested Routes, Context Api...
            </span>
            <span className="text-lg text-gray-300">React</span>
            <div className="m-6">
            <a href="https://altschool-react-examination.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Altschool_React_Examination" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
            
           <img src={pic2} alt="stew" className="w-full md:h-72 object-contain rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl "> Nigho Food Recipes </span>
            <span className="block  text-xl">A simple website that contains different food Recipes.
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">Tailwindcss</button>
            </span>
            <div className="m-6">
            <a href="https://nighofoods.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/nighofoods_webpage" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic3} alt="stew" className="w-full md:h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl "> An Excuse App </span>
            <span className="block  text-xl">A simple webpage that uses an API to fetch excuses
            for different occasions. 
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://excuse-app-01.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/Excuse-App" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>

        <div className=" border border-slate-900 rounded-lg hover:shadow-lg">
        <img src={pic4} alt="stew" className="w-full h-72 object-cover rounded-t-lg" />
           
           <div className="m-4 text-center font-serif text-gray-900">
                <span className="font-bold text-2xl ">  To Do List App </span>
            <span className="block  text-xl">A simple webpage that allows users input different tasks for the day.
            </span>
            <span className="text-lg text-gray-300 m-2">
                <button className="m-3">HTML</button>
                <button className="m-3">CSS</button>
                <button className="m-3">JavaScript</button>
                <button className="m-3">React</button>
            </span>
            <div className="m-6">
            <a href="https://task-app-list.netlify.app/" className="md:m-6 m-2 md:text-2xl">Live Link</a>
            <a href="https://github.com/Mataoseeker/to-do-list" className="md:m-6 m-2 md:text-2xl">GitHub</a>
            </div>
            </div>
            
        </div>


</div>
           </main>
        </div>
     );
}
 
export default Projects;