# Mayo Clinic - Component Pilot

This is a demo project for Mayo Clinic's Design System - Pilot

This Pilot uses [StencilJS](https://stenciljs.com/) to build and compile the web components. It then uses [Storybook](https://storybook.js.org/) to present the component, its variations, and its properties.

# Prerequisites

Before you clone this repository, you will need a couple of tools installed in your machine:

- [Node 16](https://nodejs.org/en/) (*.nvmrc file provided in sourcode*)
	 - This version is recommended to ensure that Storybook works propertly
# Getting Started

To run the pilot, clone this repo to a new directory:

```bash

$ git clone https://github.com/yml-org/mayo-sample-app-web.git mayo-pilot-web

$ cd mayo-pilot-web
```

## Install dependencies

Install all the dev dependencies, run:

```bash
$ npm install
```

## Build the production bundle

Build the component for production, this is the code that will be presented by Storybook:

```bash
$ npm run build
```

## Launch Storybook

To demo this component you will need to launch a local web server with the following command:

```bash
$ npm run storybook
```

This will fire a local web server at port 6006 and will launch your default browser automatically.
