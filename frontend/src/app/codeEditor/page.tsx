"use client";

import LanguagesDropdown from "./languageDropdown"
import CodeEditor from "./codeEditor"
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { languageOptions } from "@/contants/languageOptions";
import { LanguageOptionProps } from "@/interfaces/CommonInterfaces";

export default function Page() {

    const [language, setLanguage] = useState(languageOptions[0]);

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
                <div className="px-4 py-2">
                    <LanguagesDropdown onSelectLanguage={onSelectLanguage} />
                </div>
            </div>
            <div className="flex flex-row space-x-4 items-start px-4 py-4">
                <div className="flex flex-col w-full h-full justify-start items-end">
                    <CodeEditor language={ language.value }/>
                </div>
                <div className="right-container flex flex-shrink-0 w-[30%] flex-col">

                </div>
            </div>
        </>
    )
}