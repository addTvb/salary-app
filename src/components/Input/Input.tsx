import * as React from 'react';
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.css";

interface IProps {
  name: string;
  placeholder: string;
  initialValue: number;
  maxLength: number;
  salaryType: string;
  changeSalary: (e: any) => any;
}

export const Input: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="form-group form-input">
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        className="form-control form-control_input-salary"
        maxLength={props.maxLength}
        value={props.initialValue}
        onChange={props.changeSalary}
      />
      <FontAwesomeIcon icon={faRubleSign} />  
       <span className="form-input__text">{props.salaryType}</span>
    </div>
  );
};