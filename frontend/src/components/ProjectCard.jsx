export default function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div  className="
                 
              backdrop-blur-sm 
              bg-blue/900 
              border border-blue/90
              rounded-lg
             p-4             
              w-96
              h-50
            text-center
             mx-auto
              shadow-lg
              transition-all
              hover:bg-sky-200
              hover:shadow-md
              hover:shadow-gray-500">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        <span className="font-medium">Tech:</span> {tech}
      </p>

      <div className="mt-4 flex gap-4 items-center justify-center">
        <a href={github} target="_blank" className="text-yellow-600">
          GitHub
        </a>
        <a href={live} target="_blank" className="text-green-600">
          Demo
        </a>
      </div>
    </div>
  );
}
 