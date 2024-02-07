import React, { useState, useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, SafeAreaView, Pressable, FlatList, Linking } from 'react-native';
import { CheckIcon, Select } from 'native-base';

import api from '../../services/api';
import {
    ArrowDownUp,
    FlightDistancelogo,
    Logo,
    Rupees,
    Settings
} from '../../assets/images/index';
import styles from './styles';

export default function Flights() {
    const navigation = useNavigation();
    const [service, setService] = useState("");
    const [flights, setFlights] = useState([]);
    const [flightsData, setFlightsdata] = useState([]);
    const [priceOrder, setPriceOrder] = useState('asc');

    async function loadFlights() {
        const response = await api.get();
        setFlights(handleSortByPrice(response?.data?.data?.result ));
        setFlightsdata(response?.data?.data?.result );
    }
    useEffect(() => {
        loadFlights();
    }, []);

    const getSelectData = useMemo(() => {
        return [...new Set(flightsData.map(flight => flight?.displayData?.airlines[0]?.airlineName) || [])]
    }, [flightsData])

    const handleFlightDetails = (flight) => {
        navigation.navigate('FlightDetails', { flight });
    }

    useEffect(() => {
        setFlights(handleSortByPrice(flights))
    }, [priceOrder])

    const handleSortByPrice = (data = []) => {
        if (priceOrder === "asc") {
            return [...(data || [])]?.sort((a, b) => a.fare - b.fare)
        } else {
            return [...(data || [])]?.sort((a, b) => b.fare - a.fare)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.headerText}>JetSetGo</Text>
                        <Image style={styles.logo} source={Logo} />
                    </View>
                    <Pressable style={styles.filterContainer} onPress={() => Linking.openSettings()}>
                        <Image style={styles.filter} source={Settings} />
                    </Pressable>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Listing of Airlines</Text>
                    <Pressable onPress={() => setPriceOrder(priceOrder === "asc" ? "desc" : "asc")} style={styles.priceSortContainer}>
                        <Text style={styles.priceFilterText}>Price</Text>
                        <Image style={{ height: 20, width: 20 }} source={ArrowDownUp} />
                    </Pressable>
                </View>
                <View style={styles.subContainer}>
                    <Select
                        selectedValue={service}
                        minWidth="200"
                        accessibilityLabel="Choose Airline"
                        placeholder="Choose Airline"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }}
                        mt={1}
                        onValueChange={itemValue => {
                            setService(itemValue);
                            const filteredFlightsByService = flightsData.filter(item => item?.displayData?.airlines[0]?.airlineName === itemValue);
                            const sortedFlightsByPrice = handleSortByPrice(filteredFlightsByService);
                            setFlights(sortedFlightsByPrice);
                        }}
                    >
                        {getSelectData?.map((item) => {
                            return <Select.Item label={item} value={item} key={item} />;
                        })}
                    </Select>
                </View>
                <FlatList
                    style={styles.flightList}
                    data={flights}
                    keyExtractor={flight => String(flight.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: flight }) => {
                        const dateTimeDeptString = flight?.displayData?.source?.depTime;
                        const dateTimeArrString = flight?.displayData?.destination?.arrTime;
                        const deptDateTime = new Date(dateTimeDeptString);
                        const arrDateTime = new Date(dateTimeArrString);
                        const hoursOfDept = deptDateTime.getHours();
                        const hoursOfArr = arrDateTime.getHours();
                        const minutesOfDept = deptDateTime.getMinutes();
                        const minutesOfArr = arrDateTime.getMinutes();

                        return <View style={styles.flightContainer} key={flight.id}>
                            <View style={styles.flightSubContainer}>
                                <View style={styles.airlineContainer}>
                                    <View style={styles.airlineNameContainer}>
                                        <Text style={styles.alirlineName}>{flight?.displayData?.airlines[0]?.airlineName}</Text>
                                    </View>
                                </View>
                                <Text style={styles.totalDuration}>{flight?.displayData?.totalDuration}</Text>
                            </View>
                            <View style={[styles.flightSubContainer, { marginTop: 15 }]}>
                                <View >
                                    <Text style={styles.arrDeptTime}>{hoursOfDept}.{minutesOfDept}</Text>
                                    <Text style={styles.cityCode}>{flight?.displayData?.source?.airport?.cityCode} ({flight?.displayData?.source?.airport?.cityName})</Text>
                                </View>
                                <Image source={FlightDistancelogo} style={{ alignSelf: 'baseline', width: '40%' }} />
                                <View >
                                    <Text style={[styles.arrDeptTime, { textAlign: 'right' }]}>{hoursOfArr}.{minutesOfArr}</Text>
                                    <Text style={styles.cityCode}>{flight?.displayData?.destination?.airport?.cityCode}  ({flight?.displayData?.destination?.airport?.cityName})</Text>
                                </View>
                            </View>
                            <View style={styles.fareContainer}>
                                <Text style={styles.flightfareText}>Price: </Text>
                                <Text style={styles.flightfarePriceText}><Image style={{ width: 20, height: 20 }} source={Rupees} />{flight.fare}</Text>
                            </View>
                            <View>
                                <Pressable style={styles.searchButton} onPress={() => handleFlightDetails(flight)}><Text style={styles.searchText}>Check</Text></Pressable>
                            </View>
                        </View>
                    }}
                />
            </View>
        </SafeAreaView>
    );
}