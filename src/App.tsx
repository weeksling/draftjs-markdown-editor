import React from "react";
import "./styles.css";
import "draft-js/dist/Draft.css";
import { Editor, EditorState } from "draft-js";

export default function App() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  console.log(editorState?.getCurrentContent());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Editor editorState={editorState} onChange={setEditorState} />
      <h2>WOW! Look at that editor</h2>
    </div>
  );
}
