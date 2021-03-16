import {Component, HostBinding, HostListener} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faInstagram, faLinkedin, faMediumM} from '@fortawesome/free-brands-svg-icons';


export interface ILink {
  icon: IconDefinition;
  link: string;
  classes?: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding() readonly class = 'd-flex flex-column w-100 min-vh-100';
  readonly links: ILink[][] = [
    [{
      icon: faMediumM,
      link: 'https://2bad2furious.medium.com/',
      text: 'I sometimes get the urge to write about something I found either cool or weird'
    },
      {icon: faGithub, link: 'https://github.com/2bad2furious', text: 'Watch me try to center a div'}],
    [{icon: faInstagram, link: 'https://www.instagram.com/2qte2fabulous/', text: 'Watch me get ripped'},
      {icon: faLinkedin, link: 'https://www.linkedin.com/in/martin-macura-41442013b/', text: 'Watch me get professional'}]
  ];
  private browserDark = true;
  private customSchemeDark?: boolean;

  constructor() {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.browserDark = isDarkTheme.matches;
    isDarkTheme.addEventListener('change', e => this.browserDark = e.matches);
  }

  @HostBinding('class.bg-dark') get isDark(): boolean {
    return this.customSchemeDark ?? this.browserDark;
  }

  @HostBinding('class.bg-light') get isLight(): boolean {
    return !this.isDark;
  }

  switch(): void {
    this.customSchemeDark = !this.isDark;
  }

  @HostListener('window:resize') resized(): void {
    // no need to do anything, I just needed to force the redraw
  }
}
