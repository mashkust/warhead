import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Menu = ({ setIsClose, setIsTable, setIsDepth }) => {
    const clickCloseHandler = () => {
        setIsClose(true);
    };
    const clickTableHandler = () => {
        setIsClose(false);
        setIsDepth(false);
        setIsTable(true);
    };
    const clickDepthHandler = () => {
        setIsClose(false);
        setIsTable(false);
        setIsDepth(true);
    };
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={clickTableHandler}>Таблица разделения</Button>
            <Button>Толщина ГО</Button>
            <Button>Эскиз ГО</Button>
            <Button onClick={clickCloseHandler}>
                <CloseOutlinedIcon />
            </Button>
            <Button disabled>
                <DownloadIcon />
            </Button>
            <Button disabled>
                <InfoOutlinedIcon />
            </Button>
        </ButtonGroup>
    );
};

export default Menu;
