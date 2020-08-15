import React, { useState, useEffect } from "react";

const PostPage = ({ match }) => {
	const [comments, setComments] = useState([]);
	// const [sendMessage, setSendMessage] = useState([]);

	console.log(match.params.postId);

	const { postId } = match.params;

	useEffect(() => {
		const getComments = async () => {
			const get = await fetch(
				`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
			);
			const result = await get.json();
			setComments(result);
		};

		getComments();
	}, []);
	
	return (
		<div>
			{comments.map((comm) => {
				return (
					<div key={comm.id} className="comments">
						<h5
							style={{
								marginLeft: "15px",
								marginBottom: "-10px",
							}}
						>
							{comm.name}
						</h5>
						<hr style={{ width: "50%",marginLeft: "15px" }}></hr>
						<p style={{ marginLeft: "15px" }}>{comm.body}</p>
						<hr style={{ width: "100%", height:"15px" , color:"red", backgroundColor:"grey" }}></hr>
					</div>
				);
			})}
			<div className="commentBox">
            <input
              type="text"
              name="comment"
			  placeholder="Write a Comment ..."
            />
          </div>
			<button id="send" style={{ marginLeft: "50%"} } onClick={postMessage}>
				send
			</button>
		</div>
	);
};

export default PostPage;
