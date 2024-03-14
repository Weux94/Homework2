import "./List.css";

export default function List ({props}=[]) {
    return props.length ? <ul className="list">
        {props.map((item, index) => <li key={index}>{item}</li>)}
    </ul> : null;
} 
