import { extendTheme } from "@chakra-ui/react"

const theme = {
  styles: {
    global: {
      body: {
        color: "#4A5568",
      },
    },
  },
  fonts: {
    body: "Acherus Grotesque, sans-serif",
    heading: "Canela, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    brandColor: "#367639",
    green: {
      // 50: "#EEF7EE",
      // 100: "#CEE9CF",
      // 200: "#AFDAB1",
      // 300: "#8FCC92",
      // 400: "#70BD73",
      // 500: "#50AF55",
      // 600: "#408C44",
      // 700: "#306933",
      // 800: "#204622",
      // 900: "#102311",
    },
  },
}

export default extendTheme(theme)
