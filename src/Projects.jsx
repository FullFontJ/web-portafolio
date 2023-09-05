import { useEffect, useState } from 'react';
import data from './datos.json';

function Projects(){
    const [projects, setProjects] = useState([]);
    const [typeProject, setTypeProject] = useState("");
    const [filterCriteria, setFilterCriteria] = useState([]);


    useEffect(() => {
        setProjects(data);
        setTypeProject("all");
        setFilterCriteria(data);
    }, []);

    const applyFilter = (filterType) => { 
        setTypeProject(filterType);
        if(filterType == "all"){
            setFilterCriteria(projects)
        }else{
            const filtered = projects.filter( project =>
                project.tecnologia.toLowerCase().includes(filterType.toLowerCase())
            );
            setFilterCriteria(filtered);
        }
        
    }

    return(<>
    
    <main className="flex flex-col items-center text-white my-24" id="project" >
        <h3 className="text-5xl mb-10 font-bold uppercase">Proyectos</h3>

        
            <ul className="flex gap-4 my-5 text-lg cursor-pointer ">
                <li className={`${typeProject=="all" ? "font-extrabold text-[#E67F50]" : "font-light"}`} onClick={() => applyFilter("all")}>Todos</li>
                <li className={`${typeProject=="java" ? "font-extrabold text-[#E67F50]" : "font-light"}`} onClick={() => applyFilter("java")}>Java</li>
                <li className={`${typeProject=="react" ? "font-extrabold text-[#E67F50]" : "font-light"}`} onClick={() => applyFilter("react")}>React</li>
            </ul>

        <div className="w-5/6 grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-6 mt-5">
        {
            filterCriteria.map((project, index) => (
                <Card key={index} image={project.urlImagen} title={project.title} source={project.source}  link={project.paginaUrl} />
            ))
        }
        </div>
    </main>
    </>);
}

export default Projects;



const Card = ({image, title, source, link}) => {
    return (<>
    <div className="w-full">
        <div className="relative w-full">
        <img src={image} alt={title} className="w-full" />
        <div className="absolute bottom-4 left-3 flex gap-1"> 
        <a className="bg-[#E67F50] p-1 text-white rounded-md cursor-pointer" href={source} target="_blank">Source</a>
            
            {link ?  <a className="bg-[#E67F50] p-1 text-white rounded-md cursor-pointer" href={link} target="_blank">Pagina</a> : <div></div> }
            
        </div>
        </div>
        <p className="text-base mt-3 capitalize">{title}</p>
    </div> 
    </>);
} 