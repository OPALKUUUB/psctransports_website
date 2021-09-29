import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Suggestion.css";

export default function Suggestion() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <div className="Suggest">
      <div className="Suggest-head">
        <h1>Suggestion Us</h1>
      </div>
      <div className="Suggest-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First name" />
          <input {...register("lastName")} placeholder="Last name" />
          <input {...register("email")} placeholder="Email" />
          <textarea
            {...register("suggestion")}
            placeholder="Suggestion Us"
            rows="4"
          />
          <p>{result}</p>
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
