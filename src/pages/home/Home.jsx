import Experience from "./Experience";
import Partners from "./Partners";
import Statistics from "./Statistics";
import Title from "./Title";
import Vision from "./Vision";

const Home = () => {
  return (
    <div style={{ marginTop: "9vh" }}>
      <Title />
      <Statistics />
      <Vision />
      <Experience/>
      <Partners/>
    </div>
  );
};

export default Home;
