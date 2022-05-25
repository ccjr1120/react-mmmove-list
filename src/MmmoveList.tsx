import getStyle from './utils/getStyle';
import { css } from '@emotion/react';
import React, { useRef, useState, useLayoutEffect } from 'react';
import ItemWrapper from './ItemWrapper';
import MaskWrapper from './MaskWrapper';

interface Props {
  children: React.ReactNode;
  childIndex?: number;
  /**
   * 无论如何，这个组件的宽高以及都会等于当前子元素的宽高
   */
  MaskCompomemt: Function;
  direction?: 'row' | 'column';
  padding?: number | paddingTypes;
  margin?: number | marginTypes;
  space?: number;
}

const MmmoveList = (props: Props) => {
  const {
    children,
    childIndex,
    direction = 'row',
    padding = 0,
    margin = 0,
    MaskCompomemt,
  } = props;
  const style = getStyle({ direction, padding, margin });
  const maskStyleList = useRef<Array<MaskStyle>>([
    { top: '1', left: '1', width: '1', height: '1' },
  ]);
  const getRef = (index: number) => {
    return (ref: HTMLLIElement) => {
      if (ref) {
        const {
          offsetTop: top,
          offsetLeft: left,
          clientHeight: height,
          clientWidth: width,
        } = ref;
        maskStyleList.current[index] = {
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`,
        };
      }
    };
  };
  const [maskStyle, setMaskStyle] = useState<MaskStyle>();
  useLayoutEffect(() => {
    setMaskStyle(maskStyleList.current[childIndex || 0]);
  }, [childIndex]);
  return (
    <ul
      css={css`
        ${style}
      `}
    >
      <MaskWrapper positionStyle={maskStyle}>
        <MaskCompomemt />
      </MaskWrapper>
      {React.Children.map(children, (child, index) => (
        <ItemWrapper ref={getRef(index)}>{child}</ItemWrapper>
      ))}
    </ul>
  );
};

export default MmmoveList;
