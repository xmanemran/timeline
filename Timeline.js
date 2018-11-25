import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Timeline extends Component {
  render() {
    return (
      <View style={styles.container}>

        {this.box()}
        {this.box()}
        {this.box(0)}
      </View>
    );
  }

  box(border = 1) {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', minHeight: 80,}}>
        <View style={{marginRight: 20, minWidth: 50,}}>
          <Text style={{textAlign: 'center'}}>12:28 PM</Text>
        </View>
        <View style={{height: '100%'}}>
          <View style={{borderLeftWidth: border, borderLeftColor: '#EDEDED', flex: 1, top: '50%'}}>
            {this.icon()}
          </View>
        </View>
        <View style={{paddingLeft: 30}}>
          <Text style={{fontSize: 13, color: '#313131'}}>Order has been placed successfully</Text>
        </View>
      </View>

    )
  }

  icon() {
    return (
      <View style={{
        width: 20,
        position: 'absolute',
        left: -10,
        top: -10,
        height: 20,
        backgroundColor: '#6CE25D',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{width: 16,height: 16, backgroundColor: '#  ', borderRadius: 8, borderWidth: 3, borderColor: '#FFF'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
