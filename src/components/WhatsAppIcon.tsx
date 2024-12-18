
import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/yourwhatsappphonenumber" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;
