"use client";

import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import { CodeEditorProps } from "@/interfaces/CommonInterfaces";

// TODO Add multiple theme and language support
export default function CodeEditor({ onChange, code, language }: CodeEditorProps) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value: string | undefined) => {
    const newValue = value || "";
    setValue(newValue);
    onChange("code", newValue);
  }

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={ language }
        defaultValue="// some comment"
        theme="vs-dark"
        onChange={ handleEditorChange }
      />
    </div>
  )
}
