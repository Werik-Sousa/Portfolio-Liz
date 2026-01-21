//  icons
import {
  FiInstagram,
  FiLinkedin,
  FiFigma,
} from 'react-icons/fi';
import { SlSocialBehance } from "react-icons/sl";


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

