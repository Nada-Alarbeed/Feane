const List = ({ head, Content, textColor = "text-white", textSize = "text-[28px]" }) => {
    return (
        <div className="flex flex-col gap-3 items-center">
            <h1 className={`${textSize} font-dancing text-center font-bold text-white dark:text-gray mb-4`} >
                {head}
            </h1>
            <ul className="flex flex-col items-center gap-3">
                {Content.map((e, index) => {
                    if (e.icon && e.title) {
                        return (
                            <li className="flex justify-center items-center gap-2 text-white dark:text-gray  transition-colors duration-300 hover:text-yellow" key={index}>
                                <span >
                                    {e.icon}
                                </span>
                                <a 
                                    href={e.url} 
                                    className=" text-[1.1rem] "
                                >
                                    {e.title}
                                </a>
                            </li>
                        );
                    }
                    else if (e.title) {
                        return (
                            <li className={`text-center ${textColor} text-[1.1rem]`} key={index}>
                                {e.title}
                            </li>
                        );
                    }
                    else {
                        return (
                            <li className={`text-center ${textColor} text-[1.1rem]`} key={index}>
                                {e}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default List;