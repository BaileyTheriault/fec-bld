/* eslint-disable no-unused-vars */
const bugExample = {
  title: 'FILL_ME_IN',
  author: {
    name: { type: 'YOUR_NAME' },
    profilePicture: { type: 'FILL_ME_IN' },
  },
  description: 'FILL_ME_IN',
  assignedTo: 'FILL_ME_IN',
  createdAt: 'Whatever Date.now() spits back',
  tags: ['FILL_ME_IN'],
};

const postExample = {
  bug: 'Must be unique and reference bug ticket',
  title: 'Same as bug ticket',
  author: {
    name: { type: 'Same as bug ticket' },
    profilePicture: { type: 'Same as bug ticket' },
  },
  description: 'Same as bug ticket',
  posts: [{
    author: {
      name: { type: 'FILL_ME_IN' },
      profilePicture: { type: 'FILL_ME_IN' },
    },
    text: 'FILL_ME_IN',
    images: ['FILL_ME_IN MAX OF 3'],
    createdAt: 'Whatever Date.now() spits backs',
  },
  // however many more you feel like.
  ],
};
