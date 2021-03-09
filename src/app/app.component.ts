import {Component, HostBinding} from '@angular/core';
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

  static className = 'animate__flipInX';
  @HostBinding() readonly class = 'd-flex flex-column w-100 min-vh-100';
  readonly links: ILink[][] = [
    // {icon: faTwitter, link: 'https://twitter.com/2bad2furious', classes: 'twitter', text: 'Dog stuff'},
    [{
      icon: faMediumM,
      link: 'https://2bad2furious.medium.com/',
      classes: 'medium',
      text: 'I sometimes get the urge to write about something I found either cool or weird'
    }, {icon: faGithub, link: 'https://github.com/2bad2furious', text: 'I do sometimes build stuff'}],
    [{icon: faInstagram, link: 'https://www.instagram.com/2qte2fabulous/', text: 'Watch me get ripped'},
      {icon: faLinkedin, link: 'https://www.linkedin.com/in/martin-macura-41442013b/', text: 'Watch me get professional'}]
  ];
  private browserDark = true;
  private customScheme?: boolean;
  private timeout?: ReturnType<typeof setTimeout>;

  constructor() {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.browserDark = isDarkTheme.matches;
    isDarkTheme.addEventListener('change', e => this.browserDark = e.matches);
  }

  @HostBinding('class.bg-dark') get isDark(): boolean {
    return this.customScheme ?? this.browserDark;
  }

  @HostBinding('class.bg-light') get isLight(): boolean {
    return !this.isDark;
  }

  private static resetAnimationClass(el: HTMLElement): void {
    el.classList.remove(AppComponent.className);
  }

  switch(switcher: HTMLElement): void {
    clearTimeout(this.timeout);
    switcher.classList.remove(AppComponent.className);
    setTimeout(() => switcher.classList.add(AppComponent.className));
    this.customScheme = !this.isDark;
    this.timeout = setTimeout(() => AppComponent.resetAnimationClass(switcher), 1000);
  }
}
