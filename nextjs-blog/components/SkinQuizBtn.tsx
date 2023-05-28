import styles from '../styles/Home.module.css';

interface skinbuttontype {
    text: string,
    color: string,
    value: boolean,
    setState: any,
    icon?: any
}

function SkinQuizBtn(props: skinbuttontype) {
    const buttonColor = props.value ? 'baby-green' : 'pretty-blue';

    return (
        <button onClick={() => props.setState(!props.value)} className="w-40 h-40 p-8 hover:bg-medium-tan text-black font-bold bg-{buttonColor}">
            {props.icon}
            {props.text}
        </button>
    )
}

export default SkinQuizBtn;