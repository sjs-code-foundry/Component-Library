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
