import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope } from '@fortawesome/free-solid-svg-icons';
import Profileimg from "../assets/Profileimg.jpeg"

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Profile Picture */}
                <div className="md:w-1/4 mb-8 md:mb-0 md:mr-8">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src={Profileimg}
                            alt="Profile Picture"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* About Content */}
                <div className="md:w-3/4">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        I am a full-stack developer with expertise in JavaScript, React, Node.js, and more.
                        I love creating user-friendly interfaces and solving complex problems with clean code.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Outside of coding, I enjoy reading, hiking, and exploring new technologies.
                    </p>

                    <div className="flex space-x-4 mt-4">
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/arunprakash7" className='w-8 h-8 bg-gray-300 text-white p-2 rounded-full hover:bg-black transition duration-300' target="_blank" rel="noopener noreferrer">
                           
                                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                           
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/your-github" className='w-8 h-8 bg-gray-300 text-white p-2 rounded-full hover:bg-black transition duration-300' target="_blank" rel="noopener noreferrer">
                            
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                           
                        </a>

                        {/* Email */}
                        <a href="mailto:your-email@example.com" className='w-8 h-8 bg-gray-300 text-white p-2 rounded-full hover:bg-black transition duration-300'>
                            
                                <FontAwesomeIcon icon={fasEnvelope} size="lg" />
                           
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;