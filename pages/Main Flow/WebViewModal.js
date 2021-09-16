import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Dimensions, ActivityIndicator, Platform, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { accountStyle, styles } from '../StyleSheet';
export default function WebViewModal({route, navigation}){
  const [loading, setLoading] = useState(true);

  const { givenUrl } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            >
<View style={styles.container}>
      <Text>x</Text>
    </View>           
     </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return(
      <View style={{flex:1}}>
        <Text>WEBVIEW</Text>
    {loading ?  <ActivityIndicator
          style={{ flex:20, justifyContent:'center',alignSelf:'center' }}
          size="large"
        /> : null}
    </View>
    )

}