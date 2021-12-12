import React from "react";
import { Info, Replay } from '@material-ui/icons';

const Header = ({ 
  theme, 
  previousFormState,
  setFormState,
  handleChangeTheme,
  setIsTourOpen
}) => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">
          <div style={{display: 'block'}}>
            <h1>talent.io</h1>
            <Info 
              className="refresh-item info-step"
              onClick={() => setIsTourOpen(true)}
            />
            <Replay 
              className="refresh-item replay-step"
              onClick={() => setFormState(previousFormState)}
            />
          </div>
          <div className="toggle">
            <h2>Theme</h2>
            <div className="toggle-theme theme-step" onClick={handleChangeTheme}>
              <div className="number">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className={`switch ${theme}`}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
