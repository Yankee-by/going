import React from 'react';
import './Event.css';


class Event extends React.Component {
	constructor(props) { // eslint-disable-line no-useless-constructor
		super(props);
		// this.alive = true;
	}

	render() {
		const {info} = this.props;

		return (
			<div 
				className='event' 
				onClick={() => this.props.setEventInfo(info)}>
				<div className='inner' />
			</div> 
		)
	}
}

export default Event;