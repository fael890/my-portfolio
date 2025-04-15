import './Banner.css';

export default function Banner() {
    return (
        <div className='banner-container grid grid-cols-12'>
            <div className='col-span-6 justify-items-start content-center'>
                <h1 className='heading-font1'>
                    Desenvolvedor Fullstack
                </h1>
                <p className='body-font1'>
                    Meu nome é Rafael Capodeferro, sou desenvolvedor Fullstack. 
                    O que mais me encanta na área de tecnologia é a possibilidade de propor 
                    soluções que resolvam problemas de empresas e pessoas. Para isso, estou 
                    sempre disposto a aprender e me adaptar rapidamente a novas tecnologias e metodologias, 
                    buscando atender da melhor forma às necessidades de cada projeto.
                </p>
            </div>
            <div className='col-span-6 justify-items-end content-end'>
                <img src="/public/banner_character_sizecut.png" alt="" />
            </div>  
        </div>
    );
}