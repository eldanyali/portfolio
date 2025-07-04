import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Frameworks} from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Elahe Daniali</p>
            <p className="subtext">
              
              Over the past 3 years, I’ve built solid skills in Python and recently expanded into web development with HTML, CSS, JavaScript, and Vite. I enjoy working on creative projects, and I’m passionate about AI, animation, and games.


            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "73deg", top: "30%", left: "20%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "37deg", top: "60%", left: "45%" }}
              text="Tailwind CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", bottom: "30%", left: "70%" }}
              text="JavaScript"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "42deg", top: "65%", left: "0%" }}
              text="Responsive Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "2%", left: "64%" }}
              text="Vite"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "85%", left: "45%" }}
              image="assets/logos/html.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "35%", left: "17%" }}
              image="assets/logos/bootstrap-w.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "5%", left: "45%" }}
              image="assets/logos/CSS-Logo.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              🕒 UTC+3:30 (Tehran)<br></br>
              Currently between Tehran and Urmia, studying at Urmia University of Technology.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
               I'm exploring different tools and frameworks to build better websites and user interfaces.

            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
