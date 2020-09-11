import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys dispiníveis" />
            <View style={styles.listContainer}>
                <View style={styles.listItem}>
                    
                    <Text>Walter Cruz</Text>
                </View>
            </View>
        </View>
    );
}

export default TeacherList;