import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  public set id(_id: string) {
    this._id = _id;
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readtAt(readtAt: Date | null | undefined) {
    this.props.readtAt = readtAt;
  }
  public get readtAt(): Date | null | undefined {
    return this.props.readtAt;
  }

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
