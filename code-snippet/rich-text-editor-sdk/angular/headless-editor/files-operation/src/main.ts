import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import './style.css';

bootstrapApplication(App).catch((err) => console.error(err));
