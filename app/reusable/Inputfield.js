import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale } from 'react-native-size-matters';

const Inputfield = ({title}) => {
  const [text, setText] = React.useState('');
  
  return (
    <TextInput
    contentStyle={styles.st1}
    outlineStyle={styles.borderst}
        style={styles.inputs}
      mode="outlined"
      label={title}
      theme={{
        colors: {
            primary: '#39c2c8',
            underlineColor: 'transparent',
            background: '#ffffff'
        },
    }} />
  );
};
const styles=StyleSheet.create(
    {
        inputs:{
            // marginHorizontal:scale(28),
            fontSize:RFValue(18,680),
            height:verticalScale(40),
            marginBottom:25,
        },
        borderst:{
            borderRadius:6,
        },
        
        
    }
)
export default Inputfield;
