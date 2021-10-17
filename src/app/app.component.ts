import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {faMoon, faSun, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faInstagram, faLinkedin, faMediumM} from '@fortawesome/free-brands-svg-icons';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

export interface IScheme {
  isDark: boolean;
  isLight: boolean;
  color: 'light' | 'dark';
  invertedColor: 'light' | 'dark';
  switcherIcon: IconDefinition;
}

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
export class AppComponent implements OnInit {

  static readonly darkScheme: IScheme = {
    isDark: true,
    isLight: false,
    color: 'dark',
    invertedColor: 'light',
    switcherIcon: faSun
  };
  static readonly lightScheme: IScheme = {
    isDark: false,
    isLight: true,
    color: 'light',
    invertedColor: 'dark',
    switcherIcon: faMoon
  };
  static readonly LOCAL_STORAGE_KEY = 'scheme';

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

  private readonly localStorageSubject = new BehaviorSubject<'light' | 'dark' | null>(null);
  private readonly systemPreferenceSubject = new BehaviorSubject<'light' | 'dark' | null>(null);

  private readonly darkObservable = combineLatest([this.localStorageSubject, this.systemPreferenceSubject])
    .pipe(map(([local, system]) => {
      return (local ?? system ?? 'dark') === 'dark';
    }));
  readonly schemeObservable: Observable<IScheme> = this.darkObservable
    .pipe(map(v => v ? AppComponent.darkScheme : AppComponent.lightScheme));

  constructor(
    private readonly e: ElementRef<HTMLElement>
  ) {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (isDarkTheme.matches || window.matchMedia('(prefers-color-scheme: light)')) {
      this.systemPreferenceSubject.next(isDarkTheme.matches ? 'dark' : 'light');
      isDarkTheme.addEventListener('change', ev => this.systemPreferenceSubject.next(ev.matches ? 'dark' : 'light'));
    }

    const localScheme = localStorage.getItem(AppComponent.LOCAL_STORAGE_KEY);
    if (localScheme === 'light') {
      this.localStorageSubject.next('light');
    } else if (localScheme === 'dark') {
      this.localStorageSubject.next('dark');
    }

    this.setBgColorAsync();
  }

  ngOnInit(): void {
    setTimeout(() => document.body.classList.remove('inactive'), 500);
  }

  async switch(): Promise<void> {
    const v = await this.schemeObservable.pipe(take(1)).toPromise();
    this.localStorageSubject.next(v.invertedColor);
    localStorage.setItem(AppComponent.LOCAL_STORAGE_KEY, v.invertedColor);
    this.setBgColor(v.invertedColor);
  }

  @HostListener('window:resize') resized(): void {
    // no need to do anything, I just needed to force the redraw
  }

  private setBgColor(scheme: 'light' | 'dark'): void {
    this.e.nativeElement.classList.toggle('bg-light', scheme === 'light');
    this.e.nativeElement.classList.toggle('bg-dark', scheme === 'dark');
  }

  private async setBgColorAsync(): Promise<void> {
    this.setBgColor((await this.schemeObservable.pipe(take(1)).toPromise()).color);
  }
}
