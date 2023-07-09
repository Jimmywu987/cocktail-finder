import { Radio } from "semantic-ui-react";
import useDarkMode from "use-dark-mode";

export const ToggleDarkModeButton = () => {
  const darkMode = useDarkMode();

  return (
    <div className="theme-btn">
      <Radio toggle onClick={darkMode.toggle} checked={darkMode.value} />
      <span>{darkMode.value ? "Dark mode" : "Light mode"}</span>
    </div>
  );
};
