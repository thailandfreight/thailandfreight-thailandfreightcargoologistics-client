import Content from '../../components/content/Content';
import Slider from '../../components/slider/Slider';
import Track from '../../components/track/Track';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Content />
      <Track />
    </div>
  );
};

export default Home;
