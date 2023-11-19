import Experience from "./Experience";
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
    </div>
  );
};

export default Home;
