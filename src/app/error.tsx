"use client";

import Button from "@/components/Button";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="grid place-items-center">
      <h1 className="h2">Something went wrong, please try again</h1>
      <Button onClick={reset} label="Try Again" className="mt-3" />
    </div>
  );
};

export default ErrorComponent;
