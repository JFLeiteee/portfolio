import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Projects() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/JFLeiteee/repos')
        .then((response) => response.json())
        .then(
          (res)=>{
            setData(res);
          }
        )
    }, [])

    return(
        <div className="projects-container">
            <h1>PROJECTS</h1>
            <div className="projects">
                {
                    data.map((item) => {
                        if(item.id == 594456373 || item.id == 685754199 || item.id == 735131992){
                            return(
                                <div className="project-card">
                                    <h2 className="project-name">{item.name}</h2>
                                    <p className="project-description">{item.description}</p>
                                    <a href={item.html_url} className="project-link-github">See on GitHub</a>
                                    <a href={item.homepage} className="project-link-project">See Project</a>
                                </div>
                            )
                        }}
                    )
                }
            </div>
        </div>
    )
}