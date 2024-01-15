"use client";

import Editor, { Monaco } from "@monaco-editor/react";
import * as monacoEditor from 'monaco-editor';
import React, { useState, useRef } from "react";
import { CodeEditorProps } from "@/interfaces/CommonInterfaces";
import * as Y from 'yjs';
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";

// TODO Add multiple theme and language support
export default function CodeEditor({ onChange, code, language, uniqueColabId }: CodeEditorProps) {
  const [value, setValue] = useState(code || "");
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor>();

  const handleEditorChange = (value: string | undefined) => {
    if (!value) return;

    setValue(value);
    onChange("code", value);
  }

  const mountTesting = (editor: monacoEditor.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    if (!editor) return;
    if (typeof window !== 'undefined') {
      editorRef.current = editor;
    const doc = new Y.Doc();
    const provider = new WebrtcProvider(uniqueColabId, doc);
    const type = doc.getText('monaco');
    const binding = new MonacoBinding(type, editorRef.current.getModel()!, new Set([editorRef.current]), provider.awareness);
    console.log('provider awareness', provider.awareness)
    }
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={ `100%` }
        language={ language }
        defaultValue="// some comment"
        theme="vs-dark"
        onChange={ handleEditorChange }
        onMount={ mountTesting }
      />
    </div>
  )
}
