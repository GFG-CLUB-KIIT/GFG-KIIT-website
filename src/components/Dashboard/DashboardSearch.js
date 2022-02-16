import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import "./dashboard.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";



const DashboardSearch = () => {
    const Search = styled("div")(({ theme }) => ({
      position: "relative",
      borderRadius: "40px",
      backgroundColor: "rgba(0, 188, 54, 0.15)",
      boxShadow:
        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      backdropFilter: "blur(1.5px)",
      WebkitBackdropFilter: "blur(1.5px)",
      "&:hover": {
        backgroundColor: "rgba(0, 148, 44, 0.15)",
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "12ch",
          "&:focus": {
            width: "20ch",
          },
        },
      },
    }));

  return (
    <>
      <div className="admin-db-search">
        <div className="admin-db-searchbox">
          <Search className="admin-db-search-mui">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </div>
    </>
  );
}

export default DashboardSearch