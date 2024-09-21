import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent;

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  !selectedTopic
    ? (tabContent = <p>Please select a topic!</p>)
    : (tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ));

  return (
    // Here id and title props will not get autometically forwaded to its child component.
    // But we can forward them by spreading and rest parameter concept of javascript.
    <Section title="Examples" id="examples" class="abc">
      <Tabs
        // If there is any bulit-in component, pass it like a string else pass like a function
        ButtonComponent="menu"
        // buttonComponent={Section}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              // onSelect={() => handleClick('components')}
              // Here we can change it by onClick directly which can be used in TabButton component with the help of Forwarding Props to wrapped Element.
              onClick={() => handleClick('components')}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

{
  /* There are several ways to render content on clicking a button */
}

{
  /* 1st way */
}
{
  /* {!selectedTopic ? (
        <p>Please select a topic!</p>
        ) : (
          <div id="tab-content">
          <h3>{EXAMPL ES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
          </div>
          )} */
}

{
  /* 2nd way */
}
{
  /* {!selectedTopic && <p>Please select a topic!</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
          </div>
          )} */
}

{
  /* 3rd way */
}
{
  /* In this way the js code is seperated wiz in the top */
}
