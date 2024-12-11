import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: "shared-ui",
    loadComponent: () =>
      import("@niclas/ui").then((m) => m.UiComponent )
  }
];
