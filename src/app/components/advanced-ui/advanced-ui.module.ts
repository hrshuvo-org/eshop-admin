import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedUiRoutingModule } from './advanced-ui-routing.module';
import { ChatComponent } from './chat/chat.component';
import { CardsComponent } from './cards/cards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { NgxNotifierModule } from 'ngx-notifier';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxStarsModule } from 'ngx-stars';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BarRatingModule } from 'ngx-bar-rating';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    ChatComponent,
    CardsComponent,
    ContactsComponent,
    CarouselComponent,
    NotificationsComponent,
    TreeviewComponent,
    TimelineComponent,
    DraggableCardsComponent,
    SweetAlertComponent,
    RatingsComponent,
    SearchComponent,
    UserlistComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AdvancedUiRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    NgbModule, 
    NgScrollbarModule,
    DragulaModule.forRoot(),
    NgxNotifierModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatSnackBarModule,
    MatTreeModule, MatIconModule, MatProgressBarModule,
    SweetAlert2Module,NgxStarsModule,
     BarRatingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    NgSelectModule
  ],
  providers: [
  ]
})
export class AdvancedUiModule { }
