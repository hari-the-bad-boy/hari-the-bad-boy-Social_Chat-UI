import React, { useState, useEffect } from "react";
import { Post } from "../../components/post/post.component";

const ProfilePage = (props) => {
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
		<div className="profile">
			<h2>Profile Page</h2>
			{users
				.filter((user) => user.id === Number(props.match.params.userId))
				.map((item) => {
					return (
						<div className="leftfixed">
							<div 
								key={item.id}
								className="sidebarleft"
							>
								<img
									src={`https://robohash.org/${
										item.id + 1
									}?set=set4&size=120x120`}
									alt="profile"
								/>
								<div style={{ marginTop : "15%",marginRight: "10%" , float : "right" }}>
									<h2>{item.name}</h2>
								</div>
									<h3>{item.email}</h3>
									<h3>{`${item.address.suite}, ${item.address.street}, ${item.address.city}`}</h3>
									<h3>{item.phone}</h3>
									</div>
							
						</div>
					);
				})}
				<Post idUser={props.match.params.userId} />
		</div>
	);
};

export default ProfilePage;
