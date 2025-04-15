export default function ProjectCard(props: {title: string, description: string, imageName: string}){
    return (
        <div className="project-card-container grid grid-cols-12 gap-[20px] content-center">
            <div className='col-span-6 grid gap-y-[8px] justify-center ' >
                <h4 className="heading-font4">
                    { props.title }
                </h4>
                <p className="body-font2">
                    { props.description }
                </p>
                <img className='techstack' src='' alt="" />
            </div>
            <div className='col-span-6 flex items-center justify-center'>
                <img className='project-image' src={`/public/${props.imageName}`} alt="" />
            </div>

        </div>
    );
} 