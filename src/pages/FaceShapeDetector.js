import React, {useEffect, useRef, useState} from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import 'face-api.js';
import '../style/FaceShapeDetector.css'

function FaceShapeDetector() {
    const webcamRef = useRef(null);
    const [faceShape, setFaceShape] = useState('');
    const [faceNotDetected, setFaceNotDetected] = useState('');

    useEffect(() => {
        async function loadModels() {
            await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('./models');
            await faceapi.nets.tinyYolov2.loadFromUri('./models');
            console.log('Models loaded successfully');
        }

        loadModels();
    }, []);

    const initializeWebcam = () => {
        const video = webcamRef.current.video;

        // Start capturing video stream
        navigator.mediaDevices.getUserMedia({video: {}})
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
            });
    };

    const detectFaces = async () => {
        const video = webcamRef.current.video;

        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
        console.log(detections);

        if (detections.length > 0) {
            const faceLandmarks = detections[0].landmarks._positions;
            setFaceNotDetected("");
            // Get relevant facial landmarks
            const jawline = faceLandmarks.slice(0, 17); // Jawline points

            // Perform face shape analysis (customize based on your criteria)
            const faceWidth = jawline[jawline.length - 1].x - jawline[0].x;
            const faceHeight = Math.max(...jawline.map(point => point.y)) - Math.min(...jawline.map(point => point.y));

            // Calculate face ratio
            const faceRatio = faceWidth / faceHeight;

            // Define thresholds for different face shapes (adjust as needed)
            const roundThreshold = 0.85;
            const squareThreshold = 1.2;
            const heartThreshold = 0.75;
            const triangularThreshold = 0.9;

            // Determine face shape
            if (faceRatio < roundThreshold) {
                setFaceShape('Cercle');
                setFaceNotDetected(<span className={"text-primary"}>Votre visage est rond</span>);
            } else if (faceRatio > squareThreshold) {
                setFaceShape('Carré');
                setFaceNotDetected(<span className={"text-primary"}>Votre visage est carré</span>);
            } else if (faceRatio < heartThreshold) {
                setFaceShape('Coeur');
                setFaceNotDetected(<span className={"text-primary"}>Votre visage est sous forme de coeur</span>);
            } else if (faceRatio > triangularThreshold) {
                setFaceShape('Triangulaire');
                setFaceNotDetected(<span className={"text-primary"}>Votre visage est triangulaire</span>);
            } else {
                setFaceShape('Ovale');
                setFaceNotDetected(<span className={"text-primary"}>Votre visage est ovale</span>);
            }
        } else {
            setFaceNotDetected(<span className={"text-danger"}>Aucun visage n'est detecté. Veuillez réessayer !</span>);
        }
    };


    const handleModalShow = (e) => {
        e.stopPropagation();
        initializeWebcam();
    };

    const handleModalClose = () => {
        // Stop capturing video stream when the modal is closed
        const video = webcamRef.current.video;
        const stream = video.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            video.srcObject = null;
        }
    };


    return (
        <>
            <div className="d-flex justify-content-center mb-5">
                <div className="d-flex flex-column">
                    <button type="button" className="btn btn-success mb-5 fw-bold" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" onClick={handleModalShow}>
                        Curieux de connaître la forme de votre visage? Cliquer ici
                    </button>
                    <img style={{width:"50%", marginLeft:"25%", backgroundColor:"white"}} src={"./images/face_shapes.png"} alt={"formes_visage"}/>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true" style={{zIndex: "10000000"}} onClick={handleModalShow} onHide={handleModalClose}>
                {/* Add event listeners to initialize and close the webcam when modal is shown or hidden */}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Scannez la forme de votre visage</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <h4 className={"text-center mt-3"}>{faceShape}</h4>
                        <div className="modal-body mt-2" style={{position: 'relative'}}>
                            <Webcam
                                ref={webcamRef}
                                audio={false}
                                mirrored={true}
                                screenshotFormat="image/jpeg"
                                style={{width: "100%", height: "100%", borderRadius: "5%", border: "black solid 2px"}}
                            />
                            <div className="scanning-line"></div>
                        </div>
                        <p className={"text-center"}>{faceNotDetected}</p>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                            <button type="button" className="btn btn-primary" onClick={detectFaces}>Découvrir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FaceShapeDetector;
