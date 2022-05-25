interface StyleProps {
  direction: 'row' | 'column';
  margin: number | marginTypes;
  padding: number | paddingTypes;
}

const getStyle = ({ direction, margin, padding }: StyleProps) => {
  const marginStyle =
    typeof margin === 'number'
      ? `${margin}px`
      : `${margin.top || 0}px ${margin.right || 0}px ${margin.bottom || 0}px ${
          margin.left || 0
        }px`;

  const paddingStyle =
    typeof padding === 'number'
      ? `${padding}px`
      : `${padding.top || 0}px ${padding.right || 0}px ${
          padding.bottom || 0
        }px ${padding.left || 0}px`;

  const style = `
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};
    margin: ${marginStyle};
    padding: ${paddingStyle};
  `;
  return style;
};

export default getStyle;
