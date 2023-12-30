"use client";

import LanguagesDropdown from "./languageDropdown"
import CodeEditor from "./codeEditor"
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { languageOptions } from "@/contants/languageOptions";
import { LanguageOptionProps } from "@/interfaces/CommonInterfaces";
import { classnames } from "@/contants/general";
import { OutputWindow } from "./outputWindow";
import { CustomInput } from "./customInput";

const javascriptDefault = `// comments`;

const handleCompiler = async () => {
    try {
        console.log('compiling code...');
        // TODO Add compiler logic here
    } catch (err: any) {
        toast.error(err.message);
    }
}

export default function Page() {

    const [language, setLanguage] = useState(languageOptions[0]);
    const [code, setCode] = useState(javascriptDefault);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(false);

    const onSelectLanguage = (desiredLanguage: LanguageOptionProps) => {
        console.log('selected language is...', desiredLanguage);
        setLanguage(desiredLanguage);
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            <div className="flex justify-center items-center v-screen">
                <div className="mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow transition duration-200 bg-white flex-shrink-0 p-0">
                    <LanguagesDropdown onSelectLanguage={onSelectLanguage} />
                </div>
            </div>
            <div className="flex flex-row space-x-4 items-start px-4 py-4">
                <div className="flex flex-col w-full h-full justify-start items-end">
                    <CodeEditor language={language.value} />
                </div>

                <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
                    <OutputWindow />
                    <div className="flex flex-col items-end">
                        <CustomInput
                            customInput={ customInput }
                            setCustomInput={ setCustomInput }
                        />
                        <button
                            onClick={handleCompiler}
                            disabled={!code}
                            className={classnames(
                                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                                !code ? "opacity-50" : ""
                            )}>
                            {processing ? "Processing..." : "Compile and Execute"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}