type ActionType = "code" | "other";

export interface onChangeAction {
    action: string;
    data: string;
}

export interface CodeEditorProps {
    onChange: ( action: ActionType, data: string) => void;
    code: string;
    language: string;
    uniqueColabId: string;
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

export interface ICustomStyles {
    overlay: React.CSSProperties;
    content: React.CSSProperties;
    closeButton: React.CSSProperties;
  }