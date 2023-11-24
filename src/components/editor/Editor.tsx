import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';

export const Editor: React.FC = () => {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');

  return (
    <div data-color-mode="light">
      <MDEditor height={600} value={value} onChange={(val) => setValue(val)}></MDEditor>
    </div>
  );
};
