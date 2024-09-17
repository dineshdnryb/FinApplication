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
    />
  );
};
const styles=StyleSheet.create(
    {
        inputs:{
            marginHorizontal:scale(25),
            fontSize:RFValue(18,680),
            height:verticalScale(50),
            marginBottom:10
        },
        borderst:{
            borderRadius:10,
        },
        
        
    }
)
export default Inputfield;
