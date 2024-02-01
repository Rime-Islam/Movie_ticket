import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
   

const myNavbar = () => {
    return (
      <div className="container mx-0 lg:mx-auto">
          <Navbar
           variant="gradient"
           color="blue-gray"
          style={{ color: '#333' }}
          className="fixed z-10 rounded-none from-blue-gray-900 to-blue-gray-800 px-4 py-2 lg:px-8 lg:py-4">
        
          <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
            <Typography
            
              variant="h6"
              className="mr-4 ml-2 cursor-pointer py-1.5"
            >
                  <img
            alt="logo"
            className="h-6 w-full object-cover object-center"
            src="https://i.ibb.co/hFf4twf/Screenshot-2024-01-31-221510-removebg-preview.png"
          />
              
            </Typography>
            <div className="ml-auto flex gap-1 md:mr-4">
              <IconButton variant="text" color="white">
                <Cog6ToothIcon className="h-4 w-4" />
              </IconButton>
              <IconButton variant="text" color="white">
                <BellIcon className="h-4 w-4" />
              </IconButton>
            </div>
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                color="white"
                label="Type here..."
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button
                size="sm"
                color="white"
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>
          </div>
        </Navbar>
      </div>
      );
};

export default myNavbar;