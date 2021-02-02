import * as React from "react";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import store from '../../redux/store';
import { changeSalary } from '../../redux/actions/changeSalary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./SalaryBox.css";

interface IProps {
  initialValue: any;
  boxVisibility: boolean;
  withNdfl: boolean;
}

export const SalaryBox: React.FC<IProps> = (props: IProps) => {
  // const [userSalary, setUserSalary] = React.useState(null);
  // const [ndfl, setNdfl] = React.useState(null);
  // const [companyPayment, setCompanyPayment] = React.useState(null);

  // React.useEffect(() => {
  //   if (props.withNdfl) {
  //     setCompanyPayment(props.initialValue);
  //   } else {
  //     setUserSalary(props.initialValue);
  //   }
  // }, [])

  const setUserSalary = () => {
    if (props.withNdfl) {
      return props.initialValue;
    } else {
      let calc: any = Math.trunc(props.initialValue * 13 / 100)
      return props.initialValue - calc;
    }
  }
  const percentageCalc = () => {
    if (props.withNdfl) {
      let calc: any = Math.trunc(props.initialValue * 14.9423 / 100)
      return calc;
    } else {
      let calc: any = Math.trunc(props.initialValue * 13 / 100)
      return calc;
    }
  }
  const setCompanyPayment = () => {
    if (props.withNdfl) {
      let calc: any = Math.trunc(props.initialValue * 14.9423 / 100)
      return props.initialValue + calc;
    } else {
      return props.initialValue;
    }
  }
  return (
    <div className={props.boxVisibility ? "box-salary" : "box-salary__hidden"}>
      <p>
        <span className="box-salary__salary">
          {setUserSalary()} <FontAwesomeIcon icon={faRubleSign} />
        </span>{" "}
        сотрудник будет получать на руки
      </p>
      <p>
        <span className="box-salary__salary">
          {percentageCalc()} <FontAwesomeIcon icon={faRubleSign} />
        </span>{" "}
        НДФЛ, 13% от оклада
      </p>
      <p>
        <span className="box-salary__salary">
          {setCompanyPayment()} <FontAwesomeIcon icon={faRubleSign} />
        </span>{" "}
        за сотрудника в месяц
      </p>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { salary } = state;
  return {
    salary: salary,
  };
}
const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    changeSalary: changeSalary,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SalaryBox);