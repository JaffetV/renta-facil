import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 5,
    marginVertical: 5
  },
  label: {
    width: 150,
    fontWeight: 'bold'
  },
  value: {
    flex: 1
  }
});

const ReservaPDF = ({ reservaData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Confirmación de Reserva</Text>
      
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.value}>
            {`${reservaData.nombres} ${reservaData.apellidos}`}
          </Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Vehículo:</Text>
          <Text style={styles.value}>{reservaData.vehiculo}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de Inicio:</Text>
          <Text style={styles.value}>
            {new Date(reservaData.fechaInicio).toLocaleDateString()}
          </Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de Fin:</Text>
          <Text style={styles.value}>
            {new Date(reservaData.fechaFin).toLocaleDateString()}
          </Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Ubicación:</Text>
          <Text style={styles.value}>
            {`${reservaData.ubicacionCompleta.distrito}, ${reservaData.ubicacionCompleta.provincia}, ${reservaData.ubicacionCompleta.departamento}`}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ReservaPDF; 