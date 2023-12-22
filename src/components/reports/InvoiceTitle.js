import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
    
        marginTop: 5,
        
    },
    reportTitle:{
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        
    }
  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
  export default InvoiceTitle