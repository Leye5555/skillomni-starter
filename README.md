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
    backgroundColor: theme.backgroundColor,
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
