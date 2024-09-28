/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/call` | `/(tabs)/chat` | `/(tabs)/scan` | `/(tabs)/vip` | `/(tabs)/wishlist` | `/..\components\ChatScreenComponents\TopHead` | `/_sitemap` | `/call` | `/chat` | `/scan` | `/vip` | `/wishlist`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
