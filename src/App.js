import React, { Component } from 'react';
import Kekambas from './components/Kekambas'


export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	};
    
	componentDidMount(){
		console.log('App Mounted')
		fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				this.setState({data})
			})
	}

	render(){
		return (
			<>
				
				<Kekambas classmates={this.state.data}/>

			</>

		)
	}

};