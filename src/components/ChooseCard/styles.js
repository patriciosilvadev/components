import { primaryColor, grayColor4, fontBody, grayColor1 } from '@ziro/theme'

export const

container = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridColumnGap: '10px'
},

cardContainer = (showDelete) => ({
    display: 'grid',
    gridTemplateColumns: showDelete ? '60px 1fr 60px' : '60px 1fr',
    boxShadow: '0px 0px 3px 0px rgba(34, 34, 34, 0.3)',
    height: '60px',
    alignItems: 'center',
    margin: '5px 0px',
    justifyItems: 'center',
    borderRadius: '3px'
}),

brandContainer = {
    display: 'grid',
    width: 60,
    height: 60,
    background: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px'
},

cardNumber = {
    fontFamily: fontBody,
    color: primaryColor,
    textAlign: 'center'
},

cardDelete = {
    height: '60px',
    width: '60px',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    borderLeft: `1px solid ${grayColor4}`,
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px'
},

cardStatus = {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '300',
    color: grayColor1
}