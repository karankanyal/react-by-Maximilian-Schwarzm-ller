import Places from "./Places";
import { useContext, useEffect, useState } from "react";
import { PlacesCartContext } from "../store/PlacesCartList";
import { AVAILABLE_PLACES } from "../data";
import { sortPlacesByDistance } from "../loc";

export default function MainContent() {
  const placesCtx = useContext(PlacesCartContext);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const storedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(storedPlaces);
    });
  }, []);

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
        fallbackText={"Shorting places by current location..."}
        places={availablePlaces}
        onSelectPlace={placesCtx.onSelectPlace}
      />
    </main>
  );
}
