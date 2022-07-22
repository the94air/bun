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
      prefix: "",
      content: {
        text: "",
        lineHeight: 1.54,
        fontSize: 1,
      },
      input: {
        paddingLeft: 1.8,
        marginBottom: 0.5,
        height: 1.25,
        width: 1.25,
        borderWidth: 0,
        backgroundColor: "pink",
        borderColor: "pink",
      },
      checkbox: {
        borderRadius: 0,
        checked: {
          backgroundColor: "",
          borderColor: "",
          interaction: {
            backgroundColor: "",
            borderColor: "",
          },
        },
        interaction: {
          backgroundColor: "",
          borderColor: "",
        },
      },
      checkmark: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        color: "",
        thickness: 0,
        disabled: {
          color: "",
        },
      },
      radio: {
        borderRadius: 0,
        checked: {
          backgroundColor: "",
          borderColor: "",
          interaction: {
            backgroundColor: "",
            borderColor: "",
          },
        },
        interaction: {
          backgroundColor: "",
          borderColor: "",
        },
      },
      bull: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        color: "",
        borderRadius: 0,
        disabled: {
          color: "",
        },
      },
      disabled: {
        opacity: 0,
      },
      ring: {
        color: "",
        thickness: 0,
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

    checkmarkLeft: (state) => toRem(state.checkmark.left),
    checkmarkTop: (state) => toRem(state.checkmark.top),
    checkmarkWidth: (state) => toRem(state.checkmark.width),
    checkmarkHeight: (state) => toRem(state.checkmark.height),
    checkmarkThickness: (state) =>
      borderWidthParser(
        0,
        toPx(state.checkmark.thickness),
        toPx(state.checkmark.thickness),
        0
      ),

    bullLeft: (state) => toRem(state.bull.left),
    bullTop: (state) => toRem(state.bull.top),
    bullWidth: (state) => toRem(state.bull.width),
    bullHeight: (state) => toRem(state.bull.height),
    bullBorderRadius: (state) => toRem(state.bull.borderRadius),

    ringThickness: (state) =>
      boxShadowParser(0, 0, 0, toPx(state.ring.thickness), state.ring.color),
  },
});
