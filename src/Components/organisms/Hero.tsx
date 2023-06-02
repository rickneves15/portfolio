import Image from 'next/image'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

import { Quote } from '../molecules/Quote'
import { ListSkills } from '../molecules/ListSkills'

const skills: string[] = [
  'HTML5',
  'CSS3',
  'SASS',
  'Bootstrap',
  'TailwindCss',
  'PHP',
  'Javascript',
  'Typescript',
  'Jquery',
  'Laravel',
  'AdonisJs',
  'NestJs',
  'React',
  'AngularJs',
  'Mysql',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Clean Code',
  'Figma',
  'Github',
  'Docker',
  'Jira',
  'VS Code',
]

/* eslint-disable react/no-unescaped-entities */
export function Hero() {
  return (
    <div className="mt-32 flex flex-col gap-y-6">
      <p className="text-sm font-light">Hey, I'm</p>
      <h1 className="title font-alt text-8xl font-medium tracking-[1.25rem]">
        Richard Neves
      </h1>
      <div className="flex w-full items-center gap-x-32">
        <p className="max-w-[60%]  text-justify text-lg font-light leading-10">
          I am a Software Engineer based Brazil , versatile and fun-loving,
          passionate about turning ideas into reality. With 6 years of
          experience in software development, I have worked on challenging
          projects across various industries. With a creative and laid-back
          mindset, I love finding innovative solutions to complex problems. My
          collaborative approach and adaptability allow me to work efficiently
          in teams and achieve exceptional results. Furthermore, I stay
          up-to-date with the latest technologies and industry trends, ensuring
          that my skills remain relevant and up-to-date. My areas of expertise
          include software development, microservices, data engineering, and
          automated testing.
        </p>

        <div className="flex h-96 w-96">
          <Image
            className="rounded-[100%] border-2 border-gray-900 object-cover dark:border-0"
            src="/images/profile.png"
            loading="lazy"
            width="500"
            height="500"
            alt="profile"
          />
        </div>
      </div>
      <div className="mb-32 flex items-center gap-x-4 text-justify text-2xl font-light">
        <p>Say hi</p>
        <ArrowLongRightIcon className="h-6 w-6" />
      </div>
      <div className="flex w-full">
        <ListSkills skills={skills} />
        <Quote
          text="Success is the sum of small efforts repeated day after day."
          by="Robert Collier"
        />
      </div>
    </div>
  )
}
