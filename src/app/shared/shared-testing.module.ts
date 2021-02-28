import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestingDatabase } from './database/database-testing.service';
import { Database } from './database/database.service';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
  providers: [
    {
      provide: Database,
      useClass: TestingDatabase,
    },
  ],
  exports: [SharedModule, RouterTestingModule],
})
export class SharedTestingModule {}
