"use client";

import Error from "next/error";
import { useEffect } from "react";

type Props = {
  error: Error & { diget?: string };
  reset: () => void;
};

export default function error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong !</h2>
      <button onClick={() => reset()}>try again !</button>
    </div>
  );
}
