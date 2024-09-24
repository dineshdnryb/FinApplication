import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, IconButton, FAB } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { RFValue } from 'react-native-responsive-fontsize';

const CustomerView = () => {
    const navigation = useNavigation();

    const profileData = {
        id: "123456",
        name: "John Doe",
        email: "johndoe@example.com",
        mobile: "34567890",
        loanAmount: "5000",
        pendingAmount: "200",
        paidAmount: "4800",
        dueDate: "2024-09-30",
        issueDate: "2023-09-01",
        dueDay: "Monday",
    };

    const editDetails = () => {
        navigation.navigate('CustomerProfile', { editable: false,customeredit: true });  
    }

    return (
        <ScrollView style={{backgroundColor:'#ffffff'}}>
            <View style={[styles.container, { flexDirection: 'row', alignItems: 'center', marginLeft: 10 }]}>
                <Icon name='chevron-left' size={40} onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Customer Profile</Text>
            </View>
            <View style={styles.profilecontainer} elevation={4}>
                <View style={styles.header}>
                    <FAB icon="account-edit-outline" mode='flat' color='#39c2c8' size="small" style={styles.fab} onPress={editDetails} />
                    {/* <TouchableOpacity>
                      <IconButton icon="account-edit-outline" iconColor='#39c2c8' size={35} onPress={() => console.log('Pressed')}/>
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity>
                      <IconButton icon="trash-can-outline"  iconColor='red' size={35} onPress={() => console.log('Pressed')}/>
                    </TouchableOpacity> */}
                </View>
                {/* <FAB icon="account-edit-outline" color='#ffffff' style={styles.fab} onPress={() => console.log('Pressed')}/> */}
                <View>
                    <Image elevation={4} source={require('@/assets/images/react-logo.png')} style={styles.image}
                        resizeMode="cover" />
                    <FAB icon="trash-can-outline" color="red" mode='flat' size="small" style={styles.fabdelete} onPress={() => console.log('Pressed')} />
                </View>
                <Text Text style={styles.id}>{profileData.id}</Text>
                <Text style={styles.name}>{profileData.name}</Text>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Email</Text>
                    <Text style={styles.infoValue}>{profileData.email}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Mobile</Text>
                    <Text style={styles.infoValue}>+91-{profileData.mobile}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Date of Birth</Text>
                    <Text style={styles.infoValue}>{profileData.mobile}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>ID Proof</Text>
                    <Text style={styles.infoValue}>{profileData.mobile}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Loan Amount</Text>
                    <Text style={styles.infoValue}><Icon name="currency-inr" size={20}></Icon>{profileData.loanAmount}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Pending Amount</Text>
                    <Text style={styles.infoValue}><Icon name="currency-inr" size={20}></Icon>{profileData.pendingAmount}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Paid Amount</Text>
                    <Text style={styles.infoValue}><Icon name="currency-inr" size={20}></Icon>{profileData.paidAmount}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Weekly Due Amount</Text>
                    <Text style={styles.infoValue}><Icon name="currency-inr" size={20}></Icon>{profileData.paidAmount}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Issue Date</Text>
                    <Text style={styles.infoValue}>{profileData.issueDate}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Due Date</Text>
                    <Text style={styles.infoValue}>{profileData.dueDate}</Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Weekly Collection Day</Text>
                    <Text style={styles.infoValue}>{profileData.dueDay} </Text>
                    <Divider style={styles.divider} />

                    <Text style={styles.infoText}>Address</Text>
                    <Text style={styles.infoValue}>{profileData.dueDay}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(40),
    },
    title: {
        fontSize: RFValue(13, 480)
    },
    profilecontainer: {
        marginHorizontal: 20,
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        padding: verticalScale(25),
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#f8f8f8'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        paddingBottom: 20,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    id: {
        fontSize: RFValue(13, 460),
        fontWeight: 'bold',
        color: '#39c2c8',
        marginTop: verticalScale(4),
    },
    name: {
        fontSize: RFValue(14, 480),
        fontWeight: 'bold',
        marginBottom: verticalScale(20),
    },
    infoContainer: {
        alignItems: 'flex-start',
        width: '100%',
    },
    infoText: {
        fontSize: RFValue(14, 700),
        color: '#666666',
        marginTop: verticalScale(2)
    },
    infoValue: {
        fontSize: RFValue(11, 500),
        marginVertical: 2,
        color: '#000',
        marginVertical: 8,
        fontWeight:'bold'
    },
    divider: {
        width: '100%',
        backgroundColor: '#cccccc',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    fabdelete: {
        position: 'absolute',
        right: -10,
        bottom: -6,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#ededed'
    },
    fab: {
        position: 'absolute',
        right: -10,
        bottom: 5,
        borderRadius: 50,
        backgroundColor: '#ffffff',
    },
});

export default CustomerView;
