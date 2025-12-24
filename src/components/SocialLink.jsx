 const SocialLink = ({ link, icon }) => {
   return (
    <a href={link} target="_blank" 
      className="flex items-center justify-center w-7.5 h-7.5 rounded-full transition-all duration-300 transform hover:text-yellow 
        text-gray bg-white dark:bg-gray dark:text-white"
    >
      {icon}
    </a>
  );
};

export default SocialLink