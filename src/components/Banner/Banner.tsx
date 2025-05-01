const Banner = () => {
    return (
        <div className='
                bg-(--dark-bg-color) w-full h-full grid grid-cols-1 md1:grid-cols-2  
                pt-[50px] px-[20px] gap-[20px]
                md1:pt-[150px] md1:px-[80px]
            '
        >
            <div className='
                    col-span-1 justify-items-center text-center
                    md1:justify-items-start md1:content-center md1:text-justify
                '
            >   
                <h1 className="text-(length:--heading3-font-size) sm1:text-(length:--heading1-font-size) font-(family-name:--heading-family) text-(--primary-color) max-w-[700px]">
                    Desenvolvedor Fullstack
                </h1>
                
                <p className='text-(length:--body1-font-size) font-(family-name:--body-family) text-(--white-color) max-w-[700px]'>
                    Meu nome é Rafael Capodeferro, sou desenvolvedor Fullstack.
                    O que mais me encanta na área de tecnologia é a possibilidade de propor
                    soluções que resolvam problemas de empresas e pessoas. Para isso, estou
                    sempre disposto a aprender e me adaptar rapidamente a novas tecnologias e metodologias,
                    buscando atender da melhor forma às necessidades de cada projeto.
                </p>
            </div>
            <div className='
                    col-span-1 justify-items-center
                    md1:justify-items-end md1:content-end
                '
            >
                <img className="w-[400px] md1:max-w-[750px] md1:w-[500px]" src="./my-portfolio/banner_character_sizecut.png" alt="" />
            </div>
        </div>
    );
}

export { Banner };