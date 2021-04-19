import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AuThemeToggle extends Component {
  @service darkMode;

  // An example of a getter to set a label
  // based on the dark mode state.
  get darkModeLabel() {
    let label;

    if (this.darkMode.isDarkOn) {
      label = 'Inverteer kleuren (aan)';
    } else {
      label = 'Inverteer kleuren (uit)';
    }

    return label;
  }

  @action
  darkModeCycle() {
    // There are checks for each state as visible
    // below, e.g. this.darkMode.isDarkAuto which is the system preference.
    // if (this.darkMode.isDarkAuto) {
    //   this.darkMode.manualDarkModeOn();
    if (this.darkMode.isDarkOn) {
      this.darkMode.manualDarkModeOff();
    } else {
      this.darkMode.manualDarkModeOn();
    }
  }

  @action
  toggleDarkMode() {
    // This uses the prebuild toggle that will
    // cycle through each state sequentially.
    this.darkMode.cycleDarkMode();
  }
}
