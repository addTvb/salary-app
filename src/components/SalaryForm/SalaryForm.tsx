// React
import * as React from "react";
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSalary } from '../../redux/actions/changeSalary';
import { changeBoxVisible } from '../../redux/actions/changeBoxVisible';
import { changeSalaryType } from '../../redux/actions/changeSalaryType';
import { changeCheckState } from '../../redux/actions/changeCheckState';
import { changeRadioState } from '../../redux/actions/changeRadioState';
import store from '../../redux/store';
// Redux Form
// import { InjectedFormProps, reduxForm, Field } from "redux-form";
// Components
import { RadioButton } from "../RadioButton";
import { MrotPopover } from "../MrotPopover";
import { Input } from "../Input";
import { SwitchButton } from "../SwitchButton";
import { SalaryBox } from "../SalaryBox";
// css
import "./form.css";



const SalaryForm: React.FC = (props: any) => {
  const [isChecked, setIsChecked] = React.useState(true)

  const changeSalary = (e: any) => {
    let salary: any = e.target.value
    let salaryNumber: number = salary
    props.changeSalary(salaryNumber)
  }
  // ################
  const monthPayClick = () => {
    props.changeBoxVisible(true);
    props.changeSalaryType("");
  }
  const mrotClick = () => {
    props.changeBoxVisible(false);
    props.changeSalaryType("");

  }
  const dayPayClick = () => {
    props.changeBoxVisible(false);
    props.changeSalaryType("В день");
  }
  const hourPayClick = () => {
    props.changeBoxVisible(false);
    props.changeSalaryType("В час");
  }

  return (
    <div className="container">
      <div className="row form-box">
        <div className="col-md-8">
          <div className="header-box">
            <RadioButton
              title="Оклад за месяц"
              id="monthPay"
              changeBoxVisible={monthPayClick}
              radioChecked={props.radioChecked}
              changeRadioChecked={props.changeRadioState()}
            />
            <div>
              <RadioButton
                title="МРОТ"
                id="mrot"
                changeBoxVisible={mrotClick}
              />
              <MrotPopover 
                radioChecked={props.radioChecked}  
              />
            </div>
            <RadioButton
              title="Оплата за день"
              id="dayPay"
              changeBoxVisible={dayPayClick}
            />
            <RadioButton
              title="Оплата за час"
              id="hourPay"
              changeBoxVisible={hourPayClick}
            />
            <SwitchButton
              checked={true}
              getCheckedState={(checkedValue: boolean) => {
                setIsChecked(checkedValue);
                props.changeCheckState(checkedValue);
              }}
            />
            <Input
              name="inputText"
              placeholder="Введите сумму оклада"
              initialValue={props.salary}
              maxLength={7}
              salaryType={props.salaryType}
              changeSalary={(e) => changeSalary(e)}
            />
          </div>
          <div className="footer-box">
            <SalaryBox
              initialValue={props.salary}
              boxVisibility={props.boxVisible}
              withNdfl={props.isChecked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const {
    salary,
    boxVisible,
    salaryType,
    isChecked,
    radioChecked
  } = state;
  return {
    salary: salary,
    boxVisible: boxVisible,
    salaryType: salaryType,
    isChecked: isChecked,
    radioChecked: radioChecked,
  };
}
const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    changeSalary: changeSalary,
    changeBoxVisible: changeBoxVisible,
    changeSalaryType: changeSalaryType,
    changeCheckState: changeCheckState,
    changeRadioState: changeRadioState,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SalaryForm);
