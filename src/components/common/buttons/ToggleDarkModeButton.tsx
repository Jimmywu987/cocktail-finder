import useDarkMode from "use-dark-mode";

export const ToggleDarkModeButton = () => {
  const darkMode = useDarkMode();

  return (
    <div className="ui toggle checkbox theme-btn">
      <input
        type="checkbox"
        onClick={darkMode.toggle}
        checked={darkMode.value}
      />

      <label>
        <span>{darkMode.value ? "Dark mode" : "Light mode"}</span>
      </label>
    </div>
  );
};
