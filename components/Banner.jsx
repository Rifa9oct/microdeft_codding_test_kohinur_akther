import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const BannerPage = () => {
   
    return (
        <div>
            <div className="banner_top">
                <div>
                    <div className="banner_top1">
                        <IoLocationOutline />
                        <h3>House 14 , Block# B , Banasree , Dhaka-1219</h3>
                    </div>
                    <div className="banner_top2">
                        <IoMailOutline />
                        <h3>Info@Microdeft.Com</h3>
                    </div>
                </div>

                <div className="banner_top3 ">
                    <Link href="#"><FaFacebookSquare /></Link>
                    <Link href="#"><FaTwitter /></Link>
                    <Link href="#"><FaLinkedinIn /></Link>
                </div>
            </div>

            <div className="banner_lower">
                <div>
                    <Image src="/microdeft-logo.png" alt="logo" width={241} height={59} />
                </div>
                <div className="banner_lower1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </div>
            </div>

            <div className="main_banner">
                <div className="main_banner1">
                    <h1 className="h1">Grow Your Business With Custom</h1>
                    <h1 className="h1">Web Development Services</h1>
                    <p>We Help Tech Startup Businesses Grow Through Innovation And Technology. We Are Working Hard To Make Your Business Easier And Better.</p>
                    <button>Learn More</button>
                </div>
                <div className="main_banner2 mt-[106px]">
                    <Image src="/image.png" alt="logo" width={882} height={655} />
                </div>
            </div>

            <div className="lower">

            </div>
        </div>
    );
};

export default BannerPage;