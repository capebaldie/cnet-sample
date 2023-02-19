import "./App.css";
import InfoCard from "./components/cards/InfoCard";
import TextCard from "./components/cards/TextCard";
import TextCard02 from "./components/cards/TextCard02";
import Carousel from "./components/carousel/Carousel";
import Content from "./components/content/Content";
import MobileContent from "./components/content/MobileContent";
import BaseFooter from "./components/footer/BaseFooter";
import MainFooter from "./components/footer/MainFooter";
import SubFooter from "./components/footer/SubFooter";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="px-3 sm:px-6">
        <Header />
        <div className="flex flex-col sm:flex-row w-full gap-6">
          <div className="w-full sm:w-[40.42553%]">
            <InfoCard />
          </div>
          <div className="w-full sm:w-[57.44681%]">
            <TextCard
              title="Looking for Great Deals? Use CNET Shopping to Save Time and Money"
              content=" Here's how to use our browser extension to get the best deals (and
          some bonus resources, too) when shopping on many of the web's most
          popular retailer sites."
              author="BY JOHN FALCONE"
              src="https://www.cnet.com/a/img/resize/b092c7ecda0ffed596ea10d51652bd7f8cbb48be/hub/2022/12/16/de0f71fe-09c9-4f1b-b13c-908b1d6696ce/diagram-cnet-shopping-promo.jpg?auto=webp&fit=crop&height=236&width=420"
            />
            <hr className="my-5" />
            <TextCard
              author="BY STEPHEN SHANKLAND"
              content="This artificial intelligence bot can answer questions, write essays, summarize documents and program computers. But deep down, it doesn't know what's true."
              title="Why We're All Obsessed With the Mind-Blowing ChatGPT AI Chatbot"
              src="https://www.cnet.com/a/img/resize/b3cb3d5d2d73493dfbc1f0fab205d60d2cb3145e/hub/2022/12/06/3dd7180c-d0e7-47ca-bc37-b5df15a41a25/ai-chat-gettyimages.jpg?auto=webp&fit=crop&height=236&width=420"
            />
          </div>
        </div>
        <hr className="my-8" />
        <Carousel />
        <div className="hidden sm:block">
          <Content heading="Tech deals" />
          <hr className="my-5" />
          <Content heading="Mobile" />
          <hr className="my-5" />
          <Content heading="Computing" />
          <hr className="my-5" />
          <Content heading="Gaming" />
          <hr className="my-5" />
          <Content heading="Home entertainment" />
          <hr className="my-5" />
        </div>
        <MobileContent heading="Tech deals" />
        <MobileContent heading="Mobile" />
        <MobileContent heading="Home entertainment" />

        <div className="">
          <TextCard02 />
          <button className="poppins border border-[#e71d1d] rounded-md w-full  sm:w-[70%] font-bold my-6 py-3 text-[#e71d1d] hover:bg-[#e71d1d] hover:text-white">
            See More
          </button>
        </div>
        <BaseFooter />
        <hr className="my-5" />
        <MainFooter />
        <SubFooter />
      </div>
    </>
  );
}

export default App;
