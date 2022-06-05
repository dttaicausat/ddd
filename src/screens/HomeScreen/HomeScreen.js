import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { COLORS, SIZES, FONTS, icons, images } from '../../../constants';

const HomeScreen = () => {

    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: 'Nạp tiền',
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: 'Chuyển tiền',
        },
        {
            id: 3,
            icon: icons.scan,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: 'Scan',
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: 'Ví',
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: 'Thanh toán hóa đơn',
        },
        {
            id: 6,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: 'Thanh toán internet',
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: 'Thanh toán điện thoại',
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: 'Thêm',
        },
    ];

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: 'Bonus Cashback1',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 2,
            img: images.promoBanner,
            title: 'Bonus Cashback2',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 3,
            img: images.promoBanner,
            title: 'Bonus Cashback3',
            description: "Don't miss it. Grab it now!",
        },
        {
            id: 4,
            img: images.promoBanner,
            title: 'Bonus Cashback4',
            description: "Don't miss it. Grab it now!",
        },
    ];

    const [features, setFeatures] = React.useState(featuresData);
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h1 }}>Chào mừng đến!</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.gray }}>BANKING APP</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray,
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5,
                            }}
                         />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 220,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={images.banner}
                    resizeMode="contain"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}
                />
            </View>
        );
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Tín năng</Text>
            </View>
        );

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color,
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        );

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        );
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        );

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log('View All')}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>

        );

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5,
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <Image
                        source={images.promoBanner}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }} />
                }
            />
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    );
};
export default HomeScreen;
