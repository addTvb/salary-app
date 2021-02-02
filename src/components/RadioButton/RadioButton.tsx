import * as React from 'react';
import "./RadioButton.css";

interface IProps {
    title: string;
    id: string;
    changeBoxVisible?: (e: any) => any;
    radioChecked?: any;
    changeRadioChecked?: (e: any) => any;
}


export const RadioButton: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="form-group">
            <input
                name="radioButtons"
                id={props.id}
                className="form-check-input"
                type="radio"
                onChange={props.changeBoxVisible}
                checked={props.radioChecked}
            />
            <label className="form-check-label form-group__title" htmlFor={props.id}>
                {props.title}
            </label>
        </div>
    );
};