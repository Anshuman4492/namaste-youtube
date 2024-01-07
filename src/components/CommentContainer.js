const CommentContainer = () => {
  const commentsData = [
    {
      name: "Akshay Saini",
      comment: "lorem epsum dolor it es me d",
      replies: [
        {
          name: "Akshay Saini",
          comment: "lorem epsum dolor it es me d",
          replies: [
            {
              name: "Akshay Saini",
              comment: "lorem epsum dolor it es me d",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      comment: "lorem epsum dolor it es me d",
      replies: [
        {
          name: "Akshay Saini",
          comment: "lorem epsum dolor it es me d",
          replies: [
            {
              name: "Akshay Saini",
              comment: "lorem epsum dolor it es me d",
              replies: [
                {
                  name: "Akshay Saini",
                  comment: "lorem epsum dolor it es me d",
                  replies: [
                    {
                      name: "Akshay Saini",
                      comment: "lorem epsum dolor it es me d",
                      replies: [
                        {
                          name: "Akshay Saini",
                          comment: "lorem epsum dolor it es me d",
                          replies: [
                            {
                              name: "Akshay Saini",
                              comment: "lorem epsum dolor it es me d",
                              replies: [
                                {
                                  name: "Akshay Saini",
                                  comment: "lorem epsum dolor it es me d",
                                  replies: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Saini",
      comment: "lorem epsum dolor it es me d",
      replies: [],
    },
    {
      name: "Akshay Saini",
      comment: "lorem epsum dolor it es me d",
      replies: [],
    },
    {
      name: "Akshay Saini",
      comment: "lorem epsum dolor it es me d",
      replies: [],
    },
  ];
  const Comment = ({ data }) => {
    const { name, comment, replies } = data;
    return (
      <div className="flex shadow-lg bg-gray-100 rounded-md my-2">
        <img
          className="h-8 w-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
        <div className="px-2">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    );
  };
  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    ));
  };
  return (
    <div className="m-5 p-2">
      <div className="text-2xl m-2 p-2 ">Comments :</div>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;
