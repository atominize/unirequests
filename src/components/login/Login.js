import {
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "../../styles";

const Login = () => {
  const classes = useStyles();

  const [isNewUser, setIsNewUser] = useState(true);

  const handleSwitch = (e) => {
    setIsNewUser(e.target.checked);
  };

  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <form align="center">
            <TextField variant="outlined" required label="please enter email" />
            <TextField
              variant="outlined"
              required
              label="please enter password"
            />
            {isNewUser && (
              <TextField
                variant="outlined"
                required
                label="please confirm password"
              />
            )}
            <Container className={classes.container}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Is this your first time here?
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={isNewUser} onChange={handleSwitch} />
                      }
                      label="Yes"
                    />
                  </FormGroup>
                </FormLabel>
              </FormControl>
            </Container>
          </form>
        </Container>
      </div>
    </main>
  );
};

export default Login;
