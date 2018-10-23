import React, { Component } from 'react';

import { Text, View, TouchableOpacity, ActionSheetIOS } from 'react-native';

import { Icon } from 'react-native-elements';
import moment from 'moment';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import styles from './styles';
import { actions, theme } from '../../index';

const { normalize } = theme;

class Category extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { user, categories, index } = this.props;
        const category = categories[index];
        // const { text, author, time, color, userId } = category;
        const { name } = category;

        return (
            <View style={[styles.container]}>
                <View style={[styles.wrapper, { backgroundColor: 'red', borderColor: 'red' }]}>

                    <View style={[styles.quote]}>
                        <Text style={[styles.text]}>
                            {name}
                        </Text>
                        {/* {(user.uid === userId) && this.renderOptionButton()} */}
                    </View>

                    {/* <View style={styles.bottom}>

                        <View style={styles.left}>
                            <Text style={[styles.author]}>
                                {author.name}
                            </Text>
                            <Text style={[styles.publishedAt]}>
                                {moment(time).fromNow()}
                            </Text>
                        </View>
                        <View style={styles.right}>
                            {this.renderLoveButton()}
                        </View>
                    </View> */}
                </View>

            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        user: state.authReducer.user,
        categories: state.homeReducer.categories
    };
}

export default connect(mapStateToProps)(Category);
