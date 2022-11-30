import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";


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
    let categories = <h2>hello</h2>
    let categories2 = <h2>world</h2>
    return (
        <div
        style={{
            // marginLeft: "40%",
            background: "#fffff",
            borderTop: "1px solid white"
        }}
        >
            
                <MuiThemeProvider theme={theme}>
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
                            label="Cart" 
                            key='0' 
                        />
                        <Tab label="Buget Buddy" key='1' />
                    </Tabs>
                    {value == 0 ? categories : ""}
                    {value == 1 ? categories2 : ""}
                </MuiThemeProvider>
           
       
        </div>
    )
}
export default UserAccNavbar