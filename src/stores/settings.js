import { defineStore } from "pinia";

const borderParser = (borderWidth, borderColor) => {
  return borderWidth === 0 ? "none" : `${borderWidth}px solid ${borderColor}`;
};
const borderWidthParser = (top, right, bottom, left) =>
  `${top} ${right} ${bottom} ${left}`;
const toRem = (value) => value + "rem";
const toPx = (value) => value + "px";

const boxShadowParser = (top, right, bottom, left, color) =>
  `${top} ${right} ${bottom} ${left} ${color}`;

export const useStore = defineStore("settings", {
  state: () => {
    return {
      prefix: "b",
      content: {
        text: "",
        lineHeight: 1.5,
        fontSize: 1,
      },
      input: {
        paddingLeft: 2,
        marginBottom: 0.4,
        height: 1.25,
        width: 1.25,
        borderWidth: 1,
        backgroundColor: "#f1f5f9",
        borderColor: "#94a3b8",
      },
      checkbox: {
        borderRadius: 0.2,
        checked: {
          backgroundColor: "#3b82f6",
          borderColor: "#1d4ed8",
          interaction: {
            backgroundColor: "#2563eb",
            borderColor: "#1e40af",
          },
        },
        interaction: {
          backgroundColor: "#e2e8f0",
          borderColor: "#64748b",
        },
      },
      checkmark: {
        left: 7,
        top: 3,
        width: 0.3,
        height: 0.6,
        color: "#ffffff",
        thickness: 2,
        disabled: {
          color: "#ffffff",
        },
      },
      radio: {
        borderRadius: 3,
        checked: {
          backgroundColor: "#3b82f6",
          borderColor: "#1d4ed8",
          interaction: {
            backgroundColor: "#2563eb",
            borderColor: "#1e40af",
          },
        },
        interaction: {
          backgroundColor: "#e2e8f0",
          borderColor: "#64748b",
        },
      },
      bull: {
        left: 4,
        top: 4,
        width: 0.75,
        height: 0.75,
        color: "#ffffff",
        borderRadius: 3,
        disabled: {
          color: "#ffffff",
        },
      },
      disabled: {
        opacity: 0.5,
      },
      ring: {
        color: "#60a5fa",
        thickness: 2,
      },
    };
  },
  getters: {
    contentFontSize: (state) => toRem(state.content.fontSize),
    inputBorder: (state) =>
      borderParser(state.input.borderWidth, state.input.borderColor),
    inputPaddingLeft: (state) => toRem(state.input.paddingLeft),
    inputMarginBottom: (state) => toRem(state.input.marginBottom),
    inputHeight: (state) => toRem(state.input.height),
    inputWidth: (state) => toRem(state.input.width),

    checkboxBorderRadius: (state) => toRem(state.checkbox.borderRadius),

    radioBorderRadius: (state) => toRem(state.radio.borderRadius),

    checkmarkLeft: (state) => toPx(state.checkmark.left),
    checkmarkTop: (state) => toPx(state.checkmark.top),
    checkmarkWidth: (state) => toRem(state.checkmark.width),
    checkmarkHeight: (state) => toRem(state.checkmark.height),
    checkmarkThickness: (state) =>
      borderWidthParser(
        0,
        toPx(state.checkmark.thickness),
        toPx(state.checkmark.thickness),
        0
      ),

    bullLeft: (state) => toPx(state.bull.left),
    bullTop: (state) => toPx(state.bull.top),
    bullWidth: (state) => toRem(state.bull.width),
    bullHeight: (state) => toRem(state.bull.height),
    bullBorderRadius: (state) => toRem(state.bull.borderRadius),

    ringThickness: (state) =>
      boxShadowParser(0, 0, 0, toPx(state.ring.thickness), state.ring.color),
  },
});
