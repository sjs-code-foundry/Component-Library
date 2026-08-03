export const formObj = {
  badges: {
    colors: [
      { name: "Gray", value: { bodyColor: "#F3F4F6", textColor: "#1F2937" } },
      { name: "Red", value: { bodyColor: "#FEE2E2", textColor: "#991B1B" } },
      { name: "Yellow", value: { bodyColor: "#FEF3C7", textColor: "#92400E" } },
      { name: "Green", value: { bodyColor: "#D1FAE5", textColor: "#065F46" } },
      { name: "Blue", value: { bodyColor: "#DBEAFE", textColor: "#1E40AF" } },
      { name: "Indigo", value: { bodyColor: "#E0E7FF", textColor: "#3730A3" } },
      { name: "Purple", value: { bodyColor: "#EDE9FE", textColor: "#5B21B6" } },
      { name: "Pink", value: { bodyColor: "#FCE7F3", textColor: "#9D174D" } },
    ],
    shapes: [
      { name: "Square", value: { borderRadius: "4px" } },
      { name: "Pill", value: { borderRadius: "12px" } },
    ],
  },
  banners: {
    types: [
      {
        name: "Success",
        value: {
          bodyColor: "#ECFDF5",
          titleColor: "#065F46",
          textColor: "#047857",
          iconProps: {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z",
            fill: "#34D399",
          },
        },
      },
      {
        name: "Warning",
        value: {
          bodyColor: "#FFFBEB",
          titleColor: "#92400E",
          textColor: "#B45309",
          iconProps: {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z",
            fill: "#FBBF24",
          },
        },
      },
      {
        name: "Error",
        value: {
          bodyColor: "#FEF2F2",
          titleColor: "#92400E",
          textColor: "#B45309",
          iconProps: {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z",
            fill: "#F87171",
          },
        },
      },
      {
        name: "Neutral",
        value: {
          bodyColor: "#EFF6FF",
          titleColor: "#1E40AF",
          textColor: "#1C51B9",
          iconProps: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
            fill: "#60A5FA",
          },
        },
      },
    ],
  },
  testimonials: {
    format: [
      { name: "With Image", value: true },
      { name: "Plain Text", value: false },
    ],
    display: [
      { name: "Desktop", value: true },
      { name: "Mobile", value: false },
    ],
  },
  tooltips: {
    colors: [
      {
        name: "Black & White",
        value: {
          boldClasses: {
            bodyClass: "tooltip-bw-bold",
            arrowClass: "tooltip-bw-bold-arrow",
            iconClass: "tooltip-bw-bold-icon",
            titleClass: "tooltip-bw-bold-title",
            crossClass: "tooltip-bw-bold-cross",
          },
          lightClasses: {
            bodyClass: "tooltip-bw-light",
            arrowClass: "tooltip-bw-light-arrow",
            iconClass: "tooltip-bw-light-icon",
            titleClass: "tooltip-bw-light-title",
            crossClass: "tooltip-bw-light-cross",
          },
        },
      },
      {
        name: "Blue",
        value: {
          boldClasses: {
            bodyClass: "tooltip-blue-bold",
            arrowClass: "tooltip-blue-bold-arrow",
            iconClass: "tooltip-blue-bold-icon",
            titleClass: "tooltip-blue-bold-title",
            crossClass: "tooltip-blue-bold-cross",
          },
          lightClasses: {
            bodyClass: "tooltip-blue-light",
            arrowClass: "tooltip-blue-light-arrow",
            iconClass: "tooltip-blue-light-icon",
            titleClass: "tooltip-blue-light-title",
            crossClass: "tooltip-blue-light-cross",
          },
        },
      },
      {
        name: "Pink & Purple",
        value: {
          boldClasses: {
            bodyClass: "tooltip-pinkpurple-bold",
            arrowClass: "tooltip-pinkpurple-bold-arrow",
            iconClass: "tooltip-pinkpurple-bold-icon",
            titleClass: "tooltip-pinkpurple-bold-title",
            crossClass: "tooltip-pinkpurple-bold-cross",
          },
          lightClasses: {
            bodyClass: "tooltip-pinkpurple-light",
            arrowClass: "tooltip-pinkpurple-light-arrow",
            iconClass: "tooltip-pinkpurple-light-icon",
            titleClass: "tooltip-pinkpurple-light-title",
            crossClass: "tooltip-pinkpurple-light-cross",
          },
        },
      },
      {
        name: "Green",
        value: {
          boldClasses: {
            bodyClass: "tooltip-green-bold",
            arrowClass: "tooltip-green-bold-arrow",
            iconClass: "tooltip-green-bold-icon",
            titleClass: "tooltip-green-bold-title",
            crossClass: "tooltip-green-bold-cross",
          },
          lightClasses: {
            bodyClass: "tooltip-green-light",
            arrowClass: "tooltip-green-light-arrow",
            iconClass: "tooltip-green-light-icon",
            titleClass: "tooltip-green-light-title",
            crossClass: "tooltip-green-light-cross",
          },
        },
      },
    ],
    styles: [
      { name: "Bold", value: true },
      { name: "Light", value: false },
    ],
  },
  toastPopups: {
    types: [
      {
        name: "Success",
        value: {
          bodyColor: "#ECFDF5",
          titleColor: "#065F46",
          textColor: "#047857",
          classStr: "success",
          iconProps: {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "#34D399",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
      },
      {
        name: "Warning",
        value: {
          bodyColor: "#FFFBEB",
          titleColor: "#92400E",
          textColor: "#B45309",
          classStr: "warning",
          iconProps: {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            d: "M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "#FBBF24",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
      },
      {
        name: "Error",
        value: {
          bodyColor: "#FEF2F2",
          titleColor: "#92400E",
          textColor: "#B45309",
          classStr: "error",
          iconProps: {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            d: "M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "#F87171",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
      },
      {
        name: "Neutral",
        value: {
          bodyColor: "#EFF6FF",
          titleColor: "#1E40AF",
          textColor: "#1C51B9",
          classStr: "neutral",
          iconProps: {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          iconChildProps: {
            d: "M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "#60A5FA",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
        },
      },
    ],
  },
};
