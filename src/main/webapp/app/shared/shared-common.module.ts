import { NgModule } from '@angular/core';

import { MsgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MsgatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MsgatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MsgatewaySharedCommonModule {}
