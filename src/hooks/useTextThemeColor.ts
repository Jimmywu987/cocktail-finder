import useDarkMode from "use-dark-mode";

export const useTextThemeColor = () => {
  const mode = useDarkMode();
  return mode.value ? "#f3f4f6" : "#6b7280";
};
