"use client"
const { createContext, useContext, useState, useEffect } = require("react");

const themes = [
  {
      bgColor: 'bg-blue-900',
      fgColor: 'text-blue-900',
      border: 'border-blue-900',
      fill: 'fill-blue-900',
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
      bgColor: 'bg-green-900',
      fgColor: 'text-green-900',
      border: 'border-green-900',
      fill: 'fill-green-900',
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
      bgColor: 'bg-yellow-900',
      fgColor: 'text-yellow-900',
      border: 'border-yellow-900',
      fill: 'fill-yellow-900',
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