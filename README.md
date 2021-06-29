# Ionic PWA Example - [Moment](https://seanwu1105.github.io/ionic-pwa-example-moment)

[![build](https://github.com/seanwu1105/ionic-pwa-example-moment/actions/workflows/build.yml/badge.svg)](https://github.com/seanwu1105/ionic-pwa-example-moment/actions/workflows/build.yml)

An offline camera app built with PWA without any native framework.

| Onboarding                                                                                                 | Installation                                                                                               | Capturing                                                                                                  |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![](https://user-images.githubusercontent.com/14951000/112729593-f0d7a580-8f67-11eb-8bbb-b15aac1cdf63.gif) | ![](https://user-images.githubusercontent.com/14951000/112729595-f208d280-8f67-11eb-861d-550ade2b8c28.gif) | ![](https://user-images.githubusercontent.com/14951000/112729596-f46b2c80-8f67-11eb-8e84-b53ad3052a6f.gif) |

| Photo Details                                                                                              | Dark Theme                                                                                                 | Internationalization                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![](https://user-images.githubusercontent.com/14951000/112729598-f7feb380-8f67-11eb-9801-e567f89ca066.gif) | ![](https://user-images.githubusercontent.com/14951000/112729601-f92fe080-8f67-11eb-97ba-a7723bdfd302.gif) | ![](https://user-images.githubusercontent.com/14951000/112729602-f92fe080-8f67-11eb-8b03-834735ae802f.gif) |

## Installation

[![launch now](https://user-images.githubusercontent.com/14951000/112782686-2f608380-9080-11eb-970e-b1ba58cfd509.png)](https://seanwu1105.github.io/ionic-pwa-example-moment)

## Design

- Organize the project structure by features
- Emulate native behavior on clicking Android hardware back button by
  - using undocumented `NavController` in Ionic
  - removing and re-adding the `iframe` element on its `src` is changed
- Import common components, pipes, directives, services and modules to `SharedModule`
- Use mocks in test with testing injectables in DI
- Use virtual slides to greatly reduce memory usage on displaying full size images
- (WIP) use virtual scroll to reduce memory usage on displaying thumbnails

## Features

- Support offline mode after installed
- Store data locally
- Take photos in app (without using external camera app)
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

```bash
npm run build.watch.pwa
lite-server --baseDir="www"
```
