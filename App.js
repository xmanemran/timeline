import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Timeline from "./Timeline";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timeline data={[
	        {
		        leftContent: <Text style={{width: 80, textAlign: 'center'}}>10/12/2018 08:02</Text>,
		        rightContent:  <Text>10/12/2018 08:02</Text>
	        },
	        {
		        leftContent: <Text style={{width: 80, textAlign: 'center'}}>10/12/2018 08:02</Text>,
		        rightContent:  (
		            <Text>
			            Wes Bos is a Full Stack Developer, Speaker and Teacher from Canada. He is a course creator, works as an independent web developer and is the co-host of Syntax - a popular web development podcast. Wes has taught over 500 students in 200+ classes and spoken at dozens of conferences around the world. Wes wrote his own bio in the third person for some reason.Wes Bos is a Full Stack Developer, Speaker and Teacher from Canada. He is a course creator, works as an independent web developer and is the co-host of Syntax - a popular web development podcast. Wes has taught over 500 students in 200+ classes and spoken at dozens of conferences around the world. Wes wrote his own bio in the third person for some reason.
                    </Text>
                )
	        },
	        {
		        leftContent: <Text style={{width: 80, textAlign: 'center'}}>10/12/2018 08:02</Text>,
		        rightContent:  <Text>Hello</Text>
	        }
        ]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
