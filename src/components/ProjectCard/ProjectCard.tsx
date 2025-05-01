import { ProjectCardProps } from "../../types/ProjectCard";
import { TechStack } from '../TechStack/TechStack'


const ProjectCard = ({ title, description, projectLink, techStackProps, imageName }: ProjectCardProps) => {
    function accessOnClick(projectLink: string) {
        window.open(projectLink, '_blank');
    }

    return (
        <div className="
                flex flex-col grid-cols-1
                sm1:grid sm1:grid-cols-4
                sm2:flex sm2:flex-col sm2:grid-cols-1
                md2:grid md2:grid-cols-4
                border-solid border-[2.5px] rounded-[5px] border-(--primary-color) overflow-hidden
                hover:shadow-[1px_1px_10px] hover:cursor-pointer
            "
            onClick={() => accessOnClick(projectLink)}
        >
            <div className="
                    flex h-[230px] 
                    sm1:col-span-2 sm1:h-full
                    md2:col-span-2 md2:h-full
                "
            >
                <img className='
                        shadow-[1px_1px_3px] object-cover h-[230px] w-full
                        sm1:h-full sm2:h-[300px] md1:h-[300px] md2:h-full
                    ' 
                    src={`/my-portfolio/${imageName}`} alt="" />
            </div>
            <div className="
                    justify-between flex flex-col h-full
                    p-5 gap-y-4 md1:p-10 
                    sm1:col-span-2 md1:col-span-2 
                ">
                <div>
                    <h4 className="text-(length:--heading3-font-size) font-(family-name:--heading-family)">
                        {title}
                    </h4>
                    <p className="text-(length:--body1-font-size) font-(family-name:--body-family) text-justify">
                        {description}
                    </p>
                </div>
                <TechStack
                    iconsSize={techStackProps.iconsSize}
                    iconsNames={techStackProps.iconsNames}
                />
            </div>
        </div>
    );
}

export { ProjectCard };