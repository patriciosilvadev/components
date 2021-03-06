import React, { useMemo, useCallback } from 'react'
import { useAnimatedLocation } from '../FlowManager'
import { container, button, notification } from './styles'

const BottomTabBar = ({ buttons = [] }) => {

    const [currentLocation, setLocation] = useAnimatedLocation()
    const [currentIndex, gridTemplateColumns] = useMemo(() => ([
        buttons.findIndex(({ location, secondaryLocations = [] }) => currentLocation.startsWith(location) || secondaryLocations.some(loc => currentLocation.startsWith(loc))),
        buttons.map(() => '1fr').join(' ')
    ])
    ,[currentLocation,buttons])

    return (
        <div style={{ ...container, gridTemplateColumns }}>
            {
                buttons.map(({ icon, location, notificationNumber, key, onClick },index) => {
                    
                    const isSelected = useMemo(() => currentIndex === index, [currentIndex])
                    const animation = useMemo(() => currentIndex > index ? 'goRight' : 'goLeft', [currentIndex])
                    const _onClick = useCallback(() => 
                        isSelected ?
                            currentLocation === location ?
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                            : setLocation('goRight',location)
                            : setLocation(animation, location)
                    ,[isSelected, currentLocation])

                    return (
                        <div key={location||key} style={button} onClick={onClick||_onClick}>
                                {icon(isSelected)}
                                {notificationNumber && notificationNumber > 0 ?
                                    <div style={notification}>
                                    {notificationNumber}
                                    </div>
                                    : null
                                }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BottomTabBar