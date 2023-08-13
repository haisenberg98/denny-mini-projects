import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/images/Pricing Cards.png';
import image2 from '../assets/images/Product Modal.png';
import image3 from '../assets/images/Subscribe Card.png';
import image4 from '../assets/images/details.png';
import Search from '../components/Search';

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

function Home() {
  return (
    <>
      <Search />
      {/* Main */}
      <main className='grid md:grid-cols-2 gap-4 justify-center mt-8'>
        {/* Projects */}
        <ProjectItems
          image={image4}
          link={'https://haisenberg98.github.io/denny-mini-cart-project/'}
          projectName='Product Details'
          projectDesc='React Project'
        />
        <ProjectItems
          image={image1}
          link={'https://haisenberg98.github.io/pricing-cards/'}
          projectName='Pricing Cards'
          projectDesc='TailwindCSS Project'
        />
        <ProjectItems
          image={image2}
          link={'https://haisenberg98.github.io/product-modal/'}
          projectName='Product Modal'
          projectDesc='TailwindCSS Project'
        />
        <ProjectItems
          image={image3}
          link={'https://haisenberg98.github.io/subscribe-card/'}
          projectName='Subscribe Card'
          projectDesc='TailwindCSS Project'
        />
      </main>
    </>
  );
}

export default Home;
