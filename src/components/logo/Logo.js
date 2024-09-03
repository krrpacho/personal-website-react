import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"  
    className={classes.svgHover}
>
    <path
        d="M4 4H8V11L15 4H19L12 12L19 20H15L8 13V20H4V4Z" 
    />
   
</svg>
    );
};
