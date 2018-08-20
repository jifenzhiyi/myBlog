import { Message } from 'element-ui';
import '@/styles/message.css';

const messageOptions = message => ({
  message,
  center: true,
  duration: 1000,
});

export const info = message => Message.info(messageOptions(message));
export const warning = message => Message.warn(messageOptions(message));
export const error = message => Message.error(messageOptions(message));
