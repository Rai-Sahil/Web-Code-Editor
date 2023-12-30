export interface CodeEditorProps {
    language: string;
}

export interface LanguageOption {
    id: number;
    name: string;
    value: string;
    label: string;
}

export interface CustomInputProps {
    customInput: string;
    setCustomInput: (customInput: string) => void;
}