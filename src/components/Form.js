import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ name: "", comment: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });

    console.log({ [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (state.name === "" || state.comment === "") return;
    onSubmit({ ...state });

    reset();
  };

  const reset = () => {
    setState({ ...state, name: "", comment: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="xs">
        <Box m={4}>
          <Box m={4}>
            <Paper elevation={4}>
              <TextField
                aling="center"
                id="outlined-basic"
                autoComplete="off"
                label="Name"
                type="name"
                name="name"
                value={state.name}
                onChange={handleChange}
                fullWidth={true}
                variant="outlined"
              />
            </Paper>
          </Box>
          <Paper elevation={4}>
            <TextField
              id="outlined-basic"
              type="comment"
              name="comment"
              autoComplete="off"
              value={state.comment}
              label="Write your comment"
              multiline
              rows={10}
              rowsMax={10}
              fullWidth={true}
              onChange={handleChange}
              variant="outlined"
            />
          </Paper>

          <Box display="flex" justifyContent="center" m={2}>
            <Button
              size="small"
              color="primary"
              type="submit"
              variant="contained"
            >
              ADD Comment
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  );
};

export default Form;

// class Form extends Component {
//   state = { name: "", comment: "" };

//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     const { name, comment } = this.state;

//     if (name === "" || comment === "") return;
//     this.props.onSubmit({ ...this.state });

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", comment: "" });
//   };

//   render() {
//     const { name, comment } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Container maxWidth="xs">
//           <Box m={4}>
//             <Box m={4}>
//               <Paper elevation={4}>
//                 <TextField
//                   aling="center"
//                   id="outlined-basic"
//                   autoComplete="off"
//                   label="Name"
//                   type="name"
//                   name="name"
//                   value={name}
//                   onChange={this.handleChange}
//                   fullWidth={true}
//                   variant="outlined"
//                 />
//               </Paper>
//             </Box>
//             <Paper elevation={4}>
//               <TextField
//                 id="outlined-basic"
//                 name="comment"
//                 autoComplete="off"
//                 value={comment}
//                 label="Write your comment"
//                 multiline
//                 rows={10}
//                 rowsMax={10}
//                 fullWidth={true}
//                 onChange={this.handleChange}
//                 variant="outlined"
//               />
//             </Paper>

//             <Box display="flex" justifyContent="center" m={2}>
//               <Button
//                 size="small"
//                 color="primary"
//                 type="submit"
//                 variant="contained"
//               >
//                 ADD Comment
//               </Button>
//             </Box>
//           </Box>
//         </Container>
//       </form>
//     );
//   }
// }

// export default Form;
