// created it with: npx create-expo-app@latest --example with-router
// then: npm install expo-font axios react-native-dotenv
// then: npm install -g expo-cli
// to run: npx expo start --tunnel
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native'; // we can view the 'View' as a div and the 'Text' as a <p> tag
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return ( // the SafeAreaView allows you show the contect safely without anything appearing over it.
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}> 
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome

                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
};

export default Home;
