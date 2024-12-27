"use client"
const { createContext, useContext, useState, useEffect } = require("react");

const themes = [
  {
      bgColor: 'bg-blue-500',
      fgColor: 'text-blue-500',
      border: 'border-blue-500',
      fill: 'fill-blue-500',
      image: ''
  },
  {
      bgColor: '',
      fgColor: 'text-white',
      border: 'border-white',
      fill: 'fill-white',
      image: '/bird.png'
  },
  {
      bgColor: 'bg-green-500',
      fgColor: 'text-green-500',
      border: 'border-green-500',
      fill: 'fill-green-500',
      image: ''
  },
  {
      bgColor: '',
      fgColor: 'text-white',
      border: 'border-white',
      fill: 'fill-white',
      image: '/elephant.png'
  },
  {
      bgColor: 'bg-yellow-500',
      fgColor: 'text-yellow-500',
      border: 'border-yellow-500',
      fill: 'fill-yellow-500',
      image: ''
  },
  {
      bgColor: '',
      fgColor: 'text-white',
      border: 'border-white',
      fill: 'fill-white',
      image: '/nature.jpg'
  },
  {
      bgColor: '',
      fgColor: 'text-white',
      border: 'border-white',
      fill: 'fill-white',
      image: '/colors.jpg'
  },
];


const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentThemeIndex((prev) => (prev + 1) % themes.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    const currentTheme = themes[currentThemeIndex];
  
    return (
      <ThemeContext.Provider value={{ currentTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export const useTheme = () => useContext(ThemeContext);