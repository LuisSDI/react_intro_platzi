import React from 'react';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";

import 'react-circular-progressbar/dist/styles.css';
import { TodoContext } from '../TodoContext';
import { VscError } from 'react-icons/vsc'
import './LoadingComponent.css'

function LoadingComponent() {
    const { error,
        loading } = React.useContext(TodoContext);

    return (
        <div
            className="LoadingComponent">
            {error &&
                <div
                    className="LoadingComponent-error" >
                    <VscError
                        size={100}
                        color='#B00020'
                    />
                    <p>There was an error,<br />try again later </p>
                </div>
            }
            {loading && !error && <div
                className="LoadingComponent-loading">
                <ChangingProgressProvider values={[0, 100]}>
                    {percentage => (
                        <CircularProgressbar
                            value={percentage}
                            styles={buildStyles({
                                pathColor: "red",
                                pathTransition:
                                    percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",

                            },
                            )}
                        />
                    )}
                </ChangingProgressProvider>
                <p> Loading</p>
            </div>
            }
        </div>
    );
}

export { LoadingComponent };