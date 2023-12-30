export interface CodeEditorProps {
    language: string;
}

export interface LanguageOptionProps {
    id: number;
    name: string;
    value: string;
    label: string;
}

export interface CustomInputProps {
    customInput: string;
    setCustomInput: (customInput: string) => void;
}