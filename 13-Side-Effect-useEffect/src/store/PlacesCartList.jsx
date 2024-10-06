import { useReducer, useRef } from "react";
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
  const activePlace = AVAILABLE_PLACES.find((place) => place.id === payload);
  let updatedPlace;

  if (type === "ADD") {
    if (state.places.length === 0) {
      updatedPlace = [...state.places, activePlace];
    }
    if (state.places.length >= 1) {
      const isAvailable = state.places.some((place) => place.id === payload);
      isAvailable
        ? (updatedPlace = [...state.places])
        : (updatedPlace = [...state.places, activePlace]);
    }
    return {
      ...state,
      places: updatedPlace,
    };
  }

  if (type === "START_REMOVE") {
    const removingElement = state.places.findIndex(
      (place) => place.id === payload
    );
    if (removingElement !== -1) {
      state.places.splice(removingElement, 1);
      return { ...state };
    }
  }
  return state;
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
