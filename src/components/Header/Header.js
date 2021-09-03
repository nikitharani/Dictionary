import React from "react";
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./Header.css";
import categories from "../../data/category";


const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  //   const handleChange = (event) => {
  //     setCategory(event.target.value);
  //   };
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  // const handleChange1 = (event) => {
  //   setWord(event.target.value);
  // };

  return (
    <div className="header">
      <span className="title"> {word? word:"Word Hunt" }</span>
      <p>Hello {category}</p>
      <div className="inputs">
      <ThemeProvider theme={darkTheme} >
        <TextField className="search" id="standard-basic" value={word}
          onChange={(e)=> setWord(e.target.value) } label="Search a Word" />
        <TextField
          select
          className="select"
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
          // onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
