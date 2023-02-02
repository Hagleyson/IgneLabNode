import { Notification } from '@application/entities/notifications';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipient_id: notification.recipientId,
    };
  }
}
