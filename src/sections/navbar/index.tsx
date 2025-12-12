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
          <div className={`${flexBetween} w-full gap-16`}>
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
            <ActionButton
              setSelectedPage={setSelectedPage}
            >
              Contact
            </ActionButton>
          </div>
        </div>
            ) : (
              <button
                // className="rounded-full bg-brown-400 p-2 hover:bg-brown-500 transition-all"
                className="rounded-full bg-gray-800/70 p-2 hover:bg-gray-800"

                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-cream-10" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-cream-10 shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-brown-500 hover:text-brown-600 transition-all" />
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
      )}
    </nav>
  );
};

export default Navbar;
