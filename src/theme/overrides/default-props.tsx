import { Theme } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

const ArrowDownIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z" />
  </SvgIcon>
);

/**
 * Checkbox
 */
const CheckboxIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z" />
  </SvgIcon>
);

const CheckboxCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z" />
  </SvgIcon>
);

const CheckboxIndeterminateIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z" />
  </SvgIcon>
);

/**
 * Radio
 */
const RadioIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z" />
  </SvgIcon>
);

const RadioCheckedIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
  </SvgIcon>
);

/**
 * Rating
 */
const RatingIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z" />
  </SvgIcon>
);

/**
 * Chip
 * https://icon-sets.iconify.design/solar/close-circle-bold
 */
const ChipDeleteIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </SvgIcon>
);

/**
 * Alert
 */
/* https://icon-sets.iconify.design/solar/danger-bold */
const AlertErrorIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.843 3.802C9.872 2.601 10.886 2 12 2c1.114 0 2.128.6 4.157 1.802l.686.406c2.029 1.202 3.043 1.803 3.6 2.792c.557.99.557 2.19.557 4.594v.812c0 2.403 0 3.605-.557 4.594c-.557.99-1.571 1.59-3.6 2.791l-.686.407C14.128 21.399 13.114 22 12 22c-1.114 0-2.128-.6-4.157-1.802l-.686-.407c-2.029-1.2-3.043-1.802-3.6-2.791C3 16.01 3 14.81 3 12.406v-.812C3 9.19 3 7.989 3.557 7c.557-.99 1.571-1.59 3.6-2.792zM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/info-fill */
const AlertInfoIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/checkmark-circle-2-fill */
const AlertSuccessIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/alert-triangle-fill */
const AlertWarningIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill="currentColor"
      d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z"
    />
  </SvgIcon>
);

/**
 * DataGrid
 */
/* https://icon-sets.iconify.design/solar/alt-arrow-up-bold-duotone */
const DataGridArrowUpIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="m8.303 11.596l3.327-3.431a.499.499 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723z"
    />
    <path
      fill="currentColor"
      d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482z"
      opacity="0.5"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/alt-arrow-down-bold-duotone */
const DataGridArrowDownIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z"
    />
    <path
      fill="currentColor"
      d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z"
      opacity="0.5"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/filter-bold */
const DataGridFilterIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986c.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683c.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/export-bold */
const DataGridExportIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.845 7.905a.75.75 0 0 0 1.06 0l1.72-1.72v8.19a.75.75 0 0 0 1.5 0v-8.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12.375 20.375a8 8 0 0 0 8-8h-3.75c-.943 0-1.414 0-1.707.293c-.293.293-.293.764-.293 1.707a2.25 2.25 0 0 1-4.5 0c0-.943 0-1.414-.293-1.707c-.293-.293-.764-.293-1.707-.293h-3.75a8 8 0 0 0 8 8"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/solar/eye-bold */
const DataGridEyeIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
      clipRule="evenodd"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/ph/eye-closed-bold */
const DataGridEyeCloseIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.606 6.08a1 1 0 0 1 1.313.526L2 7l.92-.394v-.001c0-.001 0 0 0 0l.003.009l.021.045c.02.042.051.108.094.194c.086.172.219.424.4.729a13.37 13.37 0 0 0 1.67 2.237a11.966 11.966 0 0 0 .59.592C7.18 11.8 9.251 13 12 13a8.706 8.706 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998a13.053 13.053 0 0 0 2.733-3.725l.027-.058l.005-.011a1 1 0 0 1 1.838.788L22 7l.92.394l-.003.005l-.004.008l-.011.026l-.04.087a14.045 14.045 0 0 1-.741 1.348a15.368 15.368 0 0 1-1.711 2.256l.797.797a1 1 0 0 1-1.414 1.415l-.84-.84a11.81 11.81 0 0 1-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797a15.406 15.406 0 0 1-1.87-2.519a13.457 13.457 0 0 1-.591-1.107a5.418 5.418 0 0 1-.033-.072l-.01-.021l-.002-.007l-.001-.002v-.001C1.08 7.395 1.08 7.394 2 7l-.919.395a1 1 0 0 1 .525-1.314"
      clipRule="evenodd"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/search-fill */
const DataGridSearchIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/eva/close-fill */
const DataGridCloseIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/mingcute/more-1-fill */
const DataGridMoreIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="currentColor"
        d="M5 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
      />
    </g>
  </SvgIcon>
);

/* https://icon-sets.iconify.design/material-symbols/table-rows-narrow-rounded */
const DataGridDensityCompactIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <path
      fill="currentColor"
      d="M4 15.5q-.425 0-.712-.288T3 14.5V14q0-.425.288-.712T4 13h16q.425 0 .713.288T21 14v.5q0 .425-.288.713T20 15.5zM4 11q-.425 0-.712-.288T3 10v-.5q0-.425.288-.712T4 8.5h16q.425 0 .713.288T21 9.5v.5q0 .425-.288.713T20 11zm0-4.5q-.425 0-.712-.288T3 5.5V5q0-.425.288-.712T4 4h16q.425 0 .713.288T21 5v.5q0 .425-.288.713T20 6.5zM4 20q-.425 0-.712-.288T3 19v-.5q0-.425.288-.712T4 17.5h16q.425 0 .713.288T21 18.5v.5q0 .425-.288.713T20 20z"
    />
  </SvgIcon>
);

/* https://icon-sets.iconify.design/mingcute/rows-2-fill */
const DataGridDensityComfortableIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="currentColor"
        d="M5 3a2 2 0 0 0-2 2v6h18V5a2 2 0 0 0-2-2zm16 10H3v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
      />
    </g>
  </SvgIcon>
);

/* https://icon-sets.iconify.design/mingcute/rows-4-fill */
const DataGridDensityStandardIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ width: 20, height: 20, ...props.sx }} {...props}>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      <path
        fill="currentColor"
        d="M21 16v3a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19v-3zm0-6v4H3v-4zm-2-7a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2z"
      />
    </g>
  </SvgIcon>
);

// ----------------------------------------------------------------------

export function defaultProps(theme: Theme) {
  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <AlertErrorIcon />,
          info: <AlertInfoIcon />,
          success: <AlertSuccessIcon />,
          warning: <AlertWarningIcon />,
        },
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
    },
    MuiAvatarGroup: {
      defaultProps: {
        max: 4,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'inherit',
        disableElevation: true,
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: {
          variant: 'body2',
          marginTop: theme.spacing(0.5),
        },
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: <ChipDeleteIcon />,
      },
    },
    MuiDialogActions: {
      defaultProps: {
        disableSpacing: true,
      },
    },
    MuiFab: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          typography: 'subtitle2',
        },
        secondaryTypographyProps: {
          component: 'span',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
        variant: 'rounded',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        component: 'div',
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: 'start',
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: 'inherit',
        variant: 'scrollable',
        allowScrollButtonsMobile: true,
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: 'small',
        },
        nextIconButtonProps: {
          size: 'small',
        },
      },
    },
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <ArrowDownIcon />,
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ArrowDownIcon,
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        IconComponent: ArrowDownIcon,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
        icon: <RadioIcon />,
        checkedIcon: <RadioCheckedIcon />,
      },
    },
    MuiRating: {
      defaultProps: {
        emptyIcon: <RatingIcon />,
        icon: <RatingIcon />,
      },
    },
    MuiDataGrid: {
      defaultProps: {
        slots: {
          /* Column */
          columnSortedAscendingIcon: (props: SvgIconProps) => (
            <DataGridArrowUpIcon sx={{ color: 'text.primary' }} {...props} />
          ),
          columnSortedDescendingIcon: (props: SvgIconProps) => (
            <DataGridArrowDownIcon sx={{ color: 'text.primary' }} {...props} />
          ),
          columnUnsortedIcon: (props: SvgIconProps) => (
            <DataGridArrowUpIcon
              fontSize={props.fontSize}
              className={props.className}
              sx={{ color: 'text.disabled' }}
            />
          ),
          columnMenuIcon: (props: SvgIconProps) => <DataGridMoreIcon width={20} {...props} />,
          columnMenuSortAscendingIcon: (props: SvgIconProps) => <DataGridArrowUpIcon {...props} />,
          columnMenuSortDescendingIcon: (props: SvgIconProps) => (
            <DataGridArrowDownIcon {...props} />
          ),
          columnMenuFilterIcon: (props: SvgIconProps) => <DataGridFilterIcon {...props} />,
          columnMenuHideIcon: (props: SvgIconProps) => <DataGridEyeCloseIcon {...props} />,
          columnMenuManageColumnsIcon: (props: SvgIconProps) => <DataGridEyeIcon {...props} />,
          columnSelectorIcon: (props: SvgIconProps) => <DataGridEyeIcon {...props} />,
          /* Filter */
          filterPanelDeleteIcon: (props: SvgIconProps) => <DataGridCloseIcon {...props} />,
          openFilterButtonIcon: (props: SvgIconProps) => <DataGridFilterIcon {...props} />,
          columnFilteredIcon: (props: SvgIconProps) => (
            <DataGridFilterIcon sx={{ width: 16, color: 'text.primary' }} {...props} />
          ),
          /* Density */
          densityCompactIcon: (props: SvgIconProps) => <DataGridDensityCompactIcon {...props} />,
          densityStandardIcon: (props: SvgIconProps) => <DataGridDensityStandardIcon {...props} />,
          densityComfortableIcon: (props: SvgIconProps) => (
            <DataGridDensityComfortableIcon {...props} />
          ),
          /* Export */
          exportIcon: (props: SvgIconProps) => <DataGridExportIcon {...props} />,
          /*  Quick Filter */
          quickFilterIcon: (props: SvgIconProps) => (
            <DataGridSearchIcon
              sx={{ width: 24, height: 24, color: 'text.secondary' }}
              {...props}
            />
          ),
          quickFilterClearIcon: (props: SvgIconProps) => <DataGridCloseIcon {...props} />,
        },
        slotProps: {
          basePopper: { placement: 'bottom-end' },
          baseChip: { size: 'small' },
          baseSwitch: { size: 'small' },
          baseCheckbox: { size: 'small' },
          baseTextField: {
            size: 'small',
            variant: 'outlined',
            InputLabelProps: { shrink: true },
          },
          baseFormControl: {
            size: 'small',
            variant: 'outlined',
          },
          baseSelect: {
            size: 'small',
            variant: 'outlined',
          },
        },
      },
    },
  };
}
