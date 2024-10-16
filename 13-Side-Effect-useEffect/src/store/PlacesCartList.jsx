import { useEffect, useReducer, useRef } from "react";
import { createContext } from "react";
import { AVAILABLE_PLACES } from "../data";
import Modal from "../components/Modal";
import DeleteConfirmation from "../components/DeleteConfirmation";

export const PlacesCartContext = createContext({
  places: [],
  onSelectPlace: () => {},
  onStartRemovePlace: () => {},
  onConfirm: () => {},
  onCancel: () => {},
});

function visitingCartReducer(state, { type, payload }) {
  // Type and payload are the variables of action object.
  const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];

  if (type === "ADD") {
    if (storedIds.length === 0) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([payload, ...storedIds])
      );
    }
    if (storedIds.length >= 1) {
      const isAvailable = storedIds.includes(payload);
      isAvailable
        ? localStorage.setItem("selectedPlaces", JSON.stringify([...storedIds]))
        : localStorage.setItem(
            "selectedPlaces",
            JSON.stringify([payload, ...storedIds])
          );
    }
    const updatedPlace = storedIds.map((id) =>
      AVAILABLE_PLACES.find((place) => place.id === id)
    );
    return {
      ...state,
      places: updatedPlace,
    };
  }

  if (type === "START_REMOVE") {
    const removingElement = state.places.findIndex(
      (place) => place.id === payload
    );

    if (removingElement !== -1) storedIds.splice(removingElement, 1);

    const updatedPlace = storedIds.map((id) =>
      AVAILABLE_PLACES.find((place) => place.id === id)
    );

    console.log(state, places);

    return {
      ...state,
      places: updatedPlace,
    };
  }
}

export default function PlaceContextProvider({ children }) {
  const [updatedCart, updatedCartDispatch] = useReducer(visitingCartReducer, {
    places: [],
  });

  const modalRef = useRef(null);

  function handleSelectPlace(id) {
    updatedCartDispatch({
      type: "ADD",
      payload: id,
    });
  }

  function handleStartRemovePlace(id) {
    modalRef.current.open();
    modalRef.current.id = id;
  }

  function handleStopRemovePlace() {
    modalRef.current.close();
  }

  function handleRemovePlace() {
    updatedCartDispatch({
      type: "START_REMOVE",
      payload: modalRef.current.id,
    });
    modalRef.current.close();
  }

  const ctxValue = {
    places: updatedCart.places,
    onSelectPlace: handleSelectPlace,
    onStartRemovePlace: handleStartRemovePlace,
    onConfirm: handleRemovePlace,
    onCancel: handleStopRemovePlace,
  };

  return (
    <PlacesCartContext.Provider value={ctxValue}>
      <Modal ref={modalRef}>
        <DeleteConfirmation />
      </Modal>
      {children}
    </PlacesCartContext.Provider>
  );
}
