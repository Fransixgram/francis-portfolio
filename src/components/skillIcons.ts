// Logos for the Tech Stack tiles, taken from the free "simple-icons" package.
//
// The key is the skill name exactly as written in src/data/skills.ts.
// A skill with no entry here (BullMQ and AWS today) shows a letter badge
// instead, so adding a skill to skills.ts never breaks the page.
//
// To add a logo: import it below (names look like siReact, siDocker) and add
// one line to the object. Browse names at https://simpleicons.org

import {
  siCss,
  siDocker,
  siExpo,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siMongodb,
  siMysql,
  siNestjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siRedis,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'

export const skillIcons: Record<string, SimpleIcon> = {
  'Node.js': siNodedotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  React: siReact,
  'React Native': siReact,
  Expo: siExpo,
  NestJS: siNestjs,
  Express: siExpress,
  PHP: siPhp,
  Laravel: siLaravel,
  MongoDB: siMongodb,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  HTML5: siHtml5,
  CSS3: siCss,
}
