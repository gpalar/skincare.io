import styles from '../styles/Home.module.css';

interface skinbuttontype {
    text: string,
    color: string,
    value: boolean,
    setState: any,
    icon?: any
}

function SkinQuizBtn(props: skinbuttontype) {
    return (
        <button onClick={() => props.setState(!props.value)} className="w-40 h-40 shadow-lg p-8 bg-dark-purple hover:bg-gray-400 text-black font-bold ">
            {props.icon}
            {props.text}
        </button>
    )
}

export default SkinQuizBtn;