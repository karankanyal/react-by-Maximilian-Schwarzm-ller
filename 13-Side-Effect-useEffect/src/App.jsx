import "./App.css";
import Header from "./components/Header";
import PlaceContextProvider from "./store/PlacesCartList.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <PlaceContextProvider>
      <Header />
      <MainContent />
    </PlaceContextProvider>
  );
}

export default App;
