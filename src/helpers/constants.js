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
          iconColor: "#34D399",
          titleColor: "#065F46",
          textColor: "#047857",
          iconSVG: (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                fill="#34D399"
              />
            </svg>
          ),
        },
      },
      {
        name: "Warning",
        value: {
          bodyColor: "#FFFBEB",
          iconColor: "#FBBF24",
          titleColor: "#92400E",
          textColor: "#B45309",
        },
      },
      {
        name: "Error",
        value: {
          bodyColor: "#FEF2F2",
          iconColor: "#F87171",
          titleColor: "#92400E",
          textColor: "#B45309",
        },
      },
      {
        name: "Neutral",
        value: {
          bodyColor: "#EFF6FF",
          iconColor: "#60A5FA",
          titleColor: "#1E40AF",
          textColor: "#1C51B9",
        },
      },
    ],
    formats: [
      { name: "Multi-Line", value: true },
      { name: "Single-Line", value: false },
    ],
  },
};
