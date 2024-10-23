import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { RestaurantModule } from './restaurant/restaurant.module';
import { TablesModule } from './tables/tables.module';
import { MenuModule } from './menu/menu.module';
import { MenuCategoryModule } from './menu_category/menu_category.module';
import { LanguageModule } from './language/language.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { ManagersModule } from './managers/managers.module';
import { ReservationsModule } from './reservations/reservations.module';
import { StatusModule } from './status/status.module';
import { PaymentsModule } from './payments/payments.module';
import { WaiterModule } from './waiter/waiter.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "public"),
    // }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    RestaurantModule,
    TablesModule,
    MenuModule,
    MenuCategoryModule,
    LanguageModule,
    ClientModule,
    AuthModule,
    ManagersModule,
    ReservationsModule,
    StatusModule,
    PaymentsModule,
    WaiterModule,
  ],
})
export class AppModule {}
