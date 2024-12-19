import next from "eslint-config-next";

export default [
  next,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-undef": "off",
    },
    ignores: ["node_modules/", ".next/"],
  },
];
