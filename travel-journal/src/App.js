import './index.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {

  const cards = data.map(item => {
      return( 
      <div>
        <Card key={item.id} item={item} /> 
        <hr></hr>
      </div>)
      }
    )
  return (
    <div className="main">
      <div className="content">
        <Navbar />
        <div className="cards">
          {cards}
        </div>
      </div>
    </div>
  );
}

