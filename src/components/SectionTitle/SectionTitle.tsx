import './SectionTitle.css';

const SectionTitle = (props: {title: string} ) => {
    return (
        <div className='section-title-container flex items-center justify-center'>
            <h2 className='heading-font2'>{props.title}</h2>
        </div>
    );
}

export { SectionTitle };