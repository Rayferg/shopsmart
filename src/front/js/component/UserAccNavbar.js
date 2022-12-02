import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import BudgetList from "./BudgetList";
import CartList from "./CartList.js";


const UserAccNavbar = () => {
    const [value, setValue] = React.useState(0);
    const theme = createTheme({
        overrides: {
          MuiTabs: {
            root: {
              backgroundColor: "white"
            },
            indicator: {
              backgroundColor: '#fffff'
            }
          },
          MuiTab: {
            root: {
              "&$selected": {
                color: "#fffff",
      
                "&:hover": {
                  color: "#fffff"
                }
              }
            },
            wrapper: {
              color: "#fffff"
            }
          }
        }
      });
    let categories = <BudgetList color={"black"}/>
    let categories2 = <CartList />
    return (
        <div
        style={{
            // marginLeft: "40%",
            background: "#fffff",
            borderTop: "1px solid white"
        }}
        >
            
                {/* <MuiThemeProvider > */}
                    <Tabs
                        value={value}
                        textColor="secondary"
                        indicatorColor="secondary"
                        centered
                        variant="fullWidth"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <Tab 
                            label="Budget Buddy" 
                            key='0' 
                            style={{background:"white"}}
                        />
                        <Tab label="Cart" key='1' style={{background:"white"}}/>
                    </Tabs>
                    {value == 0 ? categories : ""}
                    {value == 1 ? categories2 : ""}
                {/* </MuiThemeProvider> */}
           
       
        </div>
    )
}
export default UserAccNavbar