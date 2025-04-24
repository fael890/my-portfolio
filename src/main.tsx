import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './root.css'
import './main.css'
import { Banner, Divider, Header, ProjectCard, SectionTitle, TechAbility, Footer, CurriculumButton } from './components'
import projectCardData from './data/projectCard.json'
import techAbilities from './data/techAbility.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='hidden sm1:block'>
      <Header/>
    </div>

    <CurriculumButton/>

    <Banner />
    <Divider />

    <div className='flex-1 sm:py-[30px] md:py-[20px] lg:py-[60px] justify-items-center'>
      <SectionTitle title='Projetos' />
    </div>
    <div className='grid justify-between lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-5 md:gap-10 lg:gap-20 sm:px-[20px] md:px-[50px] lg:px-[80px]'>
      {projectCardData.map(data => (
        <ProjectCard
          title={data.title}
          description={data.description}
          projectLink={data.projectLink}
          techStackProps={data.techStackProps}
          imageName={data.imageName}
        />
      ))}
    </div>

    <div className='tech-ability-container my-[60px] pt-[60px] pb-[60px]'>
      <div className='flex-1 justify-items-center lg:mx-[80px] pb-[60px]'>
        <SectionTitle title='Habilidades' />
      </div>
      <div className='flex justify-items-center gap-10 grid-cols-6 lg:mx-[80px] flex-wrap'>
        {techAbilities.map(data => (
          <div>
            <TechAbility
              iconName={data.iconName}
              iconLabel={data.iconLabel}
              techDocLink={data.techDocLink}
            />
          </div>
        ))}
      </div>
    </div>

    <Footer />

    <div className='fixed bottom-0 w-full sm1:hidden'>
      <Header/>
    </div>

  </StrictMode>,
)
