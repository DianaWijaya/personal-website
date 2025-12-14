import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./link";
import { SelectedPage } from "@/reusables/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/reusables/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-white/70 backdrop-blur-md shadow-sm";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-all`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Education" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact
                </ActionButton>
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-end">
              <button
                className="p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-8 w-8 text-purple-600 hover:text-purple-700 transition-colors" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && (
        <>
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
              isMenuToggled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuToggled(false)}
          />
          
          {/* Menu */}
          <div className={`fixed right-0 top-0 z-50 h-full w-[300px] bg-purple-100/70 backdrop-blur-md shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuToggled ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* CLOSE ICON */}
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuToggled(false)}>
                <XMarkIcon className="h-6 w-6 text-purple-600 hover:text-purple-700 transition-colors" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[20%] flex flex-col gap-6 text-xl text-gray-800">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Education" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;