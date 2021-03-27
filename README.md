# Moment

A camera app built with PWA native features.

## Design

- Organize the structure by features
- Emulate native behavior on clicking Android hardware back button by
  - using undocumented `NavController` in Ionic
  - removing and re-adding the `iframe` element on its `src` is changed
- Import common components, pipes, directives, services and modules to `SharedModule`
- Use mocks in test with testing injectables in DI
- Use virtual slides to greatly reduce memory usage on displaying full size images
- (WIP) use virtual scroll to reduce memory usage on displaying thumbnails

## Features

- Take photos in app (without using external Camera App)
- Switch ALL different cameras on devices
- Collect GPS on taking photos
- Support i18n dynamically for English and Tranditional Chinese
- Localize date format dynamically
- Share photos to other apps
- Download photos to device storage
- View next/previous photo with swiping gesture
- Show EXIF of captured photos
- Show camera with device information
- View and zoom fullscreen photos with gesture
- Opt-in automatic error report
- Load thumbnail only for small size images

## Tech Stack

- [Ionic Angular](https://ionicframework.com/docs/angular/overview): front-end UI framework
  - [Strict template check](https://angular.io/guide/template-typecheck)
  - ESLint for [TypeScript](https://github.com/typescript-eslint/typescript-eslint) and [Angular](https://github.com/angular-eslint/angular-eslint)
- [RxDB](https://rxdb.info/): reactive database fully provide rxjs `Observable` APIs
- [`@angular/pwa`](https://angular.io/guide/service-worker-intro): PWA with Angular service worker
- CD with GitHub Action PWA on GitHub Pages
- [Transloco](https://ngneat.github.io/transloco/): support i18n and localized date format
- [WebRTC](https://webrtc.org/): for in-app camera access and preview
  - Experimental [`ImageCapture`](https://www.w3.org/TR/image-capture/) API: provide full resolution image capturing
- [Web Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API): provide native GPS information
- [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) level 2: provide native sharing APIs
- [ExifReader](https://github.com/mattiasw/ExifReader): extract image metadata
- [UAParser.js](https://github.com/faisalman/ua-parser-js): user agent parser
- [Pinch zoom for Angular](https://github.com/drozhzhin-n-e/ngx-pinch-zoom): image viewer
- [Swiper Angular](https://swiperjs.com/angular): swiping slides
- [Sentry](https://sentry.io/welcome/): error report
- [Compressor.js](https://github.com/fengyuanchen/compressorjs): create thumbnail
- [NgRx/component](https://ngrx.io/guide/component): provide structural directive and pipe to handle `Observable` efficiently and safely

## Development

### Start Live-Reload

This live-reload will not enable PWA features such as service worker.

```bash
npm run serve
```

### Unit Test

```bash
npm run test.ci
```

### Lint

```bash
npm run lint
```

### Live-Reload PWA

1. `npm run build.watch.pwa`
1. `lite-server --baseDir="www"`
