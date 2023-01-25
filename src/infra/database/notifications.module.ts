import { PrimaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from 'src/application/repositories/notification-repostory';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrimaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
