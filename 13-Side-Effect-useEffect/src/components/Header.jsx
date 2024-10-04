import logo from "../../src/assets/logo.png";

export default function Header() {
  return (
    <header className=" flex flex-col items-center gap-4">
      <img
        className="w-20 h-20 contain-content drop-shadow-custom"
        src={logo}
        alt="logo"
      />
      <h1 className="text-5xl uppercase tracking-extra-wide font-bold">
        PlacePicker
      </h1>
      <p className="text-lg max-w-96 text-pColor">
        Create your person al collection of places you would like to visit or
        you have visited.
      </p>
    </header>
  );
}
