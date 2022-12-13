import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BudgetList from "./BudgetList";



const NavbarBottom = () => {
    const [value, setValue] = React.useState();
    const themes = createTheme({
        overrides: {
          MuiTabs: {
            root: {
              backgroundColor: "#24272B"
            },
            indicator: {
              backgroundColor: '#0d6efd'
            }
          },
          MuiTab: {
            root: {
              "&$selected": {
                color: "#0d6efd",
      
                "&:hover": {
                  color: "#0d6efd"
                }
              }
            },
            wrapper: {
              color: "#0d6efd"
            }
          }
        }
      });
    let categories = 
      <div className="categoriesContainer">
        <ul>
          <li className="catAll">
            <Link to="/Scategory">
              <span > Specials</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/Ecategory">
              <span > Electronics</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/Hcategory">
              <span>Home Goods</span> 
            </Link>
          </li>
        </ul>
        <ul>
          <li className="catAll">
            <Link to="/NotAvalible">
              <span > Pets</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/Bcategory">
              <span >Beauty</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/Tcategory">
              <span>Toys</span> 
            </Link>
          </li>
        </ul>
        <ul>
          <li className="catAll">
            <Link to="/NotAvalible">
              <span > Gardening</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/NotAvalible">
              <span > Seasonal</span> 
            </Link>
          </li>
          <li className="catAll">
            <Link to="/NotAvalible">
              <span>Organization</span> 
            </Link> 
          </li>
        </ul>
      </div>
    let categories2 = 
      <div className="categoriesContainer">
        <div className="bbInstructions">
          <h4><strong>Instructions:</strong></h4>
          <h6>Step 1: Enter desired budget amount</h6>
          <h6>Step 2: Browse the store and add items to BudgetBuddy</h6>
          <h6>Once you have all the desired items go back check if <br/> they are within budget and continue to check out</h6>
          <h5>Thank you for trying BudgetBuddy</h5>
        </div>
        <BudgetList color={"white"}/>
      </div>
    // let categories3 = <h2>hello world</h2>
    return (
        <div
        style={{
            // marginLeft: "40%",
            background: "#183e4b",
            borderTop: "1px solid white"
        }}
        >
            <Paper square>
                <MuiThemeProvider theme={themes}>
                    <Tabs
                        value={value}
                        textColor="primary"
                        indicatorColor="primary"
                        centered
                        variant="fullWidth"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <Tab label="Categories"  />
                        <Tab label="Budget Buddy" />
                        {/* <Tab label="Barcode Scanner" /> */}
                    </Tabs>
                    {value == 0 ? categories : ""}
                    {value == 1 ? categories2 : ""}
                    {/* {value == 2 ? categories3 : ""} */}
                </MuiThemeProvider>
            </Paper>
       
        </div>
    )
}

export default NavbarBottom