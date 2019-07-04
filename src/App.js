import React, { Fragment, Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Navbar />
					<Form />
				</div>
			</Fragment>
		);
	}
}

export default App;
