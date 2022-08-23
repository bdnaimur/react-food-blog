import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, FlatList, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import colors from '../assets/colors/colors'
import { Ionicons, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import categoriesData from '../data/categoriesData';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export const colors = {
    bgColor: '#F9F9FB',
    textDark: '#313234',
    primary: '#F5CA48',
    secondary: '#F26C68',
    textGray: '#CDCDCD',
    price: '#E4723C',
    white: '#fff'
}

export default function HomeScreen({navigation}) {

    const [isCotegoriSelected, setCategoriSelected] = useState('')

    const renderCategoryItem = ({ item, index, separators }) => {
        return (
            <TouchableOpacity
                onPress={() => setCategoriSelected(item.title)}
                style={{
                    height: 177,
                    width: 110,
                    marginTop: 15,
                    borderRadius: 20,
                    marginRight: 24,
                    backgroundColor: isCotegoriSelected == item.title ? '#F5CA48' : '#fff',
                    shadowColor: 'black',
                    shadowOffset: {
                        height: 10,
                        width: 0
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    alignItems: 'center',
                    elevation: 2,
                }}>
                <Image style={{ marginTop: 20 }} source={item.image} />
                <Text style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 14,
                    marginTop: 10
                }}>{item.title}</Text>
                <View style={{
                    marginTop: 20,
                    height: 26,
                    width: 26,
                    borderRadius: 13,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isCotegoriSelected == item.title ? '#fff' : '#F5CA48',
                }}>
                    <FontAwesome name="angle-right" size={15} color={isCotegoriSelected == item.title ? '#000' : '#fff'} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <ScrollView>
                <SafeAreaView style={{
                    marginHorizontal: 20
                }}>
                    <View style={{
                        marginTop: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'

                    }}>
                        <View>
                            <Image source={require('../assets/image/profile.png')}
                                style={{
                                    height: 40,
                                    width: 40,
                                    resizeMode: 'cover',
                                    borderRadius: 20
                                }}
                            />
                        </View>
                        <Ionicons name="md-menu-sharp" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'Montserrat-Regular',
                            fontSize: 16,
                            lineHeight: 19.5,
                            color: '#313234',
                            marginTop: 30
                        }}>Food</Text>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 32,
                            lineHeight: 39.5,
                            color: '#313234',
                            marginTop: 5
                        }}>Delivery</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 36,
                        alignItems: 'center'
                    }}>
                        <View>
                            <AntDesign name="search1" size={16} color="black" style={{
                                marginRight: 10
                            }} />
                        </View>
                        <View style={{
                            flex: 1
                        }}>
                            <TextInput
                                placeholder={'Search...'}
                                style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 14,
                                    lineHeight: 17.07,
                                    // color: '#CDCDCD',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#CDCDCD',
                                    paddingBottom: 5
                                }}
                            />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 30
                    }}>
                        <Text style={{
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 16,
                            lineHeight: 19.5
                        }}>Categories</Text>
                    </View>

                </SafeAreaView>
                <View style={{
                    marginTop: 15,
                    marginLeft: 20
                }}>
                    <View style={{}}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>

                <View style={{
                    marginTop: 20,
                    marginHorizontal: 20
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        lineHeight: 19.5,
                        marginBottom: 16

                    }}>Popular</Text>

                    <View style={{ backgroundColor: 'transparent' }}>
                        <View   style={{
                            backgroundColor: '#fff',
                            borderRadius: 25,
                            flexDirection: 'row',
                            overflow: 'hidden'

                        }}>
                            <View>
                                <View style={{
                                    paddingTop: 20,
                                    marginLeft: 20
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <MaterialCommunityIcons name="crown" size={24} color="#F5CA48" style={{
                                            marginRight: 10
                                        }} />
                                        <Text style={{
                                            fontFamily: 'Montserrat-SemiBold',
                                            fontSize: 14,
                                            lineHeight: 17.07
                                        }}>top of the week</Text>
                                    </View>
                                    <Text style={{
                                        fontFamily: 'Montserrat-SemiBold',
                                        fontSize: 14,
                                        lineHeight: 17.07,
                                        marginTop: 20
                                    }}>Primavera Pizza</Text>
                                    <Text style={{
                                        color: '#C4C4C4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Regular',
                                        lineHeight: 14.63,
                                        marginTop: 5
                                    }}>Weight 540 gr</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <TouchableOpacity 
                                    onPress={()=> {
                                        navigation.navigate('Details')
                                    }}
                                    style={{
                                        width: 90,
                                        height: 53,
                                        backgroundColor: '#F5CA48',
                                        borderTopRightRadius: 25,
                                        borderBottomLeftRadius: 25,
                                        marginTop: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <AntDesign name="plus" size={20} color="black" />
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome name="star" size={12} color="black" style={{ marginRight: 5 }} />
                                        <Text>5.0</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'transparent' }}>
                                <Image style={{
                                    width: 210, height: 125, marginTop: 18,
                                }}
                                    source={require('../assets/image/pizza1.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        flexDirection: 'row',

                    }}>
                        <View>
                            <View style={{
                                paddingTop: 20,
                                marginLeft: 20
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <MaterialCommunityIcons name="crown" size={24} color="#F5CA48" style={{
                                        marginRight: 10
                                    }} />
                                    <Text style={{
                                        fontFamily: 'Montserrat-SemiBold',
                                        fontSize: 14,
                                        lineHeight: 17.07
                                    }}>top of the week</Text>
                                </View>
                                <Text style={{
                                    fontFamily: 'Montserrat-SemiBold',
                                    fontSize: 14,
                                    lineHeight: 17.07,
                                    marginTop: 20
                                }}>Primavera Pizza</Text>
                                <Text style={{
                                    color: '#C4C4C4',
                                    fontSize: 12,
                                    fontFamily: 'Montserrat-Regular',
                                    lineHeight: 14.63,
                                    marginTop: 5
                                }}>Weight 540 gr</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    width: 90,
                                    height: 53,
                                    backgroundColor: '#F5CA48',
                                    borderTopRightRadius: 25,
                                    borderBottomLeftRadius: 25,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <AntDesign name="plus" size={20} color="black" />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <FontAwesome name="star" size={12} color="black" style={{ marginRight: 5 }} />
                                    <Text>5.0</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Image style={{
                                width: 210, height: 125, marginTop: 18,
                            }}
                                source={require('../assets/image/pizza1.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

