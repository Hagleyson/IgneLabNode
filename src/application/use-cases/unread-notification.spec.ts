import { UnreadNotification } from './unred-notification';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { NotificationNotFound } from './erros/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readtAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readtAt).toBeNull();
  });
  it('should not be able to read, a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
