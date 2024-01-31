/* eslint-disable react/no-unknown-property */
import { Typography } from "@material-tailwind/react";
 
const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
  ];
   
  const currentYear = new Date().getFullYear();
   
const Footer = () => {
    return (
        <footer className=" container mx-auto px-10">
          <div className="mx-auto rounded-lg w-full bg-[#1f2937] max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            
              <img
            alt="logo"
            className="h-8 pt-2 w-38 object-cover object-center"
            src="https://i.ibb.co/hFf4twf/Screenshot-2024-01-31-221510-removebg-preview.png"
          />
            
         
            
              <div className="grid grid-cols-3 text-white justify-between gap-4">
                {LINKS.map(({ title, items }) => (
                  <ul key={title}>
                    <Typography
                    
                      variant="small"
                      color="blue-gray"
                      className="mb-3 font-medium "
                    >
                      {title}
                    </Typography>
                    {items.map((link) => (
                      <li key={link}>
                        <Typography
                          as="a"
                          href="#"
                          color="gray"
                          className="py-1.5 font-normal transition-colors text-gray-400 hover:text-white"
                        >
                          {link}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="mt-12 w-full  bg-[#030712] items-center justify-center border-t border-blue-gray-50 py-4 ">
              <Typography
                
                variant="small"
                className="mb-4 text-center font-normal text-white md:mb-0"
              >
                &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
                Rights Reserved.
              </Typography>
              <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              </div>
            </div>
          </div>
        </footer>
      );
};

export default Footer;