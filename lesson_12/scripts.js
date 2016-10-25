var UserTable = React.createClass({
	render: funcion() {
		return (
			<div className="userTable">
				<UserSearchBar />
				<UserList />
			</div>
		);
	}
});

var UserSearchBar = React.createClass({
	render: function() {
		return (
			<div className="card userSearch">
								<form className="form-inline">
									<div className="form-group">
										<input type="search" class="form-control" />
										<button type="submit" class="btn btn-default">Szukaj</button>	
									</div>
								</form>
							</div>
		);
	}
});

var UserList = React.createClass({
	render: function() {
		return (
			<div className="userList">
			<UserRow />
			</div>
		);
	}
});

var UserRow = React.createClass({
	render: function() {
		return (
			<div className="card userRow">
									<div className="row">
										<div className="userRowLeft col-xs-2">
											<img src="https://placehold.it/150x150" alt="avatar" class="img-responsive"/>
										</div>
										<div className="userRowRight col-xs-10">
											<h4>New user 4</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
											<div className="userRowActions">
	            								<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
												<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
	            								<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
	            								<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
											</div>
										</div>									
									</div>
								</div>
							</div>
		);
	}
});

ReactDOM.render(<UserTable />, document.getElementById('content'));