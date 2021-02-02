import * as React from "react";
import { faInfo, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import "./MrotPopover.css";
import store from "../../redux/store";

interface IProps {
  radioChecked: string;
}

export const MrotPopover: React.FC<IProps> = (props: IProps) => {
  const [close, setClose] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [click, setClick] = React.useState(false);
  React.useEffect(() => {
    store.subscribe(() => {
      setClick(false);
    })
  }, [])
  const popover = (
    <Popover id="button-tooltip">
      <Popover.Content className="popover-body_violet">
        МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
      </Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger
      placement="right"
      overlay={popover}
      show={click ? true : hover}
    >
      <Button
        className="button-radius"
        onClick={() => {!click ? setClick(true) : setClick(false)}}
      onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FontAwesomeIcon className="button-radius__icon" icon={click ? faTimes : faInfo} />
      </Button>
    </OverlayTrigger>
  );
};
