declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    emitter: any;
    $route: any;
    $router: any;
  }
}

export {};
