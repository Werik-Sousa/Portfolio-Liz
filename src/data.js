//  icons
import {
  FiInstagram,
  FiLinkedin,
  FiFigma
} from 'react-icons/fi';
import { SlSocialBehance } from "react-icons/sl";

// gallery / lab backgrounds
import Gal1 from './assets/img/galery/poster1.webp';
import Gal2 from './assets/img/galery/poster2.webp';
import Gal3 from './assets/img/galery/poster3.webp';
import Gal4 from './assets/img/galery/poster4.webp';
import Gal5 from './assets/img/galery/poster5.webp';
import Gal9 from './assets/img/galery/poster6.webp';

import Gal6 from './assets/lab/meus/p&b.png';
import Gal8 from './assets/lab/meus/rosa.png';
import Gal10 from './assets/lab/meus/black.png';
import Gal11 from './assets/lab/meus/white.png';

// projects images
import Project1 from './assets/img/projects/assaltos.png';
import Project2 from './assets/img/projects/batidas.png';
import Project3 from './assets/img/projects/bilhete.png';
import Project4 from './assets/img/projects/unico.png';
import Project5 from './assets/img/projects/kicks.png';
import Project6 from './assets/img/projects/key.png';
import Project7 from './assets/img/projects/igor.png';
import Project8 from './assets/img/projects/capa.png';



// navigation
export const navigation = [
  {
    name: 'Projetos',
    href: 'projetos',
    activeClass: 'active-projects', // azul
  },
  {
    name: 'Posters',
    href: 'posters',
    activeClass: 'active-posters', // amarelo
  },
  {
    name: 'TASS',
    href: 'home',
    activeClass: 'active-home', // branco
  },
  {
    name: 'Sobre mim',
    href: 'about',
    activeClass: 'active-about', // vermelho
  },
  {
    name: 'Contato',
    href: 'contact',
    activeClass: 'active-contact', // roxo
  },
];

// social
export const social = [
  {
    icon: <SlSocialBehance />,
    href: 'https://www.behance.net/tassiascheiner/moodboards',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/tassia.liz/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/t%C3%A1ssia-liz-scheiner-4a826833b/',
  },
  {
    icon: <FiFigma />,
    href: 'https://www.instagram.com/tassia.liz/',
  },
];

// projects
export const projectsGrid = [
  {
    id: 1,
    title: 'App FBC',
    year: "2025",
    link: '#',
    images: [Project1, Project2],
  },
  {
    id: 2,
    title: 'App Bilhete Único',
    year: "2025",
    link: '#',
    images: [Project3, Project4],
  },
  {
    id: 3,
    title: 'Kicks Key',
    year: "2025",
    link: '#',
    images: [Project5, Project6],
  },
  {
    id: 3,
    title: 'àlbum IGOR',
    year: "2025",
    link: '#',
    images: [Project7, Project8],
  },
];

// lab backgrounds
export const labBackgrounds = [
  {
    id: 1,
    image: Gal1,
    name: 'Studio',
  },
  {
    id: 2,
    image: Gal2,
    name: 'Nature',
  },
  {
    id: 3,
    image: Gal3,
    name: 'Urban',
  },
  {
    id: 4,
    image: Gal4,
    name: 'Urban',
  },
  {
    id: 9,
    image: Gal9,
    name: 'Urban',
  },
  {
    id: 5,
    image: Gal5,
    name: 'Urban',
  },
  {
    id: 6,
    image: Gal6,
    name: 'preto e branco',
  },
  {
    id: 8,
    image: Gal8,
    name: 'casa rosa',
  },
  {
    id: 10,
    image: Gal10,
    name: 'black',
  },
  {
    id: 11,
    image: Gal11,
    name: 'white',
  }
];
