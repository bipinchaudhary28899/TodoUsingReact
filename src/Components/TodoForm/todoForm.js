import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      status,
      startDate,
      endDate,
      email,
      category,
    });
    console.log({
      title,
      description,
      status,
      startDate,
      endDate,
      email,
      category,
    });
    // Reset form fields
    setTitle("");
    setDescription("");
    setStatus("");
    setStartDate("");
    setEndDate("");
    setEmail("");
    setCategory("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title" style={{ marginBottom: "15px" }}>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description" style={{ marginBottom: "15px" }}>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="status" style={{ marginBottom: "15px" }}>
        <Form.Label>Status:</Form.Label>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="InProgress">InProgress</option>
          <option value="New">New</option>
          <option value="Completed">Completed</option>
          <option value="OnHold">OnHold</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="startDate" style={{ marginBottom: "15px" }}>
        <Form.Label>Start Date:</Form.Label>
        <Form.Control
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="endDate" style={{ marginBottom: "15px" }}>
        <Form.Label>End Date:</Form.Label>
        <Form.Control
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="email" style={{ marginBottom: "15px" }}>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="category" style={{ marginBottom: "15px" }}>
        <Form.Label>Category:</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <div className="text-center mt-3 mb-3">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
