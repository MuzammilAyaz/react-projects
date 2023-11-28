import React from "react";
import Form from "react-jsonschema-form";

const schema = {
    type: "object",
    properties: {
      name: { type: "string", title: "Name" },
      age: { type: "number", title: "Age" }
    }
  };
  
  const MyForm = () => {
    return (
      <Form schema={schema} onSubmit={console.log}>
        <button type="submit">Submit</button>
      </Form>
    );
  };
  
  export default MyForm;
  