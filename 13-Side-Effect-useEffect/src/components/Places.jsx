export default function Places({ title, fallbackText, places, onSelectPlace }) {
  return (
    <section className="max-w-7xl w-full mx-auto my-8 p-4 rounded-lg border border-customSectionBorder">
      <h2 className="font-raleway text-2xl font-bold mb-4 text-[#8feeff] text-center m-0 p-0">
        {title}
      </h2>
      {places.length === 0 && (
        <p className="text-center mb-7">{fallbackText}</p>
      )}
      {places.length > 0 && (
        <ul className="max-w-[80rem] grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 m-8 mx-auto p-0 list-none">
          {places.map((place) => (
            <li
              key={place.id}
              className="place-item relative flex flex-col rounded-lg bg-[#1f1c2c] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] animate-slide-up-fade-in"
            >
              <button
                className="bg-transparent border-none transition-all "
                onClick={() => onSelectPlace(place.id)}
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={place.image.src}
                  alt={place.image.alt}
                />
                <h3 className="font-raleway font-bold absolute bottom-0 right-4 m-4 text-black bg-[#feee86] rounded px-2 py-1 shadow-  [0 1px 4px rgba(0, 0, 0, 0.4)]">
                  {place.title}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
