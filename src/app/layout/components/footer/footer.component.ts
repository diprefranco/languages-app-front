import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  appName = 'Languages App';
  currentYear = new Date().getFullYear();
  repoUrl = 'https://github.com/diprefranco/languages-app-front';

  constructor() { }

  ngOnInit(): void {
  }

}
