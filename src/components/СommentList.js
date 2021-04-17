import React from "react";
import st from "../styles/style.module.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

const СommentList = ({ items }) => {
  return (
    <>
      <ul className={st.comment__list}>
        {items.map((item) => (
          <li key={item._id} className={st.comment__item}>
            <Paper elevation={3}>
              <p className={st.name__title}>
                <span>&#128220;</span>
                {item.name}
              </p>
              <Box fontStyle="italic">
                <p className={st.comment__title}>{item.comment}</p>
              </Box>
            </Paper>
          </li>
        ))}
      </ul>
    </>
  );
};

export default СommentList;
