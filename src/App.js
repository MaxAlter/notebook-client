import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import CommentList from "./components/СommentList";
import { getAllUser, postNewUser } from "./api";

import Container from "@material-ui/core/Container";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllUser().then((data) => {
      setItems(data);
    });
  }, []);

  const onSubmit = async (user) => {
    await postNewUser(user);
    getAllUser().then((data) => setItems(data));
  };

  return (
    <>
      <Container maxWidth="md">
        <Form onSubmit={onSubmit} />
        <CommentList items={items} />
      </Container>
    </>
  );
}


