import SignIn_Joinin from "../SignIn_Joinin/SignIn_Joinin";
import BgWidthFull from "../BgWidthFull";

function Home() {
  return (
    <BgWidthFull>
      <div className={` flex bg-[#F7F5F9] p-4`}>
        <div>
          <div className="text-[0.875rem]">
            <h1 className="mb-4 text-[2rem] font-semibold italic">
              Explore your <span className="text-sky-500">hobby</span> and{" "}
              <span className="text-mainPurple">passion</span>
            </h1>
            <p className="mb-2">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="mb-2">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className=" w-full  p-2 lg:hidden">
            <SignIn_Joinin
              primaryColor=" bg-[#F7F5F9] "
              secandryColor=" bg-white "
            />
          </div>
          <img src="/Group 27.svg" className="w-full "></img>
        </div>
        <div className="hidden  p-2 lg:block">
          <SignIn_Joinin
            primaryColor=" bg-[#F7F5F9] "
            secandryColor=" bg-white "
          />
        </div>
      </div>
    </BgWidthFull>
  );
}

export default Home;
