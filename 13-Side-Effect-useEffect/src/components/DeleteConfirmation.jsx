import { useContext } from "react";
import { PlacesCartContext } from "../store/PlacesCartList";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const placesCtx = useContext(PlacesCartContext);

  return (
    <div className="p-4">
      <h2 className="font-raleway text-3xl text-[#5d0909]">Are you sure?</h2>
      <p className="my-auto text-xl text-[#804242] ">
        Do you really want to remove this place?
      </p>
      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={placesCtx.onCancel}
          className="px-6 py-2 bg-transparent border-none font-raleway text-base text-[#5d0909]"
        >
          No
        </button>
        <button
          onClick={placesCtx.onConfirm}
          className="cursor-pointer font-raleway text-base px-6 py-2 rounded bg-[#5d0909] shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-white hover:bg-[#3e0505] focus:bg-[#3e0505]"
        >
          Yes
        </button>
      </div>
    </div>
  );
}
