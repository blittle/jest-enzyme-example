import React from 'react';
import styles from './jest-training.styles.css';

export default class MyComponent extends React.Component {
	render() {
		return <div onClick={this.props.clicked} className={styles.wrapper}>
			Hello It changed
		</div>
	}
}
