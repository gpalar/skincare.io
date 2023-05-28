import styles from '../styles/Home.module.css';

interface skinbuttontype {
    text: string,
    color: string,
    value: boolean,
    setState: any,
    icon?: string
}

function SkinQuizBtn(props: skinbuttontype) {
    return (
        <button onClick={() => props.setState(!props.value)} className="w-40 h-40 p-8 hover:bg-medium-tan text-black font-bold ">
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