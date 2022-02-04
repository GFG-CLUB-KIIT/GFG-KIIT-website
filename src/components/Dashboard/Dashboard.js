import "./dashboard.css";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Himanshu from "../../profile/HimanshuMishra.jpeg";
import Accordion from "./Accordion";
import AddEvents from "./AddEvents";
//  background: rgba(0, 188, 54, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(1.5px);
//   -webkit-backdrop-filter: blur(1.5px);
//   border-left: 10px solid rgba(27, 77, 4, 0.514);

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

function Dashboard() {
  return (
    <>
      <div className="admin-db-container">
        <div className="admin-db-gfg-vertical-line1"></div>
        <div className="admin-db-gfg-vertical-line2"></div>
        <div className="admin-db-gfg-vertical-line3"></div>
        <div className="admin-db-gfg-vertical-line4"></div>
        <div className="admin-db-gfg-vertical-line5"></div>
        <div className="admin-db-gfg-vertical-line6"></div>
        <div className="admin-db-gfg-vertical-line7"></div>
        <div className="admin-db-gfg-vertical-line8"></div>
        <div className="admin-db-gfg-vertical-line9"></div>
        <div className="admin-db-gfg-vertical-line10"></div>
        {/* Navigation bar */}
        <div className="admin-db-navigation">
          <div className="admin-db-profilePic">
            <img src={Himanshu} alt="Profile Pic" />
            <div className="admin-db-name">Himanshu Mishra</div>
          </div>

          <ul>
            <li className="admin-db-active-li">
              <a href="#">
                <span className="admin-db-icon">
                  <DiamondIcon />
                </span>
                <span className="admin-db-title">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="admin-db-icon">
                  <DiamondIcon />
                </span>
                <span className="admin-db-title">GFG KIIT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="admin-db-icon">
                  <DiamondIcon />
                </span>
                <span className="admin-db-title">GFG KIIT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="admin-db-icon">
                  <DiamondIcon />
                </span>
                <span className="admin-db-title">GFG KIIT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="admin-db-icon">
                  <DiamondIcon />
                </span>
                <span className="admin-db-title">GFG KIIT</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Search bar */}

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

        <Accordion />
        <AddEvents />
      </div>
    </>
  );
}

export default Dashboard;
