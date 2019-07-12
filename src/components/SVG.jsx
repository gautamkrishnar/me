import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <>
      <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
      </>
    ),
    viewBox: '0 0 50 50',
  },
  circle: {
    shape: (
      <>

      <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>
      </>
    ),
    viewBox: '0 0 100 50',
  },
  arrowUp: {
    shape: (
      <>
         <path d="M 25 1.9902344 C 12.266865 1.9902344 1.9902344 12.266865 1.9902344 25 C 1.9902344 37.733135 12.266865 48.009766 25 48.009766 C 37.733135 48.009766 48.009766 37.733135 48.009766 25 C 48.009766 12.266865 37.733135 1.9902344 25 1.9902344 z M 25 4.0097656 C 36.650865 4.0097656 45.990234 13.349135 45.990234 25 C 45.990234 36.650865 36.650865 45.990234 25 45.990234 C 13.349135 45.990234 4.0097656 36.650865 4.0097656 25 C 4.0097656 13.349135 13.349135 4.0097656 25 4.0097656 z M 21.933594 14 C 16.000841 14 11.536373 15.027452 11.318359 15.078125 L 11.316406 15.078125 L 11.316406 15.080078 C 9.7155259 15.453865 8.7059511 17.079339 9.078125 18.679688 C 9.450288 20.281477 11.075526 21.288538 12.675781 20.921875 L 12.683594 20.921875 L 12.689453 20.919922 C 12.575843 20.947632 12.739283 20.908042 12.859375 20.882812 C 12.979472 20.857582 13.156783 20.822622 13.386719 20.779297 C 13.846591 20.692637 14.514202 20.576349 15.345703 20.460938 C 17.008724 20.230114 19.325722 20 21.933594 20 L 21.996094 20 C 26.308988 20.0059 32.506391 20.667785 37.480469 23.587891 L 37.482422 23.587891 L 37.482422 23.589844 C 37.954848 23.865283 38.481566 24 38.998047 24 C 40.027098 24 41.03278 23.462606 41.587891 22.517578 C 42.4204 21.099781 41.937951 19.245598 40.519531 18.412109 C 34.27637 14.746763 27.008921 14.007143 22.003906 14 L 21.933594 14 z M 21.933594 16 L 22.003906 16 C 26.808831 16.007 33.751684 16.758455 39.505859 20.136719 C 39.99344 20.42323 40.148772 21.019657 39.863281 21.505859 C 39.672394 21.830832 39.340995 22 38.998047 22 C 38.827923 22 38.658397 21.95814 38.494141 21.863281 L 38.490234 21.861328 C 33.0131 18.647428 26.504103 18.006131 21.998047 18 L 21.933594 18 C 19.208465 18 16.806263 18.239792 15.072266 18.480469 C 14.205267 18.600807 13.504003 18.72047 13.015625 18.8125 C 12.771436 18.85852 12.58045 18.8978 12.447266 18.925781 C 12.322091 18.952081 12.331069 18.948276 12.230469 18.972656 C 11.674724 19.099993 11.153228 18.776774 11.025391 18.226562 C 10.897698 17.677484 11.221452 17.156242 11.769531 17.027344 C 11.921515 16.992022 16.232346 16 21.933594 16 z M 21.992188 22.001953 C 19.485831 22.022933 17.321981 22.257131 15.742188 22.498047 C 14.162394 22.738963 13.265055 22.956785 12.976562 23.039062 C 11.545298 23.4449 10.697078 24.961798 11.103516 26.394531 C 11.511255 27.828702 13.027844 28.672719 14.458984 28.265625 L 14.464844 28.263672 L 14.46875 28.263672 C 14.49469 28.257572 14.53521 28.248108 14.587891 28.236328 C 14.69326 28.212768 14.848723 28.180835 15.048828 28.140625 C 15.449038 28.060205 16.026057 27.951569 16.740234 27.84375 C 18.168588 27.628113 20.142467 27.410079 22.322266 27.390625 C 26.185509 27.356565 30.567753 27.924285 34.84375 30.587891 C 35.289626 30.867749 35.792755 31.001953 36.28125 31.001953 C 37.187002 31.001953 38.077741 30.54265 38.589844 29.722656 C 39.378024 28.458742 38.985326 26.765566 37.720703 25.978516 C 32.336064 22.623808 26.560664 21.964096 21.992188 22.001953 z M 22.009766 24 C 26.371289 23.96386 31.724703 24.598489 36.664062 27.675781 C 37.00944 27.890731 37.108398 28.317977 36.892578 28.664062 C 36.752681 28.88807 36.521498 29.001953 36.28125 29.001953 C 36.149745 29.001953 36.024374 28.968673 35.90625 28.894531 L 35.904297 28.892578 C 31.213033 25.969431 26.380741 25.35469 22.304688 25.390625 C 20.002485 25.411175 17.940802 25.640824 16.441406 25.867188 C 15.691708 25.980369 15.083306 26.093481 14.654297 26.179688 C 14.439792 26.222787 14.270205 26.258358 14.150391 26.285156 C 14.090481 26.298556 14.043261 26.309979 14.007812 26.318359 C 13.972362 26.326759 14.028242 26.308563 13.902344 26.345703 L 13.912109 26.341797 C 13.529249 26.450703 13.137605 26.235485 13.027344 25.847656 C 12.915932 25.454918 13.129707 25.073722 13.521484 24.962891 L 13.523438 24.962891 C 13.511947 24.966191 14.540762 24.703693 16.042969 24.474609 C 17.545141 24.245573 19.619122 24.020016 22.009766 24 z M 22.5 29.001953 C 18.141114 29.002953 14.914292 30.062424 14.708984 30.130859 C 13.409991 30.563124 12.696085 31.994504 13.128906 33.292969 C 13.561895 34.591934 14.993351 35.312698 16.294922 34.871094 L 16.279297 34.876953 C 16.379482 34.844753 16.438799 34.823793 16.742188 34.742188 C 17.045575 34.660578 17.491802 34.551256 18.048828 34.441406 C 19.16288 34.221707 20.724875 34.002431 22.5 34.001953 C 26.836932 34.000989 29.799021 35.039503 32.113281 36.582031 L 32.113281 36.580078 C 32.537053 36.863144 33.023236 37.001953 33.498047 37.001953 C 34.304696 37.001953 35.102812 36.603444 35.580078 35.886719 C 36.338631 34.748062 36.024808 33.181703 34.886719 32.421875 C 31.24152 29.992096 27.140106 28.999891 22.5 29.001953 z M 22.5 31.001953 C 26.859894 31.000053 30.494548 31.897723 33.777344 34.085938 C 34.015629 34.246398 34.075032 34.5406 33.916016 34.779297 C 33.815282 34.930571 33.661397 35.001953 33.498047 35.001953 C 33.400857 35.001953 33.310884 34.976899 33.222656 34.917969 L 33.222656 34.916016 C 30.588916 33.160587 27.163068 32.000917 22.5 32.001953 C 20.561125 32.002475 18.875557 32.239215 17.662109 32.478516 C 17.055386 32.598166 16.565205 32.718405 16.222656 32.810547 C 15.880107 32.902687 15.581784 33.000359 15.667969 32.972656 L 15.660156 32.974609 L 15.652344 32.976562 C 15.385915 33.066963 15.116402 32.933192 15.025391 32.660156 C 14.934381 32.387121 15.069741 32.117683 15.341797 32.027344 C 15.400487 32.007784 18.468886 31.002914 22.5 31.001953 z"></path>
      </>
    ),
    viewBox: '0 0 50 50',
  },
  upDown: {
    shape: (
      <>
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" ></path>
      </>
    ),
    viewBox: '0 0 100 100',
  },
  box: {
    shape: (
      <>
      <path fill="#455A64" d="M24,18.2c0.7,0,0.9,0.2,0.9,0.2l0.4-1.7c0,0,0.4,1.5,0.4,2.8c0.2,1.1,2.2,0.4,3.9,0C31.4,19.1,32,16,32,16h16c0,0-9.4,3.5-7,10c0,0-14.8-2-17,7l0,0c-2.2-9-17-7-17-7c2.4-6.5-7-10-7-10h16c0,0,0.6,3.1,2.3,3.5c1.7,0.4,3.9,1.1,3.9,0c0.2-1.1,0.4-2.8,0.4-2.8l0.4,1.7C23.1,18.4,23.4,18.2,24,18.2L24,18.2L24,18.2z"></path>
      </>
    ),
    viewBox: '0 0 50 60',
  },
  hexa: {
    shape: (
      <>
      <path fill="#c2e8ff" d="M12.951,35c-3.459,0-6.842-0.822-9.895-2.394c3.589-0.042,6.972-1.23,9.795-3.443l1.106-0.867 l-1.405-0.026c-2.85-0.053-5.379-1.752-6.524-4.306c0.233,0.02,0.466,0.029,0.698,0.029c0.745,0,1.48-0.098,2.187-0.291 l2.038-0.557l-2.071-0.416c-3.154-0.633-5.503-3.28-5.816-6.435c0.94,0.398,1.956,0.624,2.979,0.657l1.748,0.056l-1.454-0.972 C4.303,14.679,3.09,12.408,3.09,9.964c0-1.048,0.225-2.081,0.654-3.025c4.04,4.629,9.808,7.443,15.944,7.751l0.661,0.033 l-0.148-0.645c-0.125-0.543-0.188-1.103-0.188-1.665c0-4.023,3.273-7.296,7.296-7.296c2.01,0,3.951,0.84,5.326,2.304l0.189,0.202 l0.272-0.054c1.337-0.263,2.628-0.691,3.853-1.279c-0.605,1.145-1.486,2.079-2.594,2.742l-0.397,0.237L34.322,10l0.364-0.016 c0.988-0.121,1.94-0.328,2.875-0.628c-0.806,0.958-1.725,1.811-2.744,2.547l-0.218,0.157l0.011,0.27 c0.014,0.327,0.021,0.657,0.021,0.987c0,5.265-2.037,10.595-5.588,14.624C26.206,31.162,21.11,35,12.951,35z"></path><path fill="#7496c4" d="M27.309,5.617c1.873,0,3.681,0.782,4.961,2.146l0.379,0.404l0.543-0.107 c0.806-0.159,1.595-0.376,2.364-0.649c-0.422,0.464-0.91,0.864-1.459,1.192l-0.789,0.508l0.427,0.833l0.318,0.621l0.693-0.085 c0.425-0.052,0.843-0.119,1.256-0.203c-0.464,0.437-0.958,0.844-1.478,1.22l-0.436,0.315l0.023,0.538 c0.014,0.32,0.021,0.643,0.021,0.966c0,5.145-1.991,10.354-5.463,14.294c-2.77,3.143-7.745,6.889-15.718,6.889 c-2.727,0-5.406-0.524-7.906-1.533c2.959-0.382,5.73-1.542,8.115-3.411l2.213-1.735l-2.811-0.052 c-2.371-0.044-4.504-1.311-5.693-3.277c0.74-0.012,1.472-0.115,2.176-0.308l4.073-1.114l-4.14-0.831 c-2.663-0.534-4.71-2.61-5.287-5.182c0.755,0.235,1.543,0.37,2.335,0.395l3.495,0.113l-2.908-1.944 C4.72,14.356,3.59,12.241,3.59,9.964c0-0.713,0.112-1.418,0.328-2.089c4.093,4.37,9.748,7.014,15.746,7.314l1.322,0.066 l-0.297-1.29c-0.116-0.505-0.176-1.027-0.176-1.552C20.512,8.666,23.561,5.617,27.309,5.617 M27.309,4.617 c-4.305,0-7.796,3.491-7.796,7.796c0,0.611,0.07,1.206,0.201,1.776C13.234,13.865,7.49,10.76,3.644,6.044 C2.974,7.195,2.59,8.534,2.59,9.964c0,2.704,1.376,5.09,3.467,6.488c-1.278-0.041-2.479-0.391-3.531-0.975c0,0.033,0,0.065,0,0.098 c0,3.778,2.687,6.929,6.254,7.644c-0.654,0.179-1.343,0.274-2.055,0.274c-0.502,0-0.991-0.049-1.466-0.139 c0.993,3.097,3.871,5.352,7.283,5.415c-2.668,2.092-6.029,3.338-9.682,3.338c-0.629,0-1.249-0.036-1.86-0.109 C4.45,34.21,8.548,35.5,12.951,35.5c14.34,0,22.181-11.88,22.181-22.182c0-0.337-0.008-0.674-0.022-1.009 c1.523-1.1,2.845-2.473,3.89-4.036c-1.385,0.615-2.814,1.024-4.375,1.215l-0.014-0.027c1.61-0.964,2.756-2.453,3.339-4.274 c-1.506,0.893-3.175,1.542-4.951,1.892C31.577,5.564,29.551,4.617,27.309,4.617L27.309,4.617z"></path>
      </>
    ),
    viewBox: '0 0 100 100',
  },
  cross: {
    shape: (
      <>
      <path d="M 31 2 C 15.011719 2 2 15.011719 2 31 C 2 43.648438 10.144531 54.425781 21.457031 58.378906 C 21.617188 58.492188 21.808594 58.5625 22.011719 58.566406 C 24.839844 59.492188 27.863281 60 31 60 C 46.988281 60 60 46.988281 60 31 C 60 15.011719 46.988281 2 31 2 Z M 31 4 C 45.886719 4 58 16.113281 58 31 C 58 42.660156 50.570313 52.613281 40.199219 56.386719 C 40.089844 56.0625 40 55.582031 40 55.253906 L 40 50 C 40 47.90625 38.976563 45.625 37.96875 44.09375 C 43.519531 43.15625 49.863281 40.277344 49.863281 29.53125 C 49.863281 26.585938 48.941406 23.988281 47.125 21.800781 C 47.523438 20.488281 48.015625 17.71875 46.640625 14.242188 C 46.53125 13.964844 46.300781 13.75 46.015625 13.65625 C 45.734375 13.570313 43.167969 12.902344 37.839844 16.398438 C 35.671875 15.839844 33.378906 15.550781 31 15.542969 C 28.632813 15.550781 26.335938 15.839844 24.175781 16.398438 C 18.847656 12.898438 16.273438 13.566406 15.996094 13.65625 C 15.710938 13.75 15.480469 13.964844 15.371094 14.242188 C 13.992188 17.722656 14.484375 20.488281 14.890625 21.800781 C 13.066406 23.988281 12.144531 26.585938 12.144531 29.53125 C 12.144531 40.179688 18.375 43.113281 23.878906 44.089844 C 23.1875 44.964844 22.460938 46.097656 22.140625 47.25 C 20.71875 47.644531 17.804688 47.65625 15.847656 44.304688 C 15.777344 44.175781 14.066406 41.136719 10.691406 40.902344 C 10.15625 40.90625 8.796875 40.992188 8.46875 42.03125 C 8.105469 43.183594 9.378906 44.058594 9.925781 44.429688 C 9.960938 44.453125 10.015625 44.484375 10.050781 44.503906 C 10.113281 44.535156 11.570313 45.300781 12.65625 48.035156 C 12.882813 48.75 14.871094 54.136719 22.007813 53.1875 C 22.011719 53.976563 22.007813 54.375 22 54.691406 L 22 55.25 C 22 55.574219 21.902344 56.0625 21.792969 56.378906 C 11.421875 52.605469 4 42.652344 4 31 C 4 16.113281 16.113281 4 31 4 Z M 30.757813 7.003906 C 26.859375 7.046875 23.003906 8.074219 19.609375 10.015625 C 19.128906 10.285156 18.960938 10.898438 19.234375 11.375 C 19.417969 11.699219 19.753906 11.882813 20.105469 11.882813 C 20.273438 11.882813 20.441406 11.839844 20.597656 11.75 C 24.734375 9.390625 29.617188 8.507813 34.339844 9.265625 C 34.882813 9.355469 35.394531 8.984375 35.484375 8.4375 C 35.570313 7.890625 35.199219 7.378906 34.65625 7.289063 C 33.363281 7.082031 32.058594 6.988281 30.757813 7.003906 Z M 38.65625 8.386719 C 38.269531 8.402344 37.90625 8.648438 37.765625 9.035156 C 37.570313 9.554688 37.832031 10.128906 38.351563 10.324219 C 39.0625 10.589844 39.765625 10.894531 40.453125 11.238281 C 40.597656 11.3125 40.75 11.347656 40.902344 11.347656 C 41.265625 11.347656 41.617188 11.148438 41.796875 10.796875 C 42.042969 10.308594 41.84375 9.703125 41.351563 9.453125 C 40.605469 9.078125 39.828125 8.738281 39.050781 8.449219 C 38.921875 8.402344 38.789063 8.382813 38.65625 8.386719 Z M 44.984375 15.546875 C 46.058594 18.707031 45.324219 20.996094 45.058594 21.644531 C 44.914063 22.003906 44.988281 22.414063 45.25 22.699219 C 46.980469 24.59375 47.859375 26.890625 47.859375 29.53125 C 47.859375 39.667969 41.851563 41.703125 35.96875 42.355469 C 35.574219 42.398438 35.242188 42.671875 35.125 43.050781 C 35.003906 43.429688 35.125 43.84375 35.425781 44.105469 C 36.214844 44.78125 38 47.714844 38 50 L 38 55.253906 C 38 55.273438 38.003906 56.144531 38.289063 56.992188 C 35.96875 57.644531 33.527344 58 31 58 C 28.46875 58 26.023438 57.640625 23.699219 56.988281 C 23.988281 56.136719 23.996094 55.265625 23.996094 55.25 L 24 54.714844 C 24.003906 54.261719 24.011719 53.648438 24 51.996094 C 23.996094 51.691406 23.859375 51.410156 23.625 51.21875 C 23.390625 51.03125 23.082031 50.960938 22.785156 51.023438 C 16.070313 52.488281 14.617188 47.640625 14.5625 47.4375 C 14.550781 47.402344 14.539063 47.371094 14.527344 47.335938 C 13.566406 44.898438 12.300781 43.65625 11.546875 43.09375 C 13.175781 43.667969 14.085938 45.257813 14.109375 45.292969 C 16.753906 49.820313 21.121094 49.9375 23.40625 48.914063 C 23.722656 48.773438 23.941406 48.480469 23.988281 48.140625 C 24.191406 46.710938 25.761719 44.820313 26.554688 44.125 C 26.851563 43.863281 26.96875 43.449219 26.847656 43.074219 C 26.730469 42.695313 26.402344 42.421875 26.011719 42.378906 C 20.144531 41.710938 14.144531 39.660156 14.144531 29.53125 C 14.144531 26.894531 15.023438 24.59375 16.761719 22.699219 C 17.023438 22.414063 17.097656 22.003906 16.949219 21.644531 C 16.683594 20.996094 15.945313 18.714844 17.015625 15.550781 C 17.867188 15.578125 19.941406 15.941406 23.433594 18.3125 C 23.675781 18.476563 23.984375 18.527344 24.265625 18.449219 C 26.355469 17.867188 28.6875 17.554688 31 17.542969 C 33.320313 17.554688 35.652344 17.867188 37.746094 18.449219 C 38.027344 18.527344 38.332031 18.476563 38.574219 18.3125 C 42.085938 15.929688 44.160156 15.574219 44.984375 15.546875 Z M 21.375 34.394531 C 20.984375 34.347656 20.589844 34.527344 20.386719 34.886719 L 19.386719 36.617188 C 19.109375 37.097656 19.273438 37.707031 19.75 37.984375 C 19.90625 38.074219 20.078125 38.117188 20.25 38.117188 C 20.59375 38.117188 20.929688 37.9375 21.113281 37.617188 L 22.113281 35.886719 C 22.390625 35.410156 22.230469 34.796875 21.75 34.519531 C 21.628906 34.453125 21.503906 34.410156 21.375 34.394531 Z M 40.625 34.394531 C 40.496094 34.410156 40.367188 34.453125 40.25 34.519531 C 39.769531 34.796875 39.609375 35.410156 39.886719 35.890625 L 40.886719 37.621094 C 41.070313 37.941406 41.40625 38.121094 41.75 38.121094 C 41.921875 38.121094 42.09375 38.074219 42.25 37.984375 C 42.730469 37.707031 42.890625 37.097656 42.613281 36.621094 L 41.613281 34.890625 C 41.40625 34.53125 41.011719 34.347656 40.625 34.394531 Z M 36.1875 36.34375 C 36.058594 36.324219 35.921875 36.332031 35.785156 36.371094 C 35.253906 36.511719 34.9375 37.058594 35.078125 37.59375 L 35.597656 39.527344 C 35.71875 39.972656 36.121094 40.265625 36.5625 40.265625 C 36.652344 40.265625 36.738281 40.253906 36.824219 40.234375 C 37.355469 40.089844 37.675781 39.542969 37.53125 39.007813 L 37.015625 37.078125 C 36.90625 36.675781 36.570313 36.398438 36.1875 36.34375 Z M 25.816406 36.34375 C 25.429688 36.398438 25.09375 36.675781 24.984375 37.078125 L 24.46875 39.011719 C 24.324219 39.542969 24.644531 40.089844 25.175781 40.234375 C 25.261719 40.257813 25.347656 40.265625 25.4375 40.265625 C 25.875 40.265625 26.28125 39.972656 26.402344 39.527344 L 26.921875 37.59375 C 27.0625 37.0625 26.746094 36.511719 26.214844 36.371094 C 26.078125 36.332031 25.945313 36.328125 25.816406 36.34375 Z M 31 37 C 30.445313 37 30 37.445313 30 38 L 30 40 C 30 40.554688 30.445313 41 31 41 C 31.554688 41 32 40.554688 32 40 L 32 38 C 32 37.445313 31.554688 37 31 37 Z "></path>
      </>
    ),
    viewBox: '0 0 100 100',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
