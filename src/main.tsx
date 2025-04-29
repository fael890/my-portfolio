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
      <Header />
    </div>

    <CurriculumButton />

    <Banner />
    <Divider />

    <div className='flex-1 px-[20px] py-[30px] sm1:px-[40px] sm1:py-[30px] md1:px-[80px] md1:py-[40px] justify-items-center'>
      <SectionTitle title='Projetos' />
    </div>
    <div className='
        grid grid-cols-1 justify-between gap-5 px-[20px]
        sm1:grid-cols-1 sm1:gap-10 sm1:px-[40px]
        sm2:grid-cols-2 sm2:gap-10 sm2:px-[40px]
        min-[750px]:grid-cols-1 min-[750px]:grid-cols-1
        md1:grid-cols-2 md1:gap-20 md1:px-[80px]  
      '
    >
      {projectCardData.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          description={data.description}
          projectLink={data.projectLink}
          techStackProps={data.techStackProps}
          imageName={data.imageName}
        />
      ))}
    </div>

    <div className='bg-(--dark-bg-color) mt-[30px] md1:mt-[40px] px-[20px] py-[30px] sm1:px-[40px] sm1:py-[30px] md1:px-[80px] md1:py-[40px]'>
      <div className='flex-1 justify-items-center pb-[30px] sm1:pb-[30px] md1:pb-[40px]'>
        <SectionTitle title='Habilidades' />
      </div>
      <div className='grid max-[400px]:grid-cols-2 grid-cols-3 sm1:grid-cols-5 md1:grid-cols-6 justify-items-center gap-5 sm1:gap-10 md1:gap-20'>
        {techAbilities.map((data, index) => (
          <TechAbility
            key={index}
            iconName={data.iconName}
            iconLabel={data.iconLabel}
            techDocLink={data.techDocLink}
          />
        ))}
      </div>
    </div>

    <div className='mt-[60px] md1:mt-[80px]'>
      <Footer />
    </div>

    <div className='fixed bottom-0 w-full sm1:hidden'>
      <Header />
    </div>

  </StrictMode>,
)
