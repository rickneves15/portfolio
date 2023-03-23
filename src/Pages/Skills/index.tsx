import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import MotionWrap from "../../Components/MotionWrap";
import Wrapper from "../../Components/Wrapper";

import HTML5Icon from "./../../../public/icons/html5.svg";
import CSS3Icon from "./../../../public/icons/css3.svg";
import SASSIcon from "./../../../public/icons/sass.svg";
import BootstrapIcon from "./../../../public/icons/bootstrap.svg";
import TailwindCssIcon from "./../../../public/icons/tailwindcss.svg";
import PHPIcon from "./../../../public/icons/php.svg";
import JavascriptIcon from "./../../../public/icons/javascript.svg";
import TypescriptIcon from "./../../../public/icons/typescript.svg";
import JqueryIcon from "./../../../public/icons/jquery.svg";
import LaravelIcon from "./../../../public/icons/laravel.svg";
import AdonisJsIcon from "./../../../public/icons/adonisjs.svg";
import NestIcon from "./../../../public/icons/nestjs.svg";
import ReactIcon from "./../../../public/icons/react.svg";
import AngularJsIcon from "./../../../public/icons/angularjs.svg";
import MysqlIcon from "./../../../public/icons/mysql.svg";
import MongoDBIcon from "./../../../public/icons/mongodb.svg";
import GitIcon from "./../../../public/icons/git.svg";
import githubIcon from "./../../../public/icons/github.svg";
import DockerIcon from "./../../../public/icons/docker.svg";
import JiraIcon from "./../../../public/icons/jira.svg";

const skills = [
  { title: "HTML5", icon: HTML5Icon },
  { title: "CSS3", icon: CSS3Icon },
  { title: "SASS", icon: SASSIcon },
  { title: "Bootstrap", icon: BootstrapIcon },
  { title: "TailwindCss", icon: TailwindCssIcon },
  { title: "PHP", icon: PHPIcon },
  { title: "Javascript", icon: JavascriptIcon },
  { title: "Typescript", icon: TypescriptIcon },
  { title: "Jquery", icon: JqueryIcon },
  { title: "Laravel", icon: LaravelIcon },
  { title: "AdonisJs", icon: AdonisJsIcon },
  { title: "NestJs", icon: NestIcon },
  { title: "React", icon: ReactIcon },
  { title: "AngularJs", icon: AngularJsIcon },
  { title: "Mysql", icon: MysqlIcon },
  { title: "MongoDB", icon: MongoDBIcon },
  { title: "Git", icon: GitIcon },
  { title: "Github", icon: githubIcon },
  { title: "Docker", icon: DockerIcon },
  { title: "Jira", icon: JiraIcon },
];
console.log(skills.length);

const Skills = () => (
  <MotionWrap>
    <Flex
      flex="1 1"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <Heading
        size="2xl"
        fontWeight="extrabold"
        color="title"
        textTransform="capitalize"
      >
        Habilidades
      </Heading>
      <Flex
        flexWrap="wrap"
        flex="1 1"
        justifyContent="center"
        alignItems="center"
        mt="16"
      >
        {skills.map((skill, index) => (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            m="4"
            key={index}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              width="24"
              height="24"
              background="lightGray"
              borderRadius="50%"
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                objectFit="cover"
                width="70%"
                height="70%"
                borderRadius="1rem"
              />
            </Flex>
            <Heading size="sm" color="title" mt="2">
              {skill.title}
            </Heading>
          </Flex>
        ))}
      </Flex>
    </Flex>
  </MotionWrap>
);

export default Wrapper({
  Component: Skills,
  idName: "skills",
});
