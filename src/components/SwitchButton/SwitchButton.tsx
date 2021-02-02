import * as React from "react";
import "./SwitchButton.css";
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCheckState } from '../../redux/actions/changeCheckState';

interface IProps {
  checked?: boolean;
  getCheckedState: (e: boolean) => any;
}

export const SwitchButton: React.FC<IProps> = (props: IProps) => {
  const [checked, setChecked] = React.useState(null);
  const [firstClick, setFirstClick] = React.useState(true);

  const isChecked = (e: any) => {
    setFirstClick(!firstClick);
    setChecked(e.target.checked);
    props.getCheckedState(Boolean(e.target.checked));
  }
  return (
    <div className="switch-wrap">
      <div className="switch-left">
        <span className={firstClick ? "switch-label" :  "switch-label_active"}>Указать с НДФЛ</span>
      </div>
      <div className="custom-control custom-switch switch-right">
        <input
          type="checkbox"
          className="custom-control-input switch-control-input"
          id="switch"
          checked={firstClick}
          onChange={(e) => isChecked(e)}
        />
        <label className={firstClick ? "custom-control-label switch-label_active" :  "custom-control-label switch-label"} htmlFor="switch">
          Без НДФЛ
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const {
    isChecked,
  } = state;
  return {
    isChecked: isChecked,
  };
}
const matchDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    changeCheckState: changeCheckState,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SwitchButton);