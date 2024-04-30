## To dos

- [ ] Add new components to the home screen

```bash
/components/screens/Home
```

- [ ] Replace favicon icon
- [ ] styling

  - using material ui styled :

  ```javascript
  import { styled } from "@mui/material/styles";
  ```

  ```javascript
  const MyMUIDiv = styled("div")(({ theme }) => ({
    width: "100%",
    minHeight: "450px",
    borderRadius: "50%",
    backgroundColor: theme.backgroundColor, // it is not compulsory to use theme but it is best for cases when we want to able to dynamically change our css based on a theme e.g dark mode
  }));
  ```

  ### Usage as component

  ```javascript
  return (
    <MyMUIDiv>
      <h1>My parent is a MUI styled div tag</h1>
    </MyMUIDiv>
  );
  ```

### Implementation Approaches Video

- hint : click download if it doesn't play

[![Watch the video](https://i.stack.imgur.com/Vp2cE.png)](https://drive.google.com/file/d/1HVKZ2EYjkMOqwJ1x8WAaN2RFaWu_GOP-/view?usp=sharing)
