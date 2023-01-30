import { GetRecipientNotification } from './get-recipient-notifications';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { makeNotification } from '@test/factories/notification-factory';

describe('recipient notification', () => {
  it('should be able to recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: '1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: '1' }),
        expect.objectContaining({ recipientId: '1' }),
      ]),
    );
  });
});
