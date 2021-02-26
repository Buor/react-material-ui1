import {
    AppBar,
    Badge,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Toolbar,
} from "@material-ui/core";
import React from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ApartmentIcon from "@material-ui/icons/Apartment";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
    },
    searchInput: {
        opacity: "0.6",
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: "0.8rem",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        },
        "& .MuiSvgIcon-root": {
            marginRight: theme.spacing(1),
        },
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid itemstyle={{ border: "1px solid #fff" }}>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize={"small"} />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <ApartmentIcon fontSize={"small"} />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize={"small"} />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
