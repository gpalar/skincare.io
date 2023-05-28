import styles from '../styles/Home.module.css';

import {useEffect,useState} from 'react'

interface skinbuttontype {
    text: string,
    color: string,
    value: boolean,
    setState: any,
    icon?: string,
}

function SkinQuizBtn(props: skinbuttontype) {
    //const buttonColor = props.value ? '#f6e6d6' : '#e8cdb3';

    const [buttonColour,setButtonColour] = useState(props.value ? '#caaa8b' : '#f6e6d6');

    useEffect(() => {
        setButtonColour(props.value ? '#caaa8b' : '#f6e6d6')
    }, [props])

    const [isHover, setIsHover] = useState(false);

    const calculateStyleOfButton = () => {

        var buttonColourToSet = buttonColour;

        var borderColor = "#caaa8b00"

        if (isHover) {
           // buttonColourToSet = 'red'
           borderColor = '#caaa8bff'
        }

        return {
            backgroundColor: `${buttonColourToSet}`,
            borderWidth: '3px',
            borderColor
        }
    }
 
    return (
        <button onClick={() => props.setState(!props.value)} 
        
        onMouseEnter={() => {
            setIsHover(true)
        }}
        
        onMouseLeave={() => {
            setIsHover(false)
        }}
        
        className={`w-40 h-40 p-8  text-black font-bold`}
        
        style={calculateStyleOfButton()}
        
        >
            {
                props.icon && (
                    <img src={props.icon} className='w-12 mx-auto mb-4' />
                )
            }
            {props.text}
        </button>
    )
}

export default SkinQuizBtn;