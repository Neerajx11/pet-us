import Hero from "./Hero";

import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.main}>
      <Hero />
    </div>
  );
};

export default Home;
