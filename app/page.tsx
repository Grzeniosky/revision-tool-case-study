import BackgroundLines from "./components/BackgroundLines";
import Hero from "./components/Hero";
import PlatformContext from "./components/PlatformContext";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Toolstack from "./components/Toolstack";
import KeyInsight from "./components/KeyInsight";
import Outcome from "./components/Outcome";
import Reflections from "./components/Reflections";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import Nav from "./components/Nav";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <BackgroundLines />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <FadeIn><div id="context"><PlatformContext /></div></FadeIn>
        <FadeIn><div id="problem"><Problem /></div></FadeIn>
        <FadeIn><div id="process"><Process /></div></FadeIn>
        <FadeIn><Toolstack /></FadeIn>
        <FadeIn><div id="insight"><KeyInsight /></div></FadeIn>
        <FadeIn><div id="outcome"><Outcome /></div></FadeIn>
        <FadeIn><div id="reflections"><Reflections /></div></FadeIn>
        <FadeIn><Footer /></FadeIn>
      </div>
    </main>
  );
}