import { Notification } from '@application/entities/notifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { Content } from '@application/entities/content';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: '1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: '1',
    });

    expect(count).toEqual(2);
  });
});
