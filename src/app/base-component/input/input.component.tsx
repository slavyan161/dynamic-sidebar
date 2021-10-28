export interface IInput {
    value?: string;
    onChange?: (event: any) => void;
    onKeyUp?: (event: any) => void;
    type?: 'checkbox' | 'input' | 'submit' | 'radio';
    isChecked?: boolean;
}

function InputComponent(props: IInput) {
    const { isChecked, ...rest } = props;
    return (<input {...rest} checked={isChecked} />)
}

export default InputComponent
