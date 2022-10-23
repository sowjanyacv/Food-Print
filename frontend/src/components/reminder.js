import exclamationMark from './exclamationMark.png';
import arrowRight from './arrowRight.png';
import '../App.css';


export const Reminder = () => {

    return (
        <section className="reminder-wrapper">
            <div className="exclamationMark-container">
                <img src={exclamationMark} alt="exclamationMark" className="exclamationMark" />
            </div>

            <div className="reminder-details">
                <div className="reminder-details-text">
                    <p> Some food might go off soon! </p>
                    <span> <strong>Check items</strong></span>
                </div>
                <img src={arrowRight} alt="arrowRight" className="arrowRight" />

            </div>

        </section>
    )

}