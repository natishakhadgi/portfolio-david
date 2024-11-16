# Created with React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Uploading Assets
- Images
  - Upload assets to `src/assets/images`. Please be sure to import the file in the respective folder.
  - Import image to correct file. Ex: `src/assets/experience.js` or `src/assets/projects.js`.
  - Add imported image to correct object.
    - Experience: Logo (circular): `logo`. Background image: `banner`.
    - Projects: Upload list of images to `images`. The first image serves as thumbnail.
- Information (Experience, Projects, etc).
## Experience:
Can add multiple roles to one experience. Alternatively, you can have multiple objects from the same company if you'd like to seperate dates.   
  ```
  import logo from '../assets/images/experience/logo.png';
  import banner from '../assets/images/experience/banner.png';
  {
    title: "Title of Company",
    logo: logo,
    banner: banner,
    roles:  [
      {
        role: "Title of First Role",
        date: "October 2022 - July 2023"
      },
      {
        role: "Title of Second Role",
        date: "Date"
      }
    ]
  },
  ```
## Projects:
Can add multiple roles to one experience. Alternatively, you can have multiple objects from the same company if you'd like to seperate dates.   
  ```
  import thumbnail from '../assets/images/projects/projectName/thumbnail.png';
  import img from '../assets/images/projects/projectName/img-1.png';

  {
    title: 'Project Title',
    desc: "Project description",
    links: [
      {
        type: 'itch',
        url: 'https://itch.com'
      },
      {
        type: 'youtube',
        url: 'https://youtube.com'
      }
    ],
    images: [thumbnail, img]
  }
  ```
# Updating Information
Can update most information in `src/assets/constants.js`.
  - Links (links that appear under your bio): `LINKS`
  - Project Experience (your list of project experience skills): `PROJ_MAN`
  - Software (your list of software skills): `SOFTWARE`
  - Certificates (your list of obtained certificates): `CERTIFICATES` ***Note: Upload Certificate images here***

