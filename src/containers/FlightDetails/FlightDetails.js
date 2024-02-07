import { View, Image, Text, SafeAreaView, Pressable } from 'react-native';
import styles from "./styles"
import {Rupees, FlightDistancelogo} from '../../assets/images/index'

export default function FlightDetails({ route={} }) {
    const flight = route?.params?.flight
    const dateTimeDeptString = flight?.displayData?.source?.depTime;
    const dateTimeArrString = flight?.displayData?.destination?.arrTime;
    const deptDateTime = new Date(dateTimeDeptString);
    const arrDateTime = new Date(dateTimeArrString);
    const hoursOfDept = deptDateTime.getHours();
    const hoursOfArr = arrDateTime.getHours();
    const minutesOfDept = deptDateTime.getMinutes();
    const minutesOfArr = arrDateTime.getMinutes();

    return <SafeAreaView style={{ flex: 1 }} testID="flight-details">
        <View style={styles.flightContainer}>
            <View style={styles.flightSubContainer}>
                <View style={styles.airlineNameContainer}>
                    <Text style={styles.alirlineName} testID='flight-details-airlineName'>{flight?.displayData?.airlines[0]?.airlineName}</Text>
                </View>
            </View>
            <View style={[styles.flightSubContainer]}>
                <View >
                    <Text style={styles.arrDeptTime}>{hoursOfDept}.{minutesOfDept}</Text>
                    <Text style={styles.cityCode}>{flight?.displayData?.source?.airport?.cityCode}</Text>
                </View>
                <Image source={FlightDistancelogo} style={{ alignSelf: 'baseline' }} />
                <View >
                    <Text style={[styles.arrDeptTime, { textAlign: 'right' }]}>{hoursOfArr}.{minutesOfArr}</Text>
                    <Text style={[styles.cityCode, { textAlign: 'right' }]}>{flight?.displayData?.destination?.airport?.cityCode}</Text>
                </View>
            </View>
            <View style={styles.airportnameContainer}>
                <Text style={styles.airportNameText}>{flight?.displayData?.source?.airport?.airportName}</Text>
                <Text style={[styles.airportNameText, { textAlign: 'right' }]}>{flight?.displayData?.destination?.airport?.airportName}</Text>
            </View>
            <View style={styles.fareContainer}>
                <Text style={styles.flightfareText}>Price: </Text>
               <View><Image style={{ width: 20, height: 20 }} source={Rupees} /><Text style={styles.flightfarePriceText}>{flight?.fare}</Text> </View> 
            </View>
            <View>
                <Pressable style={styles.searchButton} onPress={() => null}><Text style={styles.searchText}>Confirm Booking</Text></Pressable>
            </View>
        </View>
    </SafeAreaView>
}