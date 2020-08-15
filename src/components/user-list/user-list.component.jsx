import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
	const [users, setUser] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			const get = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const result = await get.json();
			setUser(result);
		};

		getUser();
	}, []);

	return (
		<div>
			{users.map((user) => {
				return (
					<div className="Post">
        				<div className="upperCnt">
          					<div className="postAuthor">
								<div className="Header">
									<Link
										to={`/profile/${user.id}`}
										key={user.id}
										className="users"
									>	
										<h5>{user.name}</h5>
									</Link>
								</div>
            					<div className="authorImage">
									<Link
										to={`/profile/${user.id}`}
										key={user.id}
										className="users"
									>
										<img
											src={`https://robohash.org/${
												user.id + 1
											}?set=set4`}
											alt="profile"
										/>
									</Link>
								</div>
							</div>
							<div className="postContent">
								<div className="Header">
									<h5>New Post...</h5>
								</div>
								<div className="postContent_content">{user.company.catchPhrase}</div>
								<div className="actionCnt">
									<div className="likes">
										<i className="fas fa-thumbs-up"></i>
										{user.id *(25-user.id)} Likes
									</div>
									<div className="comments">
										<i className="fas fa-comments"></i>
										5 Comments
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
