"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardHeader,
} from "@/components/ui/card";
import { ChevronRight,ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HyperText from "@/components/magicui/hyper-text";
interface Game {
  title: string;
  img_url: string;
}
const games = [
  {
    title: "Trivia Time!",
    img_url: "/drawer/trivia.svg",
  },
  {
    title: "Trivia Timeeeeee!",
    img_url: "/drawer/trivia.svg",
  },
  {
    title: "Trivia Timeasdasd!",
    img_url: "/drawer/trivia.svg",
  },
];
// interface GameCarouselProps {
//   games: Game[];
// }
// const GameCarousel = ({ games: GameCarouselProps }) => {
  

const Navbar = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next game
  const nextGame = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length); // Loop back to start
  };

  // Function to go to the previous game
  const prevGame = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length); // Loop back to end
  };
  return (
    <>
      <div className="bg-gradient-to-t from-[#242424] to-[#ffffff] py-8 px-16 flex flex-col lg:flex-row">
        {/* logo */}
        <div className="h1 mx-auto lg:mx-8 flex w-72">
          <span className="text-white text-5xl instrumental-sans-font mt-2">
            <HyperText className=" instrumental-sans-font" text="The" />
          </span>
          <span className="jaro-font h1 text-6xl text-black">
            <HyperText className="jaro-font" text="Game" />
          </span>
        </div>

        {/* Navigationmenu */}
        <NavigationMenu className="lg:ms-20 mx-auto w-52 lg:w-96">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="instrumental-sans-font bg-transparent font-semibold text-lg hover:text-xl  transition-all duration-300">
                <Drawer>
                  <DrawerTrigger>Games</DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="text-4xl">GAMES</DrawerTitle>
                      <br />
                      <DrawerDescription className="lg:flex justify-between mx-20">
      <div className="relative w-full flex items-center justify-center">
        {/* Arrow for previous game (shown only on small devices) */}
        <button
          className="absolute left-2 sm:left-4 lg:hidden text-3xl"
          onClick={prevGame}
        >
          <ChevronLeft />
        </button>

        {/* Only show one game on small devices */}
        <div className="lg:hidden w-full flex justify-center">
          <Card className="border border-4 p-4 hover:scale-110 transition-all duration-300 ease-in-out">
            <Image
              src={games[currentIndex].img_url}
              alt="Game"
              width={200}
              height={200}
              className="mx-auto"
            />
            <CardHeader>
              <p className="text-2xl mx-auto font-bold">{games[currentIndex].title}</p>
            </CardHeader>
          </Card>
        </div>

        {/* Arrow for next game (shown only on small devices) */}
        <button
          className="absolute right-2 sm:right-4 lg:hidden text-3xl"
          onClick={nextGame}
        >
          <ChevronRight />
        </button>

        {/* Display all games on larger screens */}
        <div className="hidden lg:flex lg:justify-between w-full">
          {games.map((game: Game, idx: number) => (
            <div key={idx}>
              <Card className="border border-4 p-4 hover:scale-110 transition-all duration-300 ease-in-out">
                <Image
                  src={game.img_url}
                  alt={game.title}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <CardHeader>
                  <p className="text-2xl mx-auto font-bold">{game.title}</p>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="instrumental-sans-font bg-transparent font-semibold text-white text-lg hover:text-xl  transition-all duration-300">
                AboutUs
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="instrumental-sans-font bg-transparent font-semibold text-lg hover:text-xl  transition-all duration-300">
                ContactUs
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Loginroutes */}
        <div className="flex align-center justify-center gap-x-8 lg:me-8 mx-auto mt-4 lg:mt-0">
          <p className="pointer hover:scale-110 transition-all duration-300 border rounded-full border-black lg:pt-6 w-16 text-center">
            SignUp
          </p>
          <p className="pointer hover:scale-110 transition-all duration-300 border rounded-full border-black lg:pt-6 w-16 text-center">
            LogIn
          </p>
        </div>
      </div>
    </>
  );
}
export default Navbar