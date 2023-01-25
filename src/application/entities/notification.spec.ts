import { Content } from './content';
import { Notification } from './notifications';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: 'exemple-recipient-id',
    });
    expect(notification).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
