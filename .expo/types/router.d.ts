/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/call` | `/(tabs)/chat` | `/(tabs)/scan` | `/(tabs)/vip` | `/(tabs)/wishlist` | `/..\assets\images\CategoryPics\` | `/..\assets\images\CountryFlags\` | `/..\assets\images\ProfilePics\` | `/..\utils\CategoryData` | `/_sitemap` | `/call` | `/chat` | `/scan` | `/vip` | `/wishlist`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
