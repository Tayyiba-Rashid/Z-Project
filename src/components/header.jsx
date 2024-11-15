import { FaSignOutAlt } from 'react-icons/fa';


const Header = ({ onSignOut }) => {



  return (
    <header className="w-full bg-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Zimo Gallery</h1>
        <button
          onClick={onSignOut}
          className="flex items-center text-white font-semibold text-sm px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
        >
          <FaSignOutAlt className="mr-2" /> Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
