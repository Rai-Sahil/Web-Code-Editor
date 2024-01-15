"use client";

import LanguagesDropdown from "./languageDropdown"
import CodeEditor from "./codeEditor"
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { languageOptions } from "@/contants/languageOptions";
import { LanguageOption } from "@/interfaces/CommonInterfaces";
import { classnames } from "@/utils/general";
import { OutputWindow } from "./outputWindow";
import { CustomInput } from "./customInput";
import axios from "axios";
import OutputDetails from "./outputDetails";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const javascriptDefault = `// comments`;

export default function CodeEditorPage() {

  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);

  const searchParams = useSearchParams();
  const uniqueColabId: string | null = searchParams.get('uniqueColabId')
  console.log('uniqueColabId', uniqueColabId)

  if (!uniqueColabId) {
    return <div>Invalid Code</div>
  }

  const onSelectLanguage = (desiredLanguage: LanguageOption): void => {
    console.log('selected language is...', desiredLanguage);
    setLanguage(desiredLanguage);
  }

  const checkStatus = async (token: string) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": '86d605b5a8msh7a2022cda754491p1d96b7jsneae9b50cb512',
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        setOutputDetails(response.data)
        //showSuccessToast(`Compiled Successfully!`)
        console.log('response.data', response.data)
        console.log('response.data.stdout', atob(response.data.stdout))
        return
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      //showErrorToast();
    }
  };

  const onChange = (action: string, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompiler = async (): Promise<void> => {
    try {
      console.log("Code", code);
      setProcessing(true);
      const formData = {
        language_id: language.id,
        // encode source code in base64
        source_code: btoa(code),
        stdin: btoa(customInput),
      };

      const options = {
        method: "POST",
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: { base64_encoded: "true", fields: "*" },
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
          "X-RapidAPI-Key": '86d605b5a8msh7a2022cda754491p1d96b7jsneae9b50cb512',
        },
        data: formData,
      };

      axios
        .request(options)
        .then(function (response) {
          console.log("res.data", response);
          const token = response.data.token;
          console.log("token", token);
          checkStatus(token);
        })
        .catch((err) => {
          let error = err.response ? err.response.data : err;
          setProcessing(false);
          console.log(error);
        });
    } catch (err: any) {
      toast.error(err.message);
    }
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
          <CodeEditor onChange={onChange} code={code} language={language.value} uniqueColabId={ uniqueColabId } />
        </div>

        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
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
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  )
}