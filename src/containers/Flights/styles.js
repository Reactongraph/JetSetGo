import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFA'
    },

    header: {
        marginTop: 15,
        // marginLeft: 15,
        paddingLeft: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 10,
        width: '100%',
        borderBlockColor: 'gray',
    },

    logo: {
        width: 30,
        height: 30
    },

    headerText: {
        fontSize: 25,
        fontWeight: "600",
        color: '#17333C',
        marginRight: 5,
        fontStyle: 'italic',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    subContainer: {
        margin: 24,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10
    },

    heading: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: '500',
        color: '#0000A3',
        fontStyle: 'italic',
        marginLeft: 24
    },

    inputContainerStyle: {
        margin: 8,
        backgroundColor: '#fff',
        position: 'relative'
    },

    updownArrrow: {
        position: 'absolute',
        bottom: 172,
        right: 45,
        padding: 10,
        borderRadius: 100,
        borderBlockColor: "gray",
        borderWidth: 1,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        backgroundColor: '#fff'
    },
    inputContentStyle: {
        paddingLeft: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    fontSize: {
        fontSize: 18,
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

    textInputs: {
        borderColor: '#17333C',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#17333C',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#17333C'
    },

    flightList: {
        marginTop: 15,
    },

    flight: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginBottom: 16,
    },

    flightProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    flightValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#17333C',
        fontSize: 15,
        fontWeight: 'bold',
    },

    flightList: {
        margin: 20,

    },

    flightContainer: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        justifyContent: 'space-between',
    },

    flightSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%'
    },

    airlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    airlineNameContainer: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#D9D9D9',
        paddingHorizontal: 8,
        paddingVertical: 6
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
        fontWeight: '700',
        color:'gray'
    },

    arrDeptTime: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'gray'
    },

    cityCode: {
        marginTop: 10,
        fontSize: 12,
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
        fontWeight: 'bold',
        color:'gray'
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
        paddingTop: 15
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
    }

});