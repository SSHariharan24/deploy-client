import React from "react";
import {
  SiCloudinary,
  SiRapid,
  SiReact,
  SiNuxtdotjs,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiCss3,
  SiTailwindcss,
  SiGraphql,
  SiTypescript,
  SiSocketdotio,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiDocker,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

/**
 * Maps icon key strings (stored in the database) to actual React icon components.
 * When adding a new tech, just add its key here — no need to touch Projects.jsx.
 */
const iconMap = {
  react: <SiReact />,
  nodejs: <SiNodedotjs />,
  mongodb: <SiMongodb />,
  tailwindcss: <SiTailwindcss />,
  graphql: <SiGraphql />,
  typescript: <SiTypescript />,
  css3: <SiCss3 />,
  bootstrap: <SiBootstrap />,
  cloudinary: <SiCloudinary />,
  rapid: <SiRapid />,
  nuxtjs: <SiNuxtdotjs />,
  socketio: <SiSocketdotio />,
  express: <SiExpress />,
  redux: <SiRedux />,
  firebase: <SiFirebase />,
  docker: <SiDocker />,
  prisma: <SiPrisma />,
  postgresql: <SiPostgresql />,
};

/**
 * Get an icon component from a key string.
 * Returns a fallback code icon if the key is not found.
 */
export const getIcon = (iconKey) => {
  return iconMap[iconKey?.toLowerCase()] || <FaCode />;
};

/**
 * Returns all available icon keys (for admin panel dropdowns).
 */
export const availableIcons = Object.keys(iconMap).map((key) => ({
  key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  icon: iconMap[key],
}));

export default iconMap;
