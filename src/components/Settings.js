import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/slices/item.slice";
import { getTheme } from "../store/slices/theme.slice";

const Settings = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);
  const theme = useSelector((state) => state.theme);
  const itemPerPage = (e) => {
    dispatch(getItem(e.target.value));
  };
  const darkOrLigth = (e) => {
    dispatch(getTheme());
    if (e.target.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <div className="Settings">
      <Link className="btn-arrow" to={-1}>
        <i className="bx bx-left-arrow-alt"></i>
      </Link>
      <h1>Settings</h1>
      <div className="setting-theme">
        <h2>Theme</h2>
        <div>
          <span>Light</span>
          <div>
            <input
              type="checkbox"
              id="switch"
              onChange={darkOrLigth}
              checked={theme}
            />
            <label htmlFor="switch" className="lbl-settings"></label>
          </div>
          <span>Dark</span>
        </div>
      </div>
      <div className="setting-item-per-page">
        <h2>Item per page</h2>
        <select onChange={itemPerPage} value={item}>
          <option value={4}>4 items</option>
          <option value={8}>8 items</option>
          <option value={12}>12 items</option>
          <option value={16}>16 items</option>
          <option value={20}>20 items</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
