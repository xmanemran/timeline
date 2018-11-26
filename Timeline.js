import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';

export default class Timeline extends Component {
	
	render() {
		const {data} = this.props;
		return (
			<View style={styles.container}>
				{this.item(data[2], 2)}
				{this.item(data[1], 1)}
				{this.item(data[0], 0)}
			</View>
		);
	}
	
	item = ({leftContent, rightContent}, index) => {
		return (
			<View style={styles.boxRoot}>
				{this.leftItem(leftContent)}
				{this.line(index)}
				{this.rightItem(rightContent)}
			</View>
		
		)
	}
	
	line(border = 1){
		return (
			<View style={styles.lineRoot}>
				<View style={[styles.line, {borderLeftWidth: +!!border}]}>
					{this.iconHolder()}
				</View>
			</View>
		)
	}
	
	leftItem(leftContent){
		return (
			<View style={styles.leftItem}>
				{leftContent}
			</View>
		)
	}
	
	rightItem(rightContent){
		return (
			<View style={styles.rightItemRoot}>
				{rightContent}
			</View>
		)
	}
	
	iconHolder() {
		return (
			<View style={styles.iconRoot}>
				{this.icon()}
			</View>
		)
	}
	
	icon(){
		return (
			<View style={styles.icon}>
				<View style={styles.activeIcon}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
	},
	boxRoot: {
		flexDirection: 'row',
	},
	leftItem: {
		minWidth: 50,
		marginRight: 30,
		paddingTop: 20,
		paddingBottom: 20,
	},
	lineRoot: {
		height: '100%',
		alignItems: 'center'
	},
	line: {
		borderLeftWidth: 1,
		position: 'absolute',
		borderLeftColor: '#EDEDED',
		height: '100%',
		top: 20,
	},
	rightItemRoot: {
		marginLeft: 25,
		paddingTop: 20,
		paddingBottom: 20,
		flex: 1,
	},
	iconRoot: {
		left: -10,
	},
	icon: {
		width: 20,
		height: 20,
		backgroundColor: '#6CE25D',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	activeIcon: {
		width: 16,
		height: 16,
		backgroundColor: '#6CE25D',
		borderRadius: 8,
		borderWidth: 3,
		borderColor: '#FFF'
	}
});
