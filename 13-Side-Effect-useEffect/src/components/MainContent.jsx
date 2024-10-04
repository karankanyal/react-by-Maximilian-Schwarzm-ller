import Places from "./Places";
import { useContext } from "react";
import { PlacesCartContext } from "../store/PlacesCartList";
import { AVAILABLE_PLACES } from "../data";

export default function MainContent() {
  const placesCtx = useContext(PlacesCartContext);

  return (
    <main>
      <Places
        title="I'd like to visit ..."
        fallbackText={"Select the places you would like to visit below."}
        places={placesCtx.places}
        onSelectPlace={placesCtx.onStartRemovePlace}
      />
      <Places
        title="Available Places"
        places={AVAILABLE_PLACES}
        onSelectPlace={placesCtx.onSelectPlace}
      />
    </main>
  );
}
