import * as React from 'react';

export default function MyReact(props: any) {
  return (
    <div>
      <h1>Hello "{props.name}"!</h1>
    </div>
  );
}