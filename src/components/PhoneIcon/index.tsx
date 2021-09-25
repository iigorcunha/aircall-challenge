interface PhoneIconProps {
  call_type: 'missed' | 'answered' | 'voicemail';
  direction: 'inbound' | 'outbound';
}

export const PhoneIcon = ({ call_type, direction }: PhoneIconProps) => {
  const currentColor =
    call_type === 'missed'
      ? '#F40909'
      : call_type === 'answered'
      ? '#2AC420'
      : '';

  return (
    <div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M22.079 17.835C20.531 16.511 18.96 15.709 17.431 17.031L16.518 17.83C15.85 18.41 14.608 21.12 9.806 15.596C5.005 10.079 7.862 9.22 8.531 8.645L9.449 7.845C10.97 6.52 10.396 4.852 9.299 3.135L8.637 2.095C7.535 0.382 6.335 -0.742999 4.81 0.580001L3.986 1.3C3.312 1.791 1.428 3.387 0.970999 6.419C0.420999 10.057 2.156 14.223 6.131 18.794C10.101 23.367 13.988 25.664 17.67 25.624C20.73 25.591 22.578 23.949 23.156 23.352L23.983 22.631C25.504 21.309 24.559 19.963 23.01 18.636L22.079 17.835Z"
            fill="#C7C7C7"
          />
          {direction === 'outbound' ? (
            <>
              <rect
                x="19"
                y="13"
                width="2"
                height="9"
                transform="rotate(-180 19 13)"
                fill={currentColor}
              />
              <path
                d="M18 1L13.6699 4.75L22.3301 4.75L18 1Z"
                fill={currentColor}
              />
            </>
          ) : (
            <>
              <rect x="17" y="1" width="2" height="9" fill={currentColor} />
              <path
                d="M18 13L22.3301 9.25H13.6699L18 13Z"
                fill={currentColor}
              />
            </>
          )}
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="25.625" height="25.625" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
