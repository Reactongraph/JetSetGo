import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFA'
    },
    flightContainer: {
        margin: 22,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        height: '60%'
    },

    flightSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },

    airlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    airlineNameContainer: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D9D9D9',
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 10
    },

    alirlineName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2E3192'
    },

    airlineCode: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: '600',
    },

    totalDuration: {
        fontSize: 18,
        fontWeight: '700'
    },

    arrDeptTime: {
        fontSize: 28,
        fontWeight: 'bold',
        color:'gray'
    },

    cityCode: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    filterContainer: {
        marginTop: 20,
        width: 40,
        height: 40
    },
    filter: {
        width: 25,
        height: 25
    },
    priceSortContainer: {
        marginTop: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceFilterText: {
        marginRight: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    selectItem: {
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'red'
    },
    fareContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        borderTopColor: '#EC441E',
        borderTopWidth: 1
    },
    flightfareText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center'
    },
    flightfarePriceText: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    searchButton: {
        marginTop: 15,
        backgroundColor: '#EC441E',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 12
    },

    searchText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center'
    },
    airportnameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    airportNameText: {
        fontSize: 14,
        fontWeight: '600',
        width: '50%',
        color:'gray'
    }
});