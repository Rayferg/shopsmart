import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";



const NavbarBottom = () => {
    const [value, setValue] = React.useState(0);
    const theme = createTheme({
        overrides: {
          MuiTabs: {
            root: {
              backgroundColor: "#24272B"
            },
            indicator: {
              backgroundColor: '#d74a49'
            }
          },
          MuiTab: {
            root: {
              "&$selected": {
                color: "#d74a49",
      
                "&:hover": {
                  color: "#d74a49"
                }
              }
            },
            wrapper: {
              color: "#d74a49"
            }
          }
        }
      });
    let categories = <h2>hello</h2>
    let categories2 = <h2>world</h2>
    let categories3 = <h2>hello world</h2>
    return (
        <div
        style={{
            // marginLeft: "40%",
            background: "#183e4b",
            borderTop: "1px solid white"
        }}
        >
            <Paper square>
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
                        <Tab label="Categories"  />
                        <Tab label="Budget Buddy" />
                        <Tab label="Barcode Scanner" />
                    </Tabs>
                    {value == 0 ? categories : ""}
                    {value == 1 ? categories2 : ""}
                    {value == 2 ? categories3 : ""}
                </MuiThemeProvider>
            </Paper>
       
        </div>
    )
}

export default NavbarBottom