import styled from "styled-components"
import colors from "../../utils/style/colors"


/**
 * Keydata cards
 * @param {img} icon
 * @param {number} number
 * @param {string} text
 * @param {string} classname
 * @returns 
 */
export default function KeyData({img,number,text, className}){


    return(

        <KeyDataContainer className="keydata_container">
            <IconContainer className={className}><img src={img} alt="keyData icon" /></IconContainer>
            <div>
                <KeydataNumber>{number}</KeydataNumber>
                <KeydataText>{text}</KeydataText>
            </div>
        </KeyDataContainer>
    )
}

//------ KeyData style ------//
const KeyDataContainer= styled.div`
background-color: ${colors.lightGrey};
border-radius: 5px;
width: 258px;
height:124px;
display:flex;
justify-content: space-around;
align-items: center;
`

const IconContainer= styled.div`
width:60px;
height:60px;
display:flex;
justify-content: center;
align-items: center;
border-radius:5px;
&.calories{
    background-color: ${colors.lightRed}
}
&.proteins{
    background-color: ${colors.lightBlue}
}
&.glucids{
    background-color: ${colors.lightYellow}
}
&.lipids{
    background-color: ${colors.lightPink}
}
`
const KeydataNumber= styled.p`
font-size:20px;
font-weight:700;
color: #282D30;
`
const KeydataText= styled.p`
font-size:14px;
font-weight:500;
color: #74798C;
`