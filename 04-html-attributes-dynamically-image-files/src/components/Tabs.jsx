export default function Tabs({ buttons, children, ButtonComponent }) {
  // const ButtonComponent = buttonComponent;
  return (
    <>
      <ButtonComponent>{buttons}</ButtonComponent>
      {children}
    </>
  );
}
