import React from 'react';
import TextComponent from './TextComponent';
import DivComponent from './DivComponent';

/**
 * App is the main component that renders both DivComponent and TextComponent.
 * DivComponent returns the text "Text" wrapped in an HTML <div> element.
 * TextComponent returns the same text "Text" as a plain string, which is also a valid React node.
 *
 * @type {React.FunctionComponent}
 */
const App = () => {
  return (
    <div>
      <DivComponent />
      <TextComponent />
    </div>
  );
};

export default App;
