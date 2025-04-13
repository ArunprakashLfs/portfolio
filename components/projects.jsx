'use client'
import Link from 'next/link';
import { useState } from 'react';
import JavascriptProject from "../assets/Javascript-seat-booking.png"
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of the project.',
    image: '/images/project1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Javascript seat number',
    description: 'Seat booking ui using vannila javascript',
    image: JavascriptProject,
    link: 'https://arunprakashlfs.github.io/javascript-seat-number/',
  },
];

const Projects = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white p-6 rounded-lg shadow-md transition duration-300 ${
                hoveredProjectId === project.id ? 'shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Project Image */}
              <div className="w-full h-40 overflow-hidden mb-4">
                      <Image
                          src={project.image}
                          alt="Profile Picture"
                          width={70}
                          height={70}
                          objectFit="cover"
                          className="rounded-lg w-full h-40"
                      />
              </div>

              {/* Project Details */}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link href={project.link} className="text-blue-500 hover:underline">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;