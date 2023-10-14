import "./App.css";
import "@vtmn/css-card/dist/index.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574" />
        </div>
        <div className="content">
          <p>Chorizo & mozzarella gnocchi bake</p>
          <button type="button">More Info</button>
        </div>
      </div>
    </>
  );
}

export default App;
