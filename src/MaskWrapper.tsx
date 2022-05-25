interface Props {
  children: React.ReactNode;
  positionStyle: MaskStyle | undefined | {};
}
const MaskWrapper = ({ positionStyle = {}, ...others }: Props) => (
  <div
    style={{
      position: 'absolute',
      zIndex: '-1',
      transition: '400ms',
      ...positionStyle,
    }}
    {...others}
  />
);
export default MaskWrapper;
