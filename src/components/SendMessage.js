import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { postMessage } from "../ajax-requests";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import './style.css'

const styles = {
  fontFamily: "Roboto",
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #ccc',
  },
};

function SendMessage({ posts, token, navigate }) {
  const { postId } = useParams();
  const [post] = posts.filter((post) => post._id === postId);
  const [content, setContent] = useState("");
  const receiver = window.frames["receiver"];
  const [open, setOpen] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = { content };

    const results = await postMessage(postId, message, token);
    if (results.success) {
      setContent("");
      navigate("/");
      setOpen(false);
    } else {
      window.alert("Message failed to send, please try again.");
    }
  };

  const handleCancel = async (event) => {
    event.preventDefault();
    navigate('/');
  };

  const handleFormClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}  onClick={handleFormClick}>
      {post ? (
        <>
          <DialogTitle style={styles}>
            Message owner of "{post.title}":
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit} style={styles.form}>
              <label htmlFor="content" style={styles.label}>{" "}
              </label>
              <input
                type="text"
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                style={styles.input}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
              Send
            </Button>
          </DialogActions>
        </>
      ) : (
        <h3 style={styles}>Loading...</h3>
      )}
    </Dialog>
  );
}

export default SendMessage;