import { IColorizeable } from "@/stores/colorStore";
import { inject, Observer } from "mobx-react";
import * as React from "react";

@inject("colorStore")
export class FrontSvg extends React.Component<IColorizeable> {
  constructor(props: any) {
    super(props);
    this.wusa = this.wusa.bind(this);
  }

  public render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1300 1500"
        enable-background="new 0 0 1300 1500"
        xmlSpace="preserve"
        style={{ cursor: "pointer" }}
      >
        <g id="body">
          <g>
            <path
              id="body_0__RNDID_9654365"
              stroke="#fffdf5"
              fill="#fffdf5"
              d="M494.764,238.832c1.54,4.427,4.191,8.887,8.583,16.277c1.323,2.226,2.797,4.707,4.437,7.517			c2.658,4.556,6.521,11.535,10.995,19.616c7.379,13.329,15.743,28.437,22.257,39.138c1.255,2.063,2.404,3.958,3.482,5.736			c8.026,13.244,12.055,19.891,27.027,41.028c16.672,23.537,28.069,34.633,45.283,50.788c14.169,13.298,20,14.331,21.45,14.332			c0.182,0,0.268-0.018,0.268-0.018l13.106-9.798c13.116-10.147,18.977-16.717,19.015-16.763			c23.754-21.527,37.908-45.817,38.036-46.041c13.229-18.797,19.08-28.462,31.903-49.637l3.106-5.128			c10.122-16.702,13.008-22.458,16.35-29.122c1.667-3.326,3.392-6.766,6.156-11.889c8.405-15.574,19.395-38.034,19.505-38.259			l0.321-0.659l-0.657,0.325c-0.084,0.042-2.259,1.088-19.221,6.988c-17.169,5.972-21.484,6.995-45.434,12.674l-0.292,0.069			c-23.935,5.675-33.852,5.991-33.949,5.993l-0.254,0.007l0.833,18.74l-86.829-0.663l-0.501-17.613l-0.27,0.03			c-0.021,0.002-6.814,0.73-27.932-2.748c-14.509-2.39-20.052-4.202-31.094-7.813c-5.095-1.666-11.436-3.74-20.375-6.429			c-22.451-6.755-26.715-8.768-27.925-9.846c-0.336-0.3-0.397-0.451-0.402-0.462c0,0,0-0.001,0-0.001l-0.494,0.069l0.007,0.045			C491.336,225.716,492.815,233.23,494.764,238.832z"
            />
            <Observer render={this.wusa} />
          </g>
        </g>

        <g
          data-layer="body"
          id="body_mask_RNDID_9654365"
          className="layer-mask"
        >
          <g>
            <defs>
              <path
                id="body_0__RNDID_9654365__RNDID_9654365"
                stroke="#fffdf5"
                d="M494.764,238.832c1.54,4.427,4.191,8.887,8.583,16.277c1.323,2.226,2.797,4.707,4.437,7.517   c2.658,4.556,6.521,11.535,10.995,19.616c7.379,13.329,15.743,28.437,22.257,39.138c1.255,2.063,2.404,3.958,3.482,5.736   c8.026,13.244,12.055,19.891,27.027,41.028c16.672,23.537,28.069,34.633,45.283,50.788c14.169,13.298,20,14.331,21.45,14.332   c0.182,0,0.268-0.018,0.268-0.018l13.106-9.798c13.116-10.147,18.977-16.717,19.015-16.763   c23.754-21.527,37.908-45.817,38.036-46.041c13.229-18.797,19.08-28.462,31.903-49.637l3.106-5.128   c10.122-16.702,13.008-22.458,16.35-29.122c1.667-3.326,3.392-6.766,6.156-11.889c8.405-15.574,19.395-38.034,19.505-38.259   l0.321-0.659l-0.657,0.325c-0.084,0.042-2.259,1.088-19.221,6.988c-17.169,5.972-21.484,6.995-45.434,12.674l-0.292,0.069   c-23.935,5.675-33.852,5.991-33.949,5.993l-0.254,0.007l0.833,18.74l-86.829-0.663l-0.501-17.613l-0.27,0.03   c-0.021,0.002-6.814,0.73-27.932-2.748c-14.509-2.39-20.052-4.202-31.094-7.813c-5.095-1.666-11.436-3.74-20.375-6.429   c-22.451-6.755-26.715-8.768-27.925-9.846c-0.336-0.3-0.397-0.451-0.402-0.462c0,0,0-0.001,0-0.001l-0.494,0.069l0.007,0.045   C491.336,225.716,492.815,233.23,494.764,238.832z"
              />
            </defs>
            <clipPath id="body_0__RNDID_9654365_0_RNDID_9654365">
              <use xlinkHref="#body_0__RNDID_9654365" overflow="visible" />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#body_0__RNDID_9654365_0_RNDID_9654365)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
          <g>
            <defs>
              <path
                id="body_1__RNDID_9654365__RNDID_9654365"
                stroke="#fffdf5"
                d="M1087.25,968.99l-5.002-131.021c-1.935-15.119-5.867-34.887-9.671-54.002c-2.35-11.812-4.569-22.967-6.331-33.01   c-4.871-27.773-9.259-53.71-13.904-81.17c-4.974-29.402-10.117-59.805-16.097-93.834c-6.024-31.54-9.048-66.713-11.972-100.729   c-3.647-42.425-7.419-86.293-17.031-124.286c-7.817-30.901-17.317-53.5-29.042-69.089c-17.736-23.58-47.072-31.536-78.132-39.96   c-11.198-3.037-22.778-6.178-33.985-10.125c-7.357-2.592-14.037-5.47-20.496-8.254c-13.485-5.812-26.227-11.303-43.448-13.624   l0.002-0.004l-1.037-0.13l-0.002,0l-0.062,0.496l0.317,0.041c-5.918,11.094-10.819,21.215-15.56,31.006   c-7.27,15.015-14.787,30.542-26.012,49.578c-31.89,54.083-51.392,84.405-75.967,110.456   c-22.725,24.089-44.084,37.782-45.835,38.887c-1.247-0.592-11.99-5.869-27.824-18.909c-17.322-14.266-47.696-55.337-58.447-72.44   c-10.854-17.269-41.482-69.468-57.494-97.99c-6.148-10.951-10.437-23.147-12.748-36.249l-0.057-0.322l-28.506,13.462   c-11.091,4.448-22.917,8.454-34.354,12.328c-27.014,9.15-54.947,18.612-75.707,34.706   c-39.514,30.633-42.675,110.21-45.732,187.168c-1.392,35.051-2.708,68.158-7.362,96l-15.998,134.984   c-7.905,43.418-13.655,85.118-19.743,129.267c-4.368,31.673-8.884,64.424-14.261,97.763l-9,144.011l-1,51.992l-4.998,95.979   c-5.954,42.742-7.027,88.152-3.021,127.865l0.02,0.194l0.497-0.051l-0.02-0.194c-0.001-0.017-0.003-0.036-0.005-0.054   c-0.194-1.937-0.367-3.865-0.524-5.676c7.914,1.457,15.078,2.205,21.299,2.225c4.281,0.014,8.347,0.021,12.266,0.021   c16.63,0,28.872-0.153,42.253-0.528c7.757-0.218,14.486-0.506,20.554-0.879c-0.327,0.909-0.661,1.811-1,2.704l0.467,0.178h0   c0.002-0.008,0.005-0.015,0.008-0.022c0.417-1.094,0.825-2.206,1.223-3.329l0.027-0.077c12.064-34.114,15.663-81.462,19.147-127.3   c2.434-32.021,4.95-65.134,10.302-94.002l3.169-19.106c10.959-66.048,21.311-128.434,30.831-191.897   c17.286-114.125,28.493-215.108,27.004-336.935l0.852-0.852h2.755c6.794,11.443,11.768,42.702,13.652,85.828   c1.65,37.783,0.542,76.716-2.759,96.899l-6.998,74.986l-36.998,242.988c-6.071,30.382-17.984,118.703-14.87,150.387l0.021,0.216   l0.217,0.01c9.117,0.405,20.947,0.209,34.913-0.577c15.678-0.883,24.833-1.528,32.189-2.048c15.6-1.101,22.719-1.603,66.763-2.472   c15.85-0.312,30.694-0.658,45.049-0.992c32.579-0.758,60.715-1.412,88.269-1.412c10.499,0,20.206,0.095,29.676,0.29   c10.267,0.212,19.243,0.369,27.924,0.521c31.702,0.555,56.742,0.992,106.544,3.595c13.013,0.68,24.708,1.281,35.127,1.816   c39.464,2.029,61.203,3.146,65.878,4c8.478,1.547,14.457,2.312,25.512,2.478c0.976,0.015,1.928,0.021,2.858,0.021   c6.115,0,11.675-0.315,16.996-0.966l0.195-0.023l0.022-0.195c1.624-13.922,0.318-30.092-0.944-45.729   c-0.289-3.58-0.588-7.282-0.845-10.885l-5.004-82.028c-8.272-46.251-15.938-87.808-26.001-128.004l-25.001-127.006   c-8.44-38.124-22.566-101.933-12.997-158.905c7.415-44.154,14.583-75.526,23.965-104.882l2.688-1.792   c6.535,13.602,7.662,32.3,8.751,50.388c0.643,10.668,1.308,21.699,3.103,31.291c8.554,45.691,13.993,83.611,19.998,129.985   c0.978,7.833,1.646,15.732,2.291,23.373c0.914,10.813,1.859,21.995,3.71,33.635c20.434,128.503,30.378,265.737,39.995,398.453   c2.559,35.3,5.203,71.802,8.003,107.527l0.498-0.039l-0.406-5.251c5.892,2.274,11.32,3.768,16.14,4.438   c9.244,1.288,27.58,3.448,46.508,3.448c6.618,0,12.701-0.273,18.082-0.813c4.246-0.427,8.956-1.087,13.998-1.963l0.192-0.033   l0.014-0.194c1.159-15.857,1.355-33.371,1.563-51.912c0.328-29.359,0.668-59.719,4.91-86.696c0.166-11.997,0.59-26.231,1-39.996   c0.41-13.768,0.833-28.003,1-40.003l0.041-1.952C1089.854,1040.24,1090.501,1009.688,1087.25,968.99z"
              />
            </defs>
            <clipPath id="body_1__RNDID_9654365_0_RNDID_9654365">
              <use xlinkHref="#body_1__RNDID_9654365" overflow="visible" />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#body_1__RNDID_9654365_0_RNDID_9654365)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
        </g>
        <g id="neckline_border">
          <path
            id="neckline_border_0__RNDID_3484311"
            stroke="#fffdf5"
            fill="#fffdf5"
            d="M801.782,209.834c-6.325-0.833-12.74-1.187-19.786-1.084l-0.092,0.019c-29.242,12.154-107.15,23.224-163.454,23.224		c-18.062,0-33.002-1.089-44.413-3.24c-19.406-2.938-33.565-7.962-44.941-12c-11.284-4.004-20.197-7.167-29.986-7.167		c-3.404,0-6.729,0.383-10.217,1.188l-7.948,3.753l0.033,0.188c2.32,13.158,6.628,25.407,12.804,36.407		c16.015,28.526,46.649,80.737,57.506,98.01c10.765,17.127,41.19,58.261,58.553,72.56c16.831,13.861,27.945,18.984,28.055,19.035		l0.122,0.055l0.113-0.07c0.221-0.137,22.402-13.973,46.05-39.041c24.608-26.084,44.125-56.429,76.034-110.544		c11.234-19.054,18.757-34.59,26.031-49.614c4.784-9.882,9.731-20.101,15.724-31.313l0.17-0.318L801.782,209.834z M784.979,226.997		c-1.817,3.701-11.573,23.505-19.198,37.635c-2.769,5.13-4.495,8.573-6.164,11.902c-3.337,6.655-6.218,12.402-16.33,29.087		l-3.106,5.128c-12.816,21.165-18.666,30.824-31.896,49.626c-0.14,0.242-14.258,24.467-37.971,45.959		c-0.057,0.065-5.891,6.604-18.963,16.715l-12.945,9.709c-0.029,0.002-0.071,0.004-0.125,0.004c-0.999,0-6.711-0.685-21.108-14.196		c-17.191-16.134-28.572-27.214-45.217-50.712c-14.962-21.123-18.988-27.765-27.008-40.999c-1.078-1.779-2.227-3.674-3.482-5.737		c-6.508-10.693-14.87-25.795-22.247-39.12c-4.475-8.083-8.34-15.065-11.001-19.626c-1.64-2.812-3.115-5.294-4.439-7.521		c-4.376-7.362-7.018-11.806-8.541-16.186c-1.572-4.519-2.838-10.296-3.301-12.527c1.405,1.139,6.125,3.269,27.992,9.848		c8.934,2.688,15.271,4.761,20.364,6.426c11.066,3.619,16.621,5.436,31.168,7.832c14.901,2.455,22.691,2.821,26.009,2.821		c1.422,0,2.034-0.066,2.06-0.069l0.163-0.018l0.994-3.23L685.33,250l1.002,2.505l0.175-0.004		c0.098-0.002,10.053-0.316,34.051-6.007l0.292-0.069c23.971-5.684,28.29-6.708,45.482-12.688		C779.174,229.27,783.559,227.578,784.979,226.997z"
          />
        </g>
        <g
          data-layer="neckline_border"
          id="neckline_border_mask_RNDID_3484311"
          className="layer-mask"
        >
          <g>
            <defs>
              <path
                id="neckline_border_0__RNDID_3484311__RNDID_3484311"
                stroke="#fffdf5"
                d="M801.782,209.834c-6.325-0.833-12.74-1.187-19.786-1.084l-0.092,0.019c-29.242,12.154-107.15,23.224-163.454,23.224  c-18.062,0-33.002-1.089-44.413-3.24c-19.406-2.938-33.565-7.962-44.941-12c-11.284-4.004-20.197-7.167-29.986-7.167  c-3.404,0-6.729,0.383-10.217,1.188l-7.948,3.753l0.033,0.188c2.32,13.158,6.628,25.407,12.804,36.407  c16.015,28.526,46.649,80.737,57.506,98.01c10.765,17.127,41.19,58.261,58.553,72.56c16.831,13.861,27.945,18.984,28.055,19.035  l0.122,0.055l0.113-0.07c0.221-0.137,22.402-13.973,46.05-39.041c24.608-26.084,44.125-56.429,76.034-110.544  c11.234-19.054,18.757-34.59,26.031-49.614c4.784-9.882,9.731-20.101,15.724-31.313l0.17-0.318L801.782,209.834z M784.979,226.997  c-1.817,3.701-11.573,23.505-19.198,37.635c-2.769,5.13-4.495,8.573-6.164,11.902c-3.337,6.655-6.218,12.402-16.33,29.087  l-3.106,5.128c-12.816,21.165-18.666,30.824-31.896,49.626c-0.14,0.242-14.258,24.467-37.971,45.959  c-0.057,0.065-5.891,6.604-18.963,16.715l-12.945,9.709c-0.029,0.002-0.071,0.004-0.125,0.004c-0.999,0-6.711-0.685-21.108-14.196  c-17.191-16.134-28.572-27.214-45.217-50.712c-14.962-21.123-18.988-27.765-27.008-40.999c-1.078-1.779-2.227-3.674-3.482-5.737  c-6.508-10.693-14.87-25.795-22.247-39.12c-4.475-8.083-8.34-15.065-11.001-19.626c-1.64-2.812-3.115-5.294-4.439-7.521  c-4.376-7.362-7.018-11.806-8.541-16.186c-1.572-4.519-2.838-10.296-3.301-12.527c1.405,1.139,6.125,3.269,27.992,9.848  c8.934,2.688,15.271,4.761,20.364,6.426c11.066,3.619,16.621,5.436,31.168,7.832c14.901,2.455,22.691,2.821,26.009,2.821  c1.422,0,2.034-0.066,2.06-0.069l0.163-0.018l0.994-3.23L685.33,250l1.002,2.505l0.175-0.004  c0.098-0.002,10.053-0.316,34.051-6.007l0.292-0.069c23.971-5.684,28.29-6.708,45.482-12.688  C779.174,229.27,783.559,227.578,784.979,226.997z"
              />
            </defs>
            <clipPath id="neckline_border_0__RNDID_3484311_0_RNDID_3484311">
              <use
                xlinkHref="#neckline_border_0__RNDID_3484311"
                overflow="visible"
              />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#neckline_border_0__RNDID_3484311_0_RNDID_3484311)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
        </g>
        <g id="cuff_border">
          <g>
            <path
              id="cuff_border_0__RNDID_9232497"
              stroke="#fffdf5"
              fill="#fffdf5"
              d="M1079.484,1334.348c-5.03,0.873-9.728,1.532-13.963,1.957c-5.363,0.539-11.43,0.812-18.031,0.812			c-18.897,0-37.207-2.157-46.439-3.443c-4.881-0.68-10.398-2.211-16.397-4.553l-0.371-0.146l0.479,6.188l0.13,0.062			c11.011,5.302,32.709,8.467,58.043,8.467c13.216,0,26.038-0.868,36.104-2.445l0.191-0.03l0.019-0.193			c0.177-1.874,0.344-3.912,0.527-6.411l0.023-0.319L1079.484,1334.348z"
            />
            <path
              id="cuff_border_1__RNDID_9232497"
              stroke="#fffdf5"
              fill="#fffdf5"
              d="M297.504,1335.269c-13.377,0.375-25.614,0.528-42.237,0.528c-3.92,0-7.983-0.008-12.267-0.021			c-6.276-0.02-13.521-0.785-21.532-2.276l-0.323-0.06l0.028,0.327c0.173,1.992,0.362,4.13,0.579,6.259l0.019,0.187l0.185,0.034			c10.511,1.936,22.226,2.185,31.258,2.185c0.001,0,0.001,0,0.002,0c4.98,0,10.168-0.087,15.186-0.171l0.604-0.01			c2.989-0.05,5.995-0.097,9.001-0.144c12.982-0.203,26.406-0.413,38.004-0.856l0.161-0.006l0.061-0.149			c0.815-1.988,1.613-4.08,2.439-6.395l0.127-0.357l-0.378,0.024C312.258,1334.751,305.417,1335.046,297.504,1335.269z"
            />
          </g>
        </g>
        <g
          data-layer="cuff_border"
          id="cuff_border_mask_RNDID_9232497"
          className="layer-mask"
        >
          <g>
            <defs>
              <path
                id="cuff_border_0__RNDID_9232497__RNDID_9232497"
                stroke="#fffdf5"
                d="M1079.484,1334.348c-5.03,0.873-9.728,1.532-13.963,1.957c-5.363,0.539-11.43,0.812-18.031,0.812   c-18.897,0-37.207-2.157-46.439-3.443c-4.881-0.68-10.398-2.211-16.397-4.553l-0.371-0.146l0.479,6.188l0.13,0.062   c11.011,5.302,32.709,8.467,58.043,8.467c13.216,0,26.038-0.868,36.104-2.445l0.191-0.03l0.019-0.193   c0.177-1.874,0.344-3.912,0.527-6.411l0.023-0.319L1079.484,1334.348z"
              />
            </defs>
            <clipPath id="cuff_border_0__RNDID_9232497_0_RNDID_9232497">
              <use
                xlinkHref="#cuff_border_0__RNDID_9232497"
                overflow="visible"
              />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#cuff_border_0__RNDID_9232497_0_RNDID_9232497)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
          <g>
            <defs>
              <path
                id="cuff_border_1__RNDID_9232497__RNDID_9232497"
                stroke="#fffdf5"
                d="M297.504,1335.269c-13.377,0.375-25.614,0.528-42.237,0.528c-3.92,0-7.983-0.008-12.267-0.021   c-6.276-0.02-13.521-0.785-21.532-2.276l-0.323-0.06l0.028,0.327c0.173,1.992,0.362,4.13,0.579,6.259l0.019,0.187l0.185,0.034   c10.511,1.936,22.226,2.185,31.258,2.185c0.001,0,0.001,0,0.002,0c4.98,0,10.168-0.087,15.186-0.171l0.604-0.01   c2.989-0.05,5.995-0.097,9.001-0.144c12.982-0.203,26.406-0.413,38.004-0.856l0.161-0.006l0.061-0.149   c0.815-1.988,1.613-4.08,2.439-6.395l0.127-0.357l-0.378,0.024C312.258,1334.751,305.417,1335.046,297.504,1335.269z"
              />
            </defs>
            <clipPath id="cuff_border_1__RNDID_9232497_0_RNDID_9232497">
              <use
                xlinkHref="#cuff_border_1__RNDID_9232497"
                overflow="visible"
              />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#cuff_border_1__RNDID_9232497_0_RNDID_9232497)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
        </g>
        <g id="hem_border">
          <path
            id="hem_border_0__RNDID_6626564"
            stroke="#fffdf5"
            fill="#fffdf5"
            d="M942.761,1219.321c-5.3,0.647-10.84,0.962-16.937,0.962c-0.928,0-1.877-0.007-2.85-0.021		c-11.021-0.164-16.98-0.927-25.43-2.47c-4.707-0.859-26.454-1.977-65.933-4.007c-10.421-0.535-22.119-1.137-35.137-1.817		c-49.811-2.602-74.854-3.04-106.562-3.595c-8.681-0.151-17.656-0.309-27.922-0.521c-9.473-0.195-19.184-0.29-29.686-0.29		c-27.558,0-55.693,0.654-88.27,1.412c-14.357,0.334-29.204,0.68-45.057,0.992c-44.057,0.869-51.181,1.372-66.79,2.474		c-7.354,0.519-16.507,1.164-32.181,2.046c-13.948,0.785-25.762,0.98-34.863,0.577l-0.288-0.013l0.028,0.287		c0.22,2.238,0.513,4.162,0.871,5.718l0.043,0.19l0.195,0.004c3.605,0.078,7.421,0.117,11.342,0.117c0.003,0,0.002,0,0.005,0		c23.61,0,53.33-1.463,83.664-4.117l96.997-2l98.993-1l96.992,2l133.997,6.999c4.742,0.296,10.039,0.934,15.646,1.61		c8.398,1.012,17.083,2.059,24.842,2.059c5.609,0,10.06-0.55,13.604-1.68l0.143-0.046l0.027-0.147		c0.295-1.605,0.548-3.336,0.793-5.446l0.037-0.316L942.761,1219.321z"
          />
        </g>
        <g
          data-layer="hem_border"
          id="hem_border_mask_RNDID_6626564"
          className="layer-mask"
        >
          <g>
            <defs>
              <path
                id="hem_border_0__RNDID_6626564__RNDID_6626564"
                stroke="#fffdf5"
                d="M942.761,1219.321c-5.3,0.647-10.84,0.962-16.937,0.962c-0.928,0-1.877-0.007-2.85-0.021  c-11.021-0.164-16.98-0.927-25.43-2.47c-4.707-0.859-26.454-1.977-65.933-4.007c-10.421-0.535-22.119-1.137-35.137-1.817  c-49.811-2.602-74.854-3.04-106.562-3.595c-8.681-0.151-17.656-0.309-27.922-0.521c-9.473-0.195-19.184-0.29-29.686-0.29  c-27.558,0-55.693,0.654-88.27,1.412c-14.357,0.334-29.204,0.68-45.057,0.992c-44.057,0.869-51.181,1.372-66.79,2.474  c-7.354,0.519-16.507,1.164-32.181,2.046c-13.948,0.785-25.762,0.98-34.863,0.577l-0.288-0.013l0.028,0.287  c0.22,2.238,0.513,4.162,0.871,5.718l0.043,0.19l0.195,0.004c3.605,0.078,7.421,0.117,11.342,0.117c0.003,0,0.002,0,0.005,0  c23.61,0,53.33-1.463,83.664-4.117l96.997-2l98.993-1l96.992,2l133.997,6.999c4.742,0.296,10.039,0.934,15.646,1.61  c8.398,1.012,17.083,2.059,24.842,2.059c5.609,0,10.06-0.55,13.604-1.68l0.143-0.046l0.027-0.147  c0.295-1.605,0.548-3.336,0.793-5.446l0.037-0.316L942.761,1219.321z"
              />
            </defs>
            <clipPath id="hem_border_0__RNDID_6626564_0_RNDID_6626564">
              <use
                xlinkHref="#hem_border_0__RNDID_6626564"
                overflow="visible"
              />
            </clipPath>
            <image
              className="melierung unmotted"
              overflow="visible"
              clip-path="url(#hem_border_0__RNDID_6626564_0_RNDID_6626564)"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/melierung_koerperhalfte.jpg"
            />
          </g>
        </g>
        <g id="Produktbild" style={{ mixBlendMode: "multiply" }}>
          <g>
            <image
              overflow="visible"
              width="1300"
              height="1500"
              xlinkHref="https://s3.eu-central-1.amazonaws.com/heydorn/basics/dob004/1.jpg"
            />
          </g>
        </g>
      </svg>
    );
  }

  private wusa() {
    let hexCode = "#000000";
    const code = this.props.colorStore;
    if (code) {
      hexCode = code.body.hexCode;
    }
    return (
      <path
        id="body_1__RNDID_9654365"
        stroke="#fffdf5"
        fill={hexCode}
        d="M1087.25,968.99l-5.002-131.021c-1.935-15.119-5.867-34.887-9.671-54.002c-2.35-11.812-4.569-22.967-6.331-33.01			c-4.871-27.773-9.259-53.71-13.904-81.17c-4.974-29.402-10.117-59.805-16.097-93.834c-6.024-31.54-9.048-66.713-11.972-100.729			c-3.647-42.425-7.419-86.293-17.031-124.286c-7.817-30.901-17.317-53.5-29.042-69.089c-17.736-23.58-47.072-31.536-78.132-39.96			c-11.198-3.037-22.778-6.178-33.985-10.125c-7.357-2.592-14.037-5.47-20.496-8.254c-13.485-5.812-26.227-11.303-43.448-13.624			l0.002-0.004l-1.037-0.13l-0.002,0l-0.062,0.496l0.317,0.041c-5.918,11.094-10.819,21.215-15.56,31.006			c-7.27,15.015-14.787,30.542-26.012,49.578c-31.89,54.083-51.392,84.405-75.967,110.456			c-22.725,24.089-44.084,37.782-45.835,38.887c-1.247-0.592-11.99-5.869-27.824-18.909c-17.322-14.266-47.696-55.337-58.447-72.44			c-10.854-17.269-41.482-69.468-57.494-97.99c-6.148-10.951-10.437-23.147-12.748-36.249l-0.057-0.322l-28.506,13.462			c-11.091,4.448-22.917,8.454-34.354,12.328c-27.014,9.15-54.947,18.612-75.707,34.706			c-39.514,30.633-42.675,110.21-45.732,187.168c-1.392,35.051-2.708,68.158-7.362,96l-15.998,134.984			c-7.905,43.418-13.655,85.118-19.743,129.267c-4.368,31.673-8.884,64.424-14.261,97.763l-9,144.011l-1,51.992l-4.998,95.979			c-5.954,42.742-7.027,88.152-3.021,127.865l0.02,0.194l0.497-0.051l-0.02-0.194c-0.001-0.017-0.003-0.036-0.005-0.054			c-0.194-1.937-0.367-3.865-0.524-5.676c7.914,1.457,15.078,2.205,21.299,2.225c4.281,0.014,8.347,0.021,12.266,0.021			c16.63,0,28.872-0.153,42.253-0.528c7.757-0.218,14.486-0.506,20.554-0.879c-0.327,0.909-0.661,1.811-1,2.704l0.467,0.178h0			c0.002-0.008,0.005-0.015,0.008-0.022c0.417-1.094,0.825-2.206,1.223-3.329l0.027-0.077c12.064-34.114,15.663-81.462,19.147-127.3			c2.434-32.021,4.95-65.134,10.302-94.002l3.169-19.106c10.959-66.048,21.311-128.434,30.831-191.897			c17.286-114.125,28.493-215.108,27.004-336.935l0.852-0.852h2.755c6.794,11.443,11.768,42.702,13.652,85.828			c1.65,37.783,0.542,76.716-2.759,96.899l-6.998,74.986l-36.998,242.988c-6.071,30.382-17.984,118.703-14.87,150.387l0.021,0.216			l0.217,0.01c9.117,0.405,20.947,0.209,34.913-0.577c15.678-0.883,24.833-1.528,32.189-2.048c15.6-1.101,22.719-1.603,66.763-2.472			c15.85-0.312,30.694-0.658,45.049-0.992c32.579-0.758,60.715-1.412,88.269-1.412c10.499,0,20.206,0.095,29.676,0.29			c10.267,0.212,19.243,0.369,27.924,0.521c31.702,0.555,56.742,0.992,106.544,3.595c13.013,0.68,24.708,1.281,35.127,1.816			c39.464,2.029,61.203,3.146,65.878,4c8.478,1.547,14.457,2.312,25.512,2.478c0.976,0.015,1.928,0.021,2.858,0.021			c6.115,0,11.675-0.315,16.996-0.966l0.195-0.023l0.022-0.195c1.624-13.922,0.318-30.092-0.944-45.729			c-0.289-3.58-0.588-7.282-0.845-10.885l-5.004-82.028c-8.272-46.251-15.938-87.808-26.001-128.004l-25.001-127.006			c-8.44-38.124-22.566-101.933-12.997-158.905c7.415-44.154,14.583-75.526,23.965-104.882l2.688-1.792			c6.535,13.602,7.662,32.3,8.751,50.388c0.643,10.668,1.308,21.699,3.103,31.291c8.554,45.691,13.993,83.611,19.998,129.985			c0.978,7.833,1.646,15.732,2.291,23.373c0.914,10.813,1.859,21.995,3.71,33.635c20.434,128.503,30.378,265.737,39.995,398.453			c2.559,35.3,5.203,71.802,8.003,107.527l0.498-0.039l-0.406-5.251c5.892,2.274,11.32,3.768,16.14,4.438			c9.244,1.288,27.58,3.448,46.508,3.448c6.618,0,12.701-0.273,18.082-0.813c4.246-0.427,8.956-1.087,13.998-1.963l0.192-0.033			l0.014-0.194c1.159-15.857,1.355-33.371,1.563-51.912c0.328-29.359,0.668-59.719,4.91-86.696c0.166-11.997,0.59-26.231,1-39.996			c0.41-13.768,0.833-28.003,1-40.003l0.041-1.952C1089.854,1040.24,1090.501,1009.688,1087.25,968.99z"
      />
    );
  }
}
