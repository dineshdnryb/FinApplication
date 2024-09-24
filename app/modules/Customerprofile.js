import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchImageLibrary } from 'react-native-image-picker';

export default function CustomerProfile() {
    const navigation = useNavigation();
    const route = useRoute();

    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        totalLoan: '',
        paidAmount: '',
        issuedDate: '',
        dueDate: '',
        lastPaidDate: '',
        status: '',
        address: '',
    });

    const [profileImage, setProfileImage] = useState(null);
    const [isEditable, setIsEditable] = useState(true);
    const [errorFields, setErrorFields] = useState({});
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [customeredit, setcustomeredit] = useState(route.params?.customeredit ?? false)

    const handleChange = (name, value) => {
        setCustomerDetails({ ...customerDetails, [name]: value });
        if (errorFields[name]) {
            setErrorFields({ ...errorFields, [name]: false });  
        }
    };

    const handleImageUpload = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                setProfileImage(response.assets[0].uri);
            }
        });
    };

    const validateForm = () => {
        const requiredFields = ['name', 'email', 'mobile', 'dob', 'totalLoan', 'paidAmount', 'issuedDate', 'dueDate', 'lastPaidDate', 'status', 'address'];
        let isValid = true;
        const newErrorFields = {};

        requiredFields.forEach(field => {
            if (!customerDetails[field]) {
                isValid = false;
                newErrorFields[field] = true; 
            }
        });

        setErrorFields(newErrorFields);
        if (!isValid) {
            setSnackbarVisible(true);
        }

        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log(customerDetails);
            // Add logic to save data
        }
    };

    const renderTextInput = (label, value, onChangeText, error) => (
        <TextInput
            label={label}
            mode="outlined"
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, error && styles.inputError]}
            editable={isEditable}
            theme={{
                colors: {
                    primary: error ? 'red' : '#39c2c8',
                    underlineColor: 'transparent', 
                    background: '#fff',
                },
            }}
        />
    );

    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
            {customeredit && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -10, marginVertical: 50, }}>
                        <Icon name='chevron-left' size={40} onPress={() => navigation.goBack()} />
                        <Text style={styles.title}>Customer Profile</Text>
                    </View>
                )}

                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={handleImageUpload}>
                        <Image
                            source={profileImage ? { uri: profileImage } : require('@/assets/images/react-logo.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        {customeredit && (
                       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                           <Text style={[styles.title, { marginVertical: 6, color: '#39c2c8', fontWeight: '600' }]}>Id</Text>
                        </View>
                    )}
                    </TouchableOpacity>

                    <View style={styles.detailsContainer}>
                        {renderTextInput("Name", customerDetails.name, text => handleChange('name', text), errorFields.name)}
                        {errorFields.name && <Text style={styles.errorText}>Name is required</Text>}

                        {renderTextInput("Email", customerDetails.email, text => handleChange('email', text), errorFields.email)}
                        {errorFields.email && <Text style={styles.errorText}>Email is required</Text>}

                        {renderTextInput("Mobile", customerDetails.mobile, text => handleChange('mobile', text), errorFields.mobile)}
                        {errorFields.mobile && <Text style={styles.errorText}>Mobile is required</Text>}

                        {renderTextInput("Date of Birth", customerDetails.dob, text => handleChange('dob', text), errorFields.dob)}
                        {errorFields.dob && <Text style={styles.errorText}>Date of Birth is required</Text>}

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
                            {renderTextInput("Total Loan Amount", customerDetails.totalLoan, text => handleChange('totalLoan', text), errorFields.totalLoan)}
                            {errorFields.totalLoan && <Text style={styles.errorText}>Total Loan is required</Text>}

                            {renderTextInput("Paid Amount", customerDetails.paidAmount, text => handleChange('paidAmount', text), errorFields.paidAmount)}
                            {errorFields.paidAmount && <Text style={styles.errorText}>Paid Amount is required</Text>}
                        {/* </View> */}

                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
                            {renderTextInput("Issued Date", customerDetails.issuedDate, text => handleChange('issuedDate', text), errorFields.issuedDate)}
                            {errorFields.issuedDate && <Text style={styles.errorText}>Issued Date is required</Text>}

                            {renderTextInput("Due Date", customerDetails.dueDate, text => handleChange('dueDate', text), errorFields.dueDate)}
                            {errorFields.dueDate && <Text style={styles.errorText}>Due Date is required</Text>}
                        {/* </View> */}

                        {renderTextInput("Last Paid Date", customerDetails.lastPaidDate, text => handleChange('lastPaidDate', text), errorFields.lastPaidDate)}
                        {errorFields.lastPaidDate && <Text style={styles.errorText}>Last Paid Date is required</Text>}

                        {renderTextInput("Status", customerDetails.status, text => handleChange('status', text), errorFields.status)}
                        {errorFields.status && <Text style={styles.errorText}>Status is required</Text>}

                        {renderTextInput("Address", customerDetails.address, text => handleChange('address', text), errorFields.address)}
                        {errorFields.address && <Text style={styles.errorText}>Address is required</Text>}
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            buttonColor='#ffffff'
                            style={[styles.continuebtn, { borderWidth: 2, borderColor: '#666', width: '48%' }]}
                            labelStyle={[styles.continuetext, { color: '#666' }]}
                            mode="contained"
                            onPress={() => navigation.goBack()} // Cancel functionality
                        >
                            Cancel
                        </Button>
                        <Button
                            mode="contained"
                            style={[styles.continuebtn, { width: '48%' }]}
                            buttonColor='#39c2c8'
                            onPress={handleSubmit}
                        >
                            Save
                        </Button>
                    </View>
                </View>
            </View>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={3000}
            >
                Please fill in all required fields.
            </Snackbar>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: RFValue(14, 450),
        color: '#333',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: verticalScale(25),
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    detailsContainer: {
        marginTop: verticalScale(10),
        width: '100%',
    },
    input: {
        marginVertical: 10,
        backgroundColor: '#fff',
    },
   
    errorText: {
        color: 'red',
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doubleField: {
        width: '48%',
    },
});
