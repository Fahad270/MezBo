import react from "react";
import "../App.css";
export default function AdminCard(props) {
    const text = props.texttodisplay;
    const val = props.valuep;
    return (
        <>
            <div className="AdminCard">
                <b>{text}</b>
                <p>{val}</p>
                </div>
        </>
    );
}