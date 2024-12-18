
import { BsGiftFill } from "react-icons/bs";

const RewardsButton = () => {
  return (
    <a
      href="/rewards" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-black text-white p-3 flex justify-between items-center rounded-full shadow-lg hover:bg-gray-800 transition-colors"
    >
      <BsGiftFill size={30} /> 
      <p className='mx-4'>Rewards</p>
    </a>
  );
};

export default RewardsButton;
