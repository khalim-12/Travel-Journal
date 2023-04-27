/** @format */

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import TravelData from "./components/TravelData";
import Footer from "./components/Footer";

function App() {
  const travel = TravelData.map((item) => {
    return (
      <Card
        key={item.id}
        item = {item}//another alternative for calling the props
        
        
        
        // img={item.imageUrl}
        // title={item.title}
        // location={item.location}
        // street={item.street}
        // startdate={item.startdate}
        // enddate={item.enddate}
        // description={item.description}
        // booking = {item.booking}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      {travel}
      <Footer />
    </div>
  );
}

export default App;
