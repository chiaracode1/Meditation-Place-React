import React, { useState, useEffect, useRef } from 'react';
import Audio1 from '/audio/audio1.mp3';
import Audio2 from '/audio/audio2.mp3';

function Timer() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [selectedAudio, setSelectedAudio] = useState('');
    const audioRef = useRef(null);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    setIsActive(false);
                    alert("Timer expired!");
                } else if (seconds === 0 && (minutes > 0 || hours > 0)) {
                    if (minutes === 0) {
                        setHours(prevHours => prevHours - 1);
                        setMinutes(59);
                    } else {
                        setMinutes(prevMinutes => prevMinutes - 1);
                    }
                    setSeconds(59);
                } else {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }
            }, 1000);


            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, minutes, hours, selectedAudio]);

    const handleStart = () => {
        setIsActive(true);
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handlePause = () => {
        setIsActive(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleReset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setIsActive(false);

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleHourChange = (e) => {
        const value = parseInt(e.target.value);
        setHours(isNaN(value) ? 0 : value);
    };

    const handleMinuteChange = (e) => {
        const value = parseInt(e.target.value);
        setMinutes(isNaN(value) ? 0 : value);
    };

    const handleSecondChange = (e) => {
        const value = parseInt(e.target.value);
        setSeconds(isNaN(value) ? 0 : value);
    };

    const handleAudioChange = (e) => {
        setSelectedAudio(e.target.value);
    };

    return (
        <div className="relative flex items-center justify-center mt-40">
            <div className="inset-0 bg-black bg-opacity-50 flex flex-col items-center p-8 px-8 border-4 max-w-sm w-full z-20">
                <h1 className="mb-4 text-4xl sm:text-5xl text-center text-white-800">Try your best!</h1>
                <p className="mt-4 mb-5 text-black-800 text-center text-justify text-white">
                    Use this timer to schedule your meditation session.
                    You can stop it whenever you want. Close your eyes and relax.
                    Take some time for yourself and start your meditation session.</p>

                {/* FILE AUDIO */}

                <select value={selectedAudio} onChange={handleAudioChange} className="mr-2 p-1 border border-gray-300 mb-5 text-black">
                    <option value="">Select audio file</option>
                    <option value={Audio1}>Audio 1</option>
                    <option value={Audio2}>Audio 2</option>
                </select>

                {selectedAudio && (
                    <audio ref={audioRef} src={selectedAudio}>
                    </audio>
                )}

                {/* TIMER CONTROLS */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={hours}
                            onChange={handleHourChange}
                            className="mr-2 p-1 pr-1 border border-gray-300 w-8 sm:w-12 text-center text-black"
                            min="0"
                            max="24"
                        />
                        <span className="mr-2 text-white">hours</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={minutes}
                            onChange={handleMinuteChange}
                            className="mr-2 p-1 pr-1 border border-gray-300 w-8 sm:w-12 text-center text-black"
                            min="0"
                            max="59"
                        />
                        <span className="mr-2 text-white">minutes</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={seconds}
                            onChange={handleSecondChange}
                            className="mr-2 p-1 pr-1 border border-gray-300 w-8 sm:w-12 text-center text-black"
                            min="0"
                            max="59"
                        />
                        <span className="mr-2 sm:mr-0 text-white">seconds</span>
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={handleStart} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Start</button>
                    <button onClick={handlePause} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Pause</button>
                    <button onClick={handleReset} className="px-4 py-2 bg-blue-500 text-white rounded">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
