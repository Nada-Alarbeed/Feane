import { FaLocationDot } from "react-icons/fa6";
import List from "../components/List";
import { IoIosCall, IoLogoTwitter } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import SocialLink from "../components/SocialLink";

const SOCIALS = [
    { icon: <FaFacebookF size={17} />, link: "#" },
    { icon: <IoLogoTwitter size={17} />, link: "#" },
    { icon: <FaLinkedinIn size={17} />, link: "#" },
    { icon: <FaInstagram size={17} />, link: "#" },
    { icon: <FaPinterest size={17} />, link: "#" }
];

const Footer = () => {
    const date = new Date().getFullYear(); 

    return (
        <footer className="py-20 bg-gray dark:bg-white4 ">
            <div className="center-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white dark:text-gray" data-aos="fade-up"  data-aos-duration="1000">
                    <List
                        head={"Contact Us"}
                        Content={[
                            {
                               
                                icon: <FaLocationDot size={17} />,
                                url: "#",
                                title: "Location",
                            },
                            {
                                
                                icon: <IoIosCall size={17} />,
                                url: "#",
                                title: "Call +01 1234567890",
                            },
                            {
                               
                                icon: <MdEmail size={17} />,
                                url: "#",
                                title: "demo@gmail.com",
                            }
                        ]}
                    />

                    <List
                        head={"Feane"}
                        textColor="text-babyGray2  dark:text-black4"
                        textSize="text-[38px]"
                        Content={[
                            {
                                title: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with",
                            },
                            (
                                <div className="flex gap-1 justify-center" >
                                    {SOCIALS.map((e, i) => (
                                        <SocialLink
                                            key={i}
                                            link={e.link}
                                            icon={e.icon}
                                        />
                                    ))}
                                </div>
                            ),
                        ]}
                    />
                    
                    <List
                        head={"Opening Hours"}
                        textColor="text-babyGray2 dark:text-gray"
                        Content={[
                            { title: "Everyday" },
                            { title: "10.00 Am -10.00 Pm" },
                        ]}
                    />
                </div>
                <div className="text-babyGray2 dark:text-gray flex flex-col justify-center items-center gap-5 text-[1rem] mt-10" data-aos="fade-up"  data-aos-duration="1000">     
                    <p>&copy; {date} All Rights Reserved By Free Html Templates</p>
                    <p>&copy; Distributed By ThemeWagon</p>              
                </div>
            </div>
        </footer>
    );
};

export default Footer;