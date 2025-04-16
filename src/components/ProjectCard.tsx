import { ProjectCardProps } from "../types/ProjectCard";
import TechStack from './TechStack'


export default function ProjectCard({ title, description, techStackProps, imageName }: ProjectCardProps){
    return (
        <div className="project-card-container grid grid-cols-12 gap-[20px] content-center">
            <div className='col-span-6 grid gap-y-[8px] justify-center ' >
                <h4 className="heading-font4">
                    { title }
                </h4>
                <p className="body-font2">
                    { description }
                </p>
                <TechStack iconsSize={techStackProps.iconsSize} iconsNames={techStackProps.iconsNames}/>
            </div>
            <div className='col-span-6 flex items-center justify-center'>
                <img className='project-image' src={`/public/${imageName}`} alt="" />
            </div>
        </div>
    );
} 