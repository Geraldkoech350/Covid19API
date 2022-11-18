import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AboutUs(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton
                className={props.darkMode ? "bg-dark text-light" : "bg-light text-dark"}
            >
                <Modal.Title
                    id="contained-modal-title-vcenter">
                    COVID 19 Tracker
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
                className={props.darkMode ? "bg-dark text-light" : "bg-light text-dark"}
            >
                <h4>About this site</h4>
                <div className="qna">
                    <p className="about-question">
                        <i className="fas fa-question-circle orange-text"></i> Why was
                        this site created?
                    </p>
                    <p className="about-answer">
                        <i className="fas fa-pen green-text"></i> This is an unofficial
                        site created in public interest to track the COVID 19 cases across
                        the state of Karnataka.
                    </p>
                </div>

                <div className="qna">
                    <p className="about-question">
                        <i className="fas fa-question-circle orange-text"></i> From where
                        is all the information sourced?
                    </p>
                    <p className="about-answer">
                        <i className="fas fa-pen green-text"></i> The data is collated
                        from the API open sourced by the{" "}
                        <a href="https://rapidapi.com/hub" target="blank" rel="noopener">
                            rapidapi.com
                        </a>{" "}
                        team.
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer
                className={props.darkMode ? "bg-dark text-light" : "bg-light text-dark"}
            >
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AboutUs;