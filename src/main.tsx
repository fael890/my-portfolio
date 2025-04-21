import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './root.css'
import './main.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Divider from './components/Divider'
import SectionTitle from './components/SectionTitle'
import { ProjectCard } from './components'
import TechStack from './components/TechStack'
import projectCardData from './data/projectCard.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banner />
    <Divider />

    <div className='flex-1 pt-6 sm:py-[30px] md:py-[20px] lg:py-[60px] justify-items-center'>
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

  </StrictMode>,
)
