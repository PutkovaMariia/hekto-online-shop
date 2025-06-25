import hektoLogo from '/assets/hekto-logo.svg';
import fbImg from '/assets/icons/social/FB.svg';
import twImg from '/assets/icons/social/TW.svg';
import instImg from '/assets/icons/social/INST.svg';
import { Link } from 'react-router-dom';
import SpecificInput from "../molecules/SpecificInput.tsx";

interface FooterSection {
  title: string;
  links: string[];
}

interface FooterDataType {
  address: string;
  sections: FooterSection[];
  rights: string;
}

const FooterData: FooterDataType = {
  address: '17 Princess Road, London, Greater London NW1 8JR, UK',
  sections: [
    {
      title: 'Categories',
      links: [
        'Laptops & Computers',
        'Cameras & Photography',
        'Smart Phones & Tablets',
        'Video Games & Consoles',
        'Waterproof Headphones'
      ]
    },
    {
      title: 'Customer Care',
      links: ['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking']
    },
    {
      title: 'Pages',
      links: ['Blog', 'Browse the shop', 'Category', 'Pre-built-pages', 'Visual Composer Elements']
    }
  ],
  rights: '©Hekto - All Rights Reserved'
};

const socialLinks = [
  { img: fbImg, alt: 'Facebook', url: '/' },
  { img: twImg, alt: 'Twitter', url: '/' },
  { img: instImg, alt: 'Instagram', url: '/' }
];

const textClass = 'font-lato font-normal text-base text-grey-3';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full bg-grey-1 px-4 sm:px-10 md:px-26 xl:px-52 py-10 mt-16 md:mt-24">
        <div className="w-full flex flex-col xl:flex-row items-start justify-start gap-x-20 2xl:gap-x-40">
          <div className="w-full xl:w-1/4 flex flex-col items-start justify-start gap-y-8 xl:gap-y-16 pb-8 xl:pb-0">
            <img
              src={hektoLogo}
              alt="Hekto Logo"
              className="header-logo cursor-pointer w-24 md:w-28"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <SpecificInput variant="default" />
            <div className={textClass}>{FooterData.address}</div>
          </div>
          <div className="w-full xl:w-3/4 flex flex-col md:flex-row items-start justify-start md:justify-between">
            {FooterData.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-sans font-bold text-2xl text-black mb-6">{section.title}</h4>
                <ul className="list-none hidden md:block">
                  {section.links.map((link, idx) => (
                    <li key={idx} className={`${textClass} mb-3 xl:mb-6`}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between bg-grey-2 px-4 sm:px-10 md:px-26 xl:px-52 py-5">
        <p className="font-lato font-normal text-grey-3 text-sm">{FooterData.rights}</p>
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <Link to={social.url} key={idx}>
              <img src={social.img} alt={social.alt} className="size-6 cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
