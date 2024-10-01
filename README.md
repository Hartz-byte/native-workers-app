# Worker Profiles App

## Overview

The **Worker Profiles App** is a React Native application developed using Expo that allows users to browse and search for various worker profiles based on their categories. The app features a tab navigation system, a search functionality, and a visually appealing carousel of icons representing different worker categories.

## Features

- **Two Tabs Navigation**: 
  - **Welcome Tab**: Displays a welcome message.
  - **Categories Tab**: Lists worker profiles categorized by their roles.

- **Search Functionality**: 
  - Users can filter worker profiles based on their names.

- **Category Filteration**: 
  - Users can filter worker profiles based on their work category.

- **Carousel Slider**: 
  - Displays different worker categories using icons.

- **Responsive Design**: 
  - The app is designed to be responsive across different screen sizes.


## Tech Stack

- **React Native**: Framework for building mobile applications.
- **Expo**: Toolchain for developing and deploying React Native apps.
- **React Navigation**: Library for navigating between screens.
- **React Native Vector Icons**: Icons for categorizing workers.
- **React Native Snap Carousel**: For the carousel slider.

## Installation

1. Clone the repository:

   ```bash
   https://github.com/Hartz-byte/native-workers-app.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

## Testing

 - Test the application on both Android and iOS devices to ensure compatibility.
 - Verify the navigation between tabs and the filtering of workers based on categories.

## Build and Deployment

To generate an APK for Android, run:
   ```bash
    eas build --platform android
   ```
