import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Menu = ({ setIsImg, setIsTable, setIsDepth, setIsSupport }) => {
  const clickCloseHandler = () => {
    setIsTable(false);
    setIsDepth(false);
    setIsImg(false);
    setIsSupport(false);
  };
  const clickTableHandler = () => {
    clickCloseHandler();
    setIsTable(true);
  };
  const clickDepthHandler = () => {
    clickCloseHandler();
    setIsDepth(true);
  };
  const clickImgHandler = () => {
    clickCloseHandler();
    setIsImg(true);
  };
  const clickSupportHandler = () => {
    clickCloseHandler();
    setIsSupport(true);
  };
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={clickTableHandler}>Таблица разведения</Button>
      <Button onClick={clickDepthHandler}>Параметры ГО</Button>
      <Button onClick={clickImgHandler}>Компоновка ББ</Button>
      <Button onClick={clickCloseHandler}>
        <CloseOutlinedIcon />
      </Button>
      <Button disabled>
        <DownloadIcon />
      </Button>
      <Button onClick={clickSupportHandler}>
        <InfoOutlinedIcon />
      </Button>
    </ButtonGroup>
  );
};

export default Menu;
