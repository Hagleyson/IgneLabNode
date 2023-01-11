import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
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

  public set readtAt(readtAt: Date | null | undefined) {
    this.props.readtAt = readtAt;
  }
  public get readtAt(): Date | null | undefined {
    return this.props.readtAt;
  }

  public set createAt(createAt: Date) {
    this.props.createAt = createAt;
  }
  public get createAt(): Date {
    return this.props.createAt;
  }
}
