// @flow

export type Item = {
  id: string,
  listId: string,
  name: string,
  description: string,
  avatar: string,
  nbLikes: number,
  nbMessages: number,
  nbEmails: number,
  notificationsEnabled: boolean,
  rate: number,
  order: number,
  createdAt: number,
};
