import { createRoot } from 'react-dom/client';
import MmmoveList from './MmmoveList';
import { css } from '@emotion/react';
import { useState } from 'react';

const Test = () => {
  const [curIndex, setCurIndex] = useState(0);
  return (
    <div
      css={css`
        width: 50vw;
        height: 50vh;
        margin: 10% auto;
      `}
    >
      <MmmoveList
        childIndex={curIndex}
        MaskCompomemt={() => (
          <div
            css={css`
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: #327bfa;
            `}
          />
        )}
      >
        {new Array(30).fill(0).map((_, i) => (
          <div
            key={i}
            css={css`
              cursor: pointer;
              padding: 20px;
            `}
            onClick={() => {
              setCurIndex(i);
            }}
          >
            {`item${i}`}
          </div>
        ))}
      </MmmoveList>
    </div>
  );
};

const rootNode = document.getElementById('root');
const root = createRoot(rootNode as HTMLElement);
root.render(<Test />);
