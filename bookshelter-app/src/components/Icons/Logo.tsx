import { SVGprop } from '../../types';
const LogoPage = ({ width, height }: SVGprop) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="21"
        y="22"
        width="27"
        height="22"
        fill="#0D75FF"
        fillOpacity="0.8"
      />
      <rect y="11" width="27" height="22" fill="#0D75FF" fillOpacity="0.9" />
      <rect x="27" width="27" height="22" fill="#0D75FF" />
    </svg>
  );
};

export default LogoPage;
