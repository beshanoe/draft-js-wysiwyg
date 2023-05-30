# It's a fork of draft-js-wysiwyg that is built using plain TS compiler instead of a bundling with webpack. It's done to make this package tree-shakable.

<p align="center">
  <a href="https://draft-js-wysiwyg.com">
    <img width="100" src="https://draft-js-wysiwyg.com/static/logo.svg" alt="Draft-js-wysiwyg logo" />
  </a>
</p>
<h1 align="center">
  Draft-js-wysiwyg
</h1>
<p align="center">
A Wysiwyg editor built using
  <a href="https://reactjs.org/">
    React
  </a>,
  <a href="https://draftjs.org">
    Draft
  </a>
  and
  <a href="https://material-ui.com/">
    Material-UI
  </a>
  libraries.
</p>
<p align="center">
  <a href="https://github.com/romainleduc/draft-js-wysiwyg/actions/workflows/ci.yml">
    <img src="https://github.com/romainleduc/draft-js-wysiwyg/actions/workflows/ci.yml/badge.svg" alt="ci" />
  </a>
  <a href="https://github.com/romainleduc/draft-js-wysiwyg/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" />
  </a>
  <a href="https://www.npmjs.com/package/draft-js-wysiwyg">
    <img src="https://img.shields.io/npm/v/draft-js-wysiwyg/latest.svg" alt="npm latest package" />
  </a>
  <a href="https://codecov.io/gh/romainleduc/draft-js-wysiwyg">
    <img src="https://img.shields.io/codecov/c/github/romainleduc/draft-js-wysiwyg" alt="coverage"/>
  </a>
  <a href="https://dependabot.com">
    <img src="https://api.dependabot.com/badges/status?host=github&repo=romainleduc/draft-js-wysiwyg" alt="Dependabot Status" />
  </a>
</p>

## Installation

Draft-js-wysiwyg is available as an [npm package](https://www.npmjs.com/package/draft-js-wysiwyg). You can install it using:

```sh
npm install draft-js-wysiwyg

#or
yarn add draft-js-wysiwyg
```

Please note that `draft-js-wysiwyg` depends on `draft-js`, `@material-ui/core` and `@material-ui/lab` which must also be installed.

## Usage

Here is a very basic example to get you started.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  EditorContainer,
  Editor,
  InlineToggleButton,
  EditorToolbar,
  ToggleButtonGroup,
} from 'draft-js-wysiwyg';
import { EditorState } from 'draft-js';
import {
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon
} from '@material-ui/icons';
import 'draft-js/dist/Draft.css';

const App = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  React.useEffect(() => {
    editor.current.focus();
  }, []);

  return (
    <EditorContainer
      editorState={editorState}
      onChange={setEditorState}
    >
      <EditorToolbar>
        <ToggleButtonGroup size="small">
          <InlineToggleButton value="BOLD">
            <FormatBoldIcon />
          </InlineToggleButton>
          <InlineToggleButton value="ITALIC">
            <FormatItalicIcon />
          </InlineToggleButton>
        </ToggleButtonGroup>
      </EditorToolbar>
      <Editor ref={editor} placeholder="Enter some text.." />
    </EditorContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

You can see this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/usage-zlf3t)

## Examples

Are you looking for an example project to get started? [We host some](https://github.com/romainleduc/draft-js-wysiwyg/tree/master/examples).

## Documentation

Check out our [documentation website](https://draft-js-wysiwyg.com).
