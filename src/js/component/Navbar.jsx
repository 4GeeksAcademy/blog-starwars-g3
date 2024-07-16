import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src={logo} height={64} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{store.favorites.length}
								<span className="visually-hidden">unread messages</span>
							</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites && store.favorites.length > 0 ?
									store.favorites.map((item, index) => (
										<li key={index} className="dropdown-item">
											<Link to={`/people-details/${item?.result.uid}`}>
												{item?.result.properties.name}
											</Link>
											<button className="btn-close" onClick={() => actions.removeFavorite(item?.result.uid)}></button>
										</li>
									)) : (
										<li className="dropdown-item">No favorites yet</li>

									)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
