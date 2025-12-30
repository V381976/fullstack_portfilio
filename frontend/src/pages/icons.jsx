import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiGit, SiGithub, SiMongodb, SiTailwindcss, SiNextdotjs} from "react-icons/si";

export default function Icons() {
  return (
    <div className="flex flex-wrap gap-6 justify-center m-4 text-6xl">
      <FaHtml5 className="text-orange-500" />
      <FaCss3Alt className="text-blue-500" />
      <FaJs className="text-yellow-400" />
      <FaNodeJs className="text-green-600" />
      <FaReact className="text-cyan-400" />
      <SiNextdotjs className="text-slate-900" />
      <SiTailwindcss className="text-sky-400" />
      <SiMongodb className="text-green-500" />
      <SiGithub  className="text-slate-900"/>
      <SiGit className="text-orange-600" />
    </div>
  );
}
