const database = {
  users: [
    {
      id: 1,
      username: "kj",
      email: "kevin@kevin.com",
      hash: "password",
      admin: true,
      moderator: true
    }
  ],
  languages: [
    { id: 1, name: "C" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "Python" }
  ],
  features: [
    { id: 1, name: "Comment" },
    { id: 2, name: "Variable Declaration" },
    { id: 3, name: "Loop" },
    { id: 4, name: "Hello World" }
  ],
  code_samples: [
    {
      id: 1,
      content: "/* My C comment */",
      language_id: 1,
      feature_id: 1,
      user_id: 1,
      source: ""
    },
    {
      id: 2,
      content: "// My JS comment\n // A Second comment.",
      language_id: 2,
      feature_id: 1,
      user_id: 1,
      source: ""
    },
    {
      id: 3,
      content: "# My Python comment",
      language_id: 3,
      feature_id: 1,
      user_id: 1,
      source: ""
    },
    {
      id: 4,
      content: "int i = 42;",
      language_id: 1,
      feature_id: 2,
      user_id: 1,
      source: ""
    },
    {
      id: 5,
      content: "const i = 42;",
      language_id: 2,
      feature_id: 2,
      user_id: 1,
      source: ""
    },
    {
      id: 6,
      content: "i = 42",
      language_id: 3,
      feature_id: 2,
      user_id: 1,
      source: ""
    }


  ]
};

export default database;
