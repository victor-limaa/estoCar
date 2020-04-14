import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'
import Home from './screens/Home'
import Car from './screens/Car'
import { AsyncStorage } from 'react-native'

export default function Routes(){
    const Stack = createStackNavigator()
    const [logged, setLogged] = useState(false)

    useState(() => {
        if(AsyncStorage.getItem('authorization-token') != null){
            setLogged(true)
        }

    }, [])

    return(
        <Stack.Navigator headerMode='none'>
            
                <Stack.Screen 
                    name="Login" component={Login} />
                
                <Stack.Screen
                    name="Home" component={Home} />
                <Stack.Screen
                    name='Car' component={Car}
                    initialParams={id = ''} />
            
        </Stack.Navigator> 
    )
}
