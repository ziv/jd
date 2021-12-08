import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'messenger',
        loadChildren: () =>
          import('../messenger').then((m) => m.MessengerModule),
      },
      {
        path: '',
        redirectTo: '/messenger',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
