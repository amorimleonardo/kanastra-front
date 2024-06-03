import { FaFileUpload, FaFolderOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="bg-gray-800 text-white w-64 py-4 flex flex-col">
            <Link to="/" className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaFileUpload className="mr-2" />
                <span>Enviar Arquivo</span>
            </Link>
            <Link to="/arquivos-enviados" className="p-2 hover:bg-gray-700 rounded flex items-center">
                <FaFolderOpen className="mr-2" />
                <span>Arquivos Enviados</span>
            </Link>
        </nav>
    );
};
  

export default Menu;
