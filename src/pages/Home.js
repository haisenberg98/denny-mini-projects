import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/Pricing Cards.png';
import image2 from '../assets/images/Product Modal.png';
import image3 from '../assets/images/Subscribe Card.png';
import image4 from '../assets/images/details.png';
import image5 from '../assets/images/reactboilerplate.png';
import image6 from '../assets/images/recipehub.png';

const NewTabLink = ({ to, children }) => (
  <Link
    to={to}
    target='_blank'
    onClick={event => {
      event.preventDefault();
      window.open(to, '_blank');
    }}
  >
    {children}
  </Link>
);

function ProjectItems(props) {
  return (
    <NewTabLink to={props.link}>
      <div className='relative group'>
        <img src={props.image} alt='img' srcset='' />
        <div className='grid-item-description'>
          <div>
            <p>{props.projectName}</p>
            <p>{props.projectDesc}</p>
          </div>
          <FontAwesomeIcon icon={faBookBookmark} className='text-customWhite' />
        </div>
      </div>
    </NewTabLink>
  );
}

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className='flex flex-col justify-between mt-10 px-2 md:flex-row'>
      <div className='flex self-center space-x-2 justify-between'>
        <input
          type='text'
          className='px-2 border-b-2 border-b-[#9CA3A6] bg-[#CCD4D9] focus:outline-none'
          placeholder='Search..'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <button className='p-4 mt-8 bg-[#545959] border text-[#CCD4D9] rounded-lg hover:bg-[#CCD4D9] transistion-all duration-150 hover:border-[#545959] hover:text-[#545959] md:mt-0'>
        Upload
      </button>
    </div>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      image: image1,
      name: 'Pricing Cards',
      link: 'https://haisenberg98.github.io/pricing-cards/',
      description: 'TailwindCSS Project',
      timestamp: '2023-04-18', // example timestamp
    },
    {
      id: 2,
      image: image2,
      name: 'Product Modal',
      link: 'https://haisenberg98.github.io/product-modal/',
      description: 'TailwindCSS Project',
      timestamp: '2023-05-18', // example timestamp
    },
    {
      id: 3,
      image: image3,
      name: 'Subscribe Card',
      link: 'https://haisenberg98.github.io/subscribe-card/',
      description: 'TailwindCSS Project',
      timestamp: '2023-06-18', // example timestamp
    },
    {
      id: 4,
      image: image4,
      name: 'Product Details',
      link: 'https://haisenberg98.github.io/denny-mini-cart-project/',
      description: 'React Project',
      timestamp: '2023-07-18', // example timestamp
    },
    {
      id: 5,
      image: image5,
      name: 'React Boilerplate',
      link: 'https://haisenberg98.github.io/react-boilerplate/',
      description: 'React Boilerplate and TailwindCSS ready to use on Github',
      timestamp: '2023-08-18', // example timestamp
    },
    {
      id: 6,
      image: image6,
      name: 'Recipe Hub',
      link: 'https://haisenberg98.github.io/recipe-hub/',
      description:
        'Recipe card with Spoonacular API with sorted data in Nutrient section',
      timestamp: '2023-09-18', // example timestamp
    },
  ];

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  const projectsToDisplay = searchTerm
    ? sortedProjects.filter(
        project =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sortedProjects;

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Projects */}
      {projectsToDisplay.length > 0 ? (
        <main className='grid min-h-screen md:grid-cols-2 gap-4 justify-center mt-8'>
          {projectsToDisplay.map(project => (
            <ProjectItems
              image={project.image}
              link={project.link}
              projectName={project.name}
              projectDesc={project.description}
            />
          ))}
        </main>
      ) : (
        <div className='flex justify-center mt-16 min-h-screen'>
          No project found.
        </div>
      )}
    </>
  );
}

export default Home;
