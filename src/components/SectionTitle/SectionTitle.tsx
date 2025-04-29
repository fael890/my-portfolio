const SectionTitle = (props: {title: string} ) => {
    return (
        // <div className='section-title-container flex items-center justify-center'>
        //     <h2 className='heading-font2'>{props.title}</h2>
        // </div>
        <div className="
                flex bg-[url(/public/section-title.svg)] bg-no-repeat bg-center items-center justify-center
                bg-contain h-[80px] w-[250px] sm1:w-full sm1:h-[100px] 
            "
        >
            <h2 className='
                    text-(--white-color)
                    text-(length:--heading3-font-size) font-(family-name:--heading-family)
                    sm1:text-(length:--heading2-font-size) sm1:font-(family-name:--heading-family)
                '
            >{props.title}</h2>
        </div>
    );
}

export { SectionTitle };