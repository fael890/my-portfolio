import { ProjectCardProps } from "../../types/ProjectCard";
import { TechStack } from '../TechStack/TechStack'


const ProjectCard = ({ title, description, projectLink, techStackProps, imageName }: ProjectCardProps) => {
    function accessOnClick(projectLink: string) {
        window.open(projectLink, '_blank');
    }

    return (
        <div className="project-card-container grid grid-cols-4" onClick={() => accessOnClick(projectLink)}>
            <div className="col-span-2 sm:p-5 md:p-10 lg:p-15">
                <div className="flex flex-col gap-y-4 h-full justify-between">
                    <div>
                        <h4 className="heading-font3">
                            {title}
                        </h4>
                        <p className="body-font1 text-justify">
                            {description}
                        </p>
                    </div>
                    <div>
                        <TechStack
                            iconsSize={techStackProps.iconsSize}
                            iconsNames={techStackProps.iconsNames}
                        />
                    </div>
                </div>
            </div>
            <div className="mask-image flex col-span-2">
                <img className='project-image w-full' src={`/${imageName}`} alt="" />
            </div>
        </div>
    );
}

export { ProjectCard };