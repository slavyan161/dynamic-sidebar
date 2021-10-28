import InputComponent from '../input/input.component';
import './toggle-switch.css';

export interface IToggleSwitch {
    isRound?: boolean;
    onChange?: (event?: any) => void;
    value?: boolean;
}

function ToggleSwitchComponent(props: IToggleSwitch) {
    return (
        <div>
            <label className="switch">
                <InputComponent type="checkbox" onChange={props.onChange} isChecked={props.value} />
                <span className={`slider ${props.isRound && 'round'}`}></span>
            </label>
        </div>
    )
}

export default ToggleSwitchComponent
