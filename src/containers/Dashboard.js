import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions';
import Selectors from 'selectors';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CONFIG from 'react-native-config';

class Dashboard extends Component {
  render() {
    const { token, signOut } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Dashboard</Text>
        <Text style={styles.text}>
          Environment:
          {' '}
          {CONFIG.ENVIRONMENT}
        </Text>
        {token !== null && <TouchableOpacity style={styles.buttonSignOut} onPress={() => signOut()}><Text style={styles.buttonSignOutText}>Sign Out</Text></TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  buttonSignOut: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonSignOutText: {
    color: '#1E90FF',
  },
});

Dashboard.propTypes = {
  signOut: PropTypes.func.isRequired,
  token: PropTypes.string,
};

Dashboard.defaultProps = {
  token: null,
};

const mapStateToProps = store => ({
  token: Selectors.getToken(store),
});

const mapDispatchToProps = {
  signOut: Actions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
