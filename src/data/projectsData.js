import one from '../assets/png/proomptr.png'
import two from '../assets/png/scootly.png'
import three from '../assets/png/sidebar.png'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Proomptr',
        projectDesc: 'A lightweight application to enhance workflow by providing prompts to OpenAI GPT within a keypress and a small window',
        tags: ['Electron.js', 'JavaScript', 'OpenAI API'],
        code: 'https://github.com/johnamii/Proomptr',
        demo: 'https://github.com/johnamii/Proomptr',
        image: one
    },
    {
        id: 2,
        projectName: 'Scootly',
        projectDesc: 'A scooter rental app for iOS and Android that allows user to use / rent out scooters via messaging and posts.',
        tags: ['React Native', 'Firebase'],
        code: 'https://github.com/scootly',
        demo: 'https://github.com/scootly',
        image: two
    },
    {
        id: 3,
        projectName: 'react-smart-sidebar',
        projectDesc: 'The sidebar you see to the left! This is a portable react component you can use to organize your website',
        tags: ['TypeScript', 'npm', 'Rollup'],
        code: 'https://github.com/johnamii/personal-website',
        demo: 'https://github.com/johnamii/personal-website',
        image: three
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/