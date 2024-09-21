import Header from '../src/components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

// If you write whole code together, It is hard to maintain also,
// If use State is being used in any component then the whole component will be loaded again
// That's why we used multiple

export default App;

// There should a one parent element to jsx code in react also if there are two returning values.
// (This div eleme  nt is there just because of there should be one parent element to the jsx code,
// but this div element is just taking unnessary space in the dom tree. So to resolve this problem react
// introduced (<Fragment></Fragment>) or (<></>) tag which does not add any elemnt in the DOM tree.)

// <div>
// </div>

// <Fragment>
// </Fragment>
