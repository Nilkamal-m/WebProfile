import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const [state, handleSubmit] = useForm("mwkalpga");

  return (
    <Paper>
      <div className="right-paper-cont">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">Contact</Typography>
        </div>
      </div>
      <Container maxWidth="sm">
        {state.submitting ? (
          <div className={classes.root}>
            <Alert severity="success">Message Send Successfully !</Alert>
          </div>
        ) : null}
        <form name="contact-form" className="container" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "30px" }}
            id="fullname"
            name="fullname"
            required
          />
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "30px" }}
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <TextField
            label="Message"
            placeholder="Enter Your Message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            style={{ marginBottom: "30px" }}
            id="message"
            name="message"
          />
          <button
            className="btn"
            color="primary"
            variant="contained"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </form>
      </Container>
    </Paper>
  );
};
