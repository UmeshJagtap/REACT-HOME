// React 19 introduces a new experimental API called use, designed to read the value of resources like Promises or context within the render function.
// This allows for cleaner and more concise code when dealing with asynchronous data fetching or state management.

import { Suspense, useState } from 'react';

async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  // https://jsonplaceholder.typicode.com/
  console.log(response.json());
  return await response.json();
}

export default function Cards() {
  const data = use(fetchData);
  return (
    <>
      <Suspense fallback={<div>Loading Data...</div>}>
        <div>
          <h1>My Data</h1>
          <p>{data.message}</p>
        </div>
      </Suspense>
    </>
  );
}
