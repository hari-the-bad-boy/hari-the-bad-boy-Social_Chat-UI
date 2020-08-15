import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Post = ({ idUser }) => {
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getPost = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const result = await get.json();
			setPost(result);
		};

		const getComments = async () => {
			const get = await fetch(
				`https://jsonplaceholder.typicode.com/comments`
			);
			const result = await get.json();
			setComments(result);
		};

		getComments();
		getPost();
	}, []);

	return post
		.filter((user) => user.userId === Number(idUser))
		.map((each) => {
			return (
				<div className="mainnotfixed">
					<div className="sidebarright">
						<small style={{ marginLeft: "42%" }}>posted on may, 25 2020</small>
						<hr style={{ width: "45%" }}></hr>
						<p style={{ marginTop: "2.5%" }}>{each.body}</p>
						<hr></hr>
						<Link to={`/post-detail/${each.id}`} key={each.id}>
						<small style={{ marginTop: "0px" }}>
							<strong>
								{
									comments.filter(
										(comm) => comm.postId === each.id
									).length
								}
							</strong>
							comments
						</small>
						</Link>
					</div>
				</div>
			);
		});
};
