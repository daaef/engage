import React, {useEffect} from 'react';
import {startAction} from "../../store/actions/start";
import {stopAction} from "../../store/actions/stop";
import {connect} from "react-redux";

export const Switch = (props)=>{
  let themeSwitch;
  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };
  
  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch');
    }
  }
  
  useEffect(() => {
    themeSwitch = document.getElementById('themeSwitch');
    console.log(themeSwitch);
    // Update the document title using the browser API
    if(themeSwitch) {
      initTheme(); // if user has already selected a specific theme -> apply it
      themeSwitch.addEventListener('change', function(event){
        resetTheme(); // update color theme
      });
    }
  }, []) ;
  return (
    <div className="switch">
      <input className="switch__input" type="checkbox" id="themeSwitch"/>
      <label aria-hidden="true" className="switch__label" htmlFor="themeSwitch">On</label>
      <div aria-hidden="true" className="switch__marker"/>
    </div>
  )
}



const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);