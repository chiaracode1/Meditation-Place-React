import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center mt-40">
            <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-white flex flex-col items-center p-8 px-8 border-4 max-w-sm w-full z-10">
                    <h2 className="text-white text-4xl sm:text-6xl font-bold mb-4 text-center">About Me</h2>
                    <p className="text-white p-4 text-center text-justify">
                        My name is Chiara, I graduated in Languages in the Information Society and participated in the Erasmus program in Lisbon.
                        I am currently attending an online study course with start2impact University as Front-End Development.
                        This is my react project, a meditation website with a programmable timer. Hope you like it and enjoy.
                        For any information, click on "Contact" button! Thank you.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default About;

