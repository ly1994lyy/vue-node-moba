import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

const models =  TypegooseModule.forFeature([])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/vue-moba',{
      useCreateIndex:true,
      useMongoClient:true,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
