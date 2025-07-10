import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState }  from "react";
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

  // Single state object for all form fields
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  // Handle input changes for all fields dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData, // Keep existing form data
      [name]: value // Update the specific field by its name
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ // Reset formData to initial empty state
        fullname: '',
        email: '',
        message: ''
      });
      // Optionally, show a success message that disappears after some time
      // For instance, a simple way to clear the alert after 3 seconds:
      // const timer = setTimeout(() => {
      //   // Assuming Formspree state doesn't persist, or you might need to manually clear it
      //   // For a persistent success message, you'd manage a separate `showAlert` state.
      // }, 3000);
      // return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

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
            value={formData.fullname}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.message}
            onChange={handleInputChange}
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
