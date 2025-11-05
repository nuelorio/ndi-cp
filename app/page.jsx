import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text section */}
          <div className="text-center xl:text-left order-2 xl:order-0">
            <span>Tech Solutions Company</span>
            <h1 className="h1 mb-6">
              Hello We're <br />
              <span className="text-accent">simplecode</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              We are a technology partner specializing in full-stack development
              and hardware engineering. We design high-performance websites,
              build custom web applications, and provide end-to-end hardware
              assembly and repair services.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download Our Pamphlet!</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo section */}
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
