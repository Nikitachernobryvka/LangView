export const mockComments = [
  {
    id: 1,
    text: "Коментар 1",
    username: "User1",
    user_id: 1, 
    replies: [
      {
        id: 2,
        text: "Відповідь на коментар 1",
        username: "User2",
        user_id: 2,
        level: 1,
        replies: []
      }
    ],
    level: 0,
    likes: 0,
    dislikes: 0
  },
  {
    id: 3,
    text: "Коментар 2",
    username: "User3",
    user_id: 3,
    replies: [],
    level: 0,
    likes: 0,
    dislikes: 0
  }
];


export const mockNewComment = {
  id: 2,
  text: "Новий коментар",
  username: "User№2",
  user_id: 2,
  replies: []
};
