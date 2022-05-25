import { forwardRef } from 'react';

interface Props {
  children: React.ReactNode;
}
const ItemWrapper = forwardRef<HTMLLIElement, Props>((props, ref) => (
  <li ref={ref} {...props} />
));

export default ItemWrapper;
